from Acquisition import aq_inner, aq_parent
from Products.Five import BrowserView
from plone.app.multilingual.subscriber import createdEvent

from collective.leadmedia.utils import addCropToTranslation
from plone.app.multilingual.interfaces import ITranslatable
from plone.app.multilingual.interfaces import ITranslationManager

from plone.app.contenttypes.browser.collection import CollectionView
from plone.app.uuid.utils import uuidToCatalogBrain

from datetime import date
from DateTime import DateTime
import time

from plone.app.event.browser.event_listing import EventEventListing, EventListing, EventListingIcal
from plone.app.contenttypes.browser.folder import FolderView
import plone.api

from plone.event.interfaces import IEvent
from zope.contentprovider.interfaces import IContentProvider

from zope.component import getMultiAdapter
from urlparse import urlparse
from wildcard.media.adapter import IVideoEmbedCode

from Products.CMFCore.utils import getToolByName

from zope.i18nmessageid import MessageFactory
_ = MessageFactory('plonetheme.zeeuwsmuseum')

import re

YEAR_LIMIT = 2024


from bda.plone.shop.at import field_value


def increase_timeslot_availability(obj, new_value):
    field = obj.getField('item_available')
    mutator = field.getMutator(obj)
    mutator(new_value)
    return obj

def update_timeslots_availability():
    import plone.api
    import transaction

    from bda.plone.shop.at import field_value

    increase = 2.0

    exceptions = ['2021-06-24', '2021-06-25']

    all_occs = plone.api.content.find(portal_type="Ticket Occurrence")

    for occ in all_occs:
        occ_id = occ.id
        if occ_id in exceptions:
            continue

        if '2020-' in occ_id or '2019-' in occ_id:
            continue

        occ_obj = occ.getObject()
        occ_available = field_value(occ_obj, 'item_available')
        
        if occ_available == 8.0:
            continue
        
        new_available = occ_available + increase

        obj = increase_timeslot_availability(occ_obj, new_available)
        obj.reindexObject()
        transaction.get().commit()

    return True


class VideoListingView(FolderView):
    def getPlayerCode(self, item):
        """ Fetch the correct adapter for the Video.
        The video can be internal (inside the Plone site) or from an
        external service."""

        # Retrieve 'wcmedia-utils' view for the context then we check if
        # the video is internal
        util=getMultiAdapter((item, self.request), name = "wcmedia-utils")
        if util.mp4_url():
            name="internal"

        # Extract the domain from the URL of the video. We use it as the
        # name for the different adapters that handle different external services.
        else:
            name = urlparse(item.video_url)[1].replace('www.','')
        try:
            adapter = getMultiAdapter((item, self.request), IVideoEmbedCode, name = name)
        except ComponentLookupError:
            adapter = getMultiAdapter((item, self.request), IVideoEmbedCode)

        return adapter()



class ContextToolsView(BrowserView):

    def getVimeoID(self, video_url):
        if video_url:
            try:
                video_id = urlparse(video_url).path.lstrip("/")
                return video_id
            except:
                return None
        else:
            return None


    def formatted_date(self, obj):
        try:
            item = obj.getObject()
        except:
            item = obj
            pass

        provider = getMultiAdapter(
            (self.context, self.request, self),
            IContentProvider, name='formatted_date'
        )


        location = getattr(item, 'location', None)
        if location:
            return location

        rec = getattr(item, 'recurrence', None)
        if rec and getattr(self.context, 'portal_type', None) != 'Event':
            if "FREQ=DAILY" in rec:
                return self.context.translate(_("DAILY"))
            elif "FREQ=MONDAYFRIDAY" in rec:
                return self.context.translate(_("MONDAYFRIDAY"))
            elif "FREQ=WEEKDAYS" in rec:
                return self.context.translate(_("WEEKDAYS"))
            elif "FREQ=WEEKLY" in rec:
                return self.context.translate(_("WEEKLY"))
            elif "FREQ=MONTHLY" in rec:
                return self.context.translate(_("MONTHLY"))
            elif "FREQ=YEARLY" in rec:
                return self.context.translate(_("YEARLY"))
            else:
                return provider(item)
        else:
            end_date = getattr(item, 'end', None)
            if end_date:
                end = DateTime(end_date)
                if end.year() >= YEAR_LIMIT:
                    return ""
                else:
                    return provider(item)
            else:
                return provider(item)

    def getImageObject(self, item, scale="mini", with_description=False):
        if item.portal_type == "Image":
            return item.getURL()+"/@@images/image/%s" %(scale)
        if item.leadMedia != None:
            uuid = item.leadMedia
            media_object = uuidToCatalogBrain(uuid)
            if media_object:
                if with_description:
                    img_data = {
                        "url": media_object.getURL()+"/@@images/image/%s" %(scale),
                        "description": media_object.Description
                    }
                    return img_data
                else:
                    return media_object.getURL()+"/@@images/image/%s" %(scale)
            else:
                return None
        else:
            return None

    def trimText(self, text, limit):
        try:
            if text != None:
                if len(text) > limit:
                    res = text[0:limit]
                    lastspace = res.rfind(" ")
                    res = res[0:lastspace] + " ..."
                    return res
                else:
                    return text
            else:
                return ""
        except:
            return text


    def isAnonymous(self):
        annon = True
        if not plone.api.user.is_anonymous():
            return False

        return annon

    def isSlideshowPublished(self, item):
        obj = item.getObject()
        slideshow = obj.get('slideshow', None)

        if slideshow:
            slideshow_brain = uuidToCatalogBrain(slideshow.UID())
            if slideshow_brain:
                if slideshow_brain.review_state != 'published':
                    return False
                else:
                    return True
            else:
                return True
        else:
            return True

    def isEventPast(self, event):
        """ Checks if the event is already past """

        rec = getattr(event, 'recurrence', None)
        if rec:
            return False

        if event.portal_type != 'Event':
            return False
        else:
            try:
                t = DateTime(time.time())
                if event.end is not None:
                    end = DateTime(event.end)
                    return end.year() < t.year() or (end.year() == t.year() and end.month() < t.month()) or(end.year() == t.year() and end.month() == t.month() and end.day() < t.day())
                else:
                    start = DateTime(event.start)
                    return start.year() < t.year() or (start.year() == t.year() and start.month() < t.month()) or(start.year() == t.year() and start.month() == t.month() and start.day() < t.day())
            except:
                return False
        return True

class OnlineExperienceView(CollectionView):

    def find_orientation(self, item):
        if type(item) == str:
            if item == "L":
                return "landscape"
            else:
                return "portrait"

        item_class = ""
        if item.portal_type == "Image":
            image_obj = item.getObject()
            if getattr(image_obj, 'image', None):
                try:
                    w, h = image_obj.image.getImageSize()
                    if w > h:
                        item_class = "%s" %('landscape')
                    else:
                        item_class = "%s" %('portrait')
                except:
                    return item_class
        elif item.hasMedia:
            image = uuidToCatalogBrain(item.leadMedia)
            if image:
                image_obj = image.getObject()
                if getattr(image_obj, 'image', None):
                    try:
                        w, h = image_obj.image.getImageSize()
                        if w > h:
                            item_class = "%s" %('landscape')
                        else:
                            item_class = "%s" %('portrait')
                    except:
                        return item_class

        return item_class

    def getImageProperties(self, item):
        link = item.getURL()+"/view"
        title = item.Title
        description = item.Description

        try:
            if item.portal_type == "Image":
                image = item.getObject()
                parent = image.aq_parent
                if parent.portal_type == "Folder":
                    if parent.id == "slideshow":
                        obj = parent.aq_parent
                        if obj.portal_type == "Object":
                            title = obj.title
                            description = obj.description
                            link = obj.absolute_url()

        except:
            raise

        return {"link": link, "title": title, "description": description}

    def pairItems(self, results):
        # L P L L L P P P
        TEST_INPUT = ["L", "P", "L", "L", "L", "P", "P", "P"]
        FIRST_ITEM = 0

        items = results
        sequence_items = items._sequence
        total_items = len(sequence_items)
        items_checked = []
        final_patterns = []

        right = True
        previous_pair = ""

        for i in range(total_items):

            if i not in items_checked:

                right_pattern = "right" if right else "left"
                pattern = {
                    "size": "small",
                    "orientation": self.find_orientation(sequence_items[i]),
                    "position": "pair",
                    "clearfix": False,
                    "item": sequence_items[i],
                    "right": right_pattern,
                    "bottom": ""
                }

                if i == FIRST_ITEM:
                    pattern['position'] = "single"
                    pattern['size'] = "big"
                    final_patterns.append(pattern)
                    items_checked.append(i)
                    if right:
                        right = False
                    else:
                        right = True
                else:
                    if i+1 < total_items:
                        next_orientation = self.find_orientation(sequence_items[i+1])

                        if next_orientation == pattern["orientation"] == "landscape":
                            pattern["position"] = "single"
                            pattern["size"] = "big"
                            final_patterns.append(pattern)
                            if right:
                                right = False
                            else:
                                right = True

                            previous_pair = ""
                        else:
                            new_pattern = {
                                "size": pattern['size'],
                                "orientation": pattern['orientation'],
                                "position": "pair",
                                "clearfix": True,
                                "item": sequence_items[i+1],
                                "right": pattern['right'],
                                "bottom": pattern['bottom']
                            }
                            new_pattern["orientation"] = next_orientation

                            if next_orientation == pattern['orientation'] == "portrait":
                                pattern['size'] = "big"
                                new_pattern['size'] = "big"

                            if not previous_pair:
                                if right:
                                    pattern['bottom'] = "bottom"
                                    new_pattern['bottom'] = "up"
                                else:
                                    new_pattern['bottom'] = "bottom"
                                    pattern['bottom'] = "up"
                            else:
                                if previous_pair == "bottom":
                                    pattern['bottom'] = "up"
                                    new_pattern['bottom'] = "bottom"
                                    previous_pair = "bottom"
                                else:
                                    pattern['bottom'] = "bottom"
                                    new_pattern['bottom'] = "up"
                                    previous_pair = "up"

                            final_patterns.append(pattern)
                            final_patterns.append(new_pattern)
                            items_checked.append(i)
                            items_checked.append(i+1)
                    else:
                        pattern['position'] = "single"
                        pattern['size'] = "big"
                        final_patterns.append(pattern)
            else:
                pass

        return final_patterns


    def getImageObject(self, item):
        if item.portal_type == "Image":
            return item.getURL()+"/@@images/image/large"
        if item.leadMedia != None:
            uuid = item.leadMedia
            media_object = uuidToCatalogBrain(uuid)
            if media_object:
                return media_object.getURL()+"/@@images/image/large"
            else:
                return None
        else:
            return None

    def getImageClass(self, item, has_media=False):

        item_class = "entry"

        if item.portal_type == "Image":
            image_obj = item.getObject()
            if getattr(image_obj, 'image', None):
                try:
                    w, h = image_obj.image.getImageSize()
                    if w > h:
                        item_class = "%s %s" %(item_class, 'landscape')
                    else:
                        item_class = "%s %s" %(item_class, 'portrait')
                except:
                    return item_class
        elif has_media:
            image = uuidToCatalogBrain(item.leadMedia)
            image_obj = image.getObject()
            if getattr(image_obj, 'image', None):
                try:
                    w, h = image_obj.image.getImageSize()
                    if w > h:
                        item_class = "%s %s" %(item_class, 'landscape')
                    else:
                        item_class = "%s %s" %(item_class, 'portrait')
                except:
                    return item_class

        return item_class


class FullScreenCollectionView(CollectionView):

    def getLeadMediaURL(self, item, scale="large"):
        if item.portal_type == "Image":
            url = item.getURL()
            if url:
                return "%s/@@images/image/%s" %(item.getURL(), scale)
            else:
                return None
        if item.leadMedia != None:
            media_object = uuidToCatalogBrain(item.leadMedia)
            if media_object:
                return "%s/@@images/image/%s" %(media_object.getURL(), scale)
            else:
                return None
        return None



class CustomEventEventListing(EventEventListing):
    def getLeadMedia(self, brain):

        acc_context = brain.context
        lead_obj = acc_context
        if getattr(acc_context, 'portal_type', None) == "Occurrence":
            lead_obj = aq_parent(aq_inner(acc_context))

        item = uuidToCatalogBrain(lead_obj.UID())

        if item.portal_type == "Image":
            return item.getURL()+"/@@images/image/mini"

        if item.leadMedia != None:
            uuid = item.leadMedia
            media_object = uuidToCatalogBrain(uuid)
            if media_object:
                return media_object.getURL()+"/@@images/image/mini"
            else:
                return None
        else:
            return None

        return ""

class CustomEventListing(EventListing):
    def getLeadMedia(self, brain):

        acc_context = brain.context
        lead_obj = acc_context
        if getattr(acc_context, 'portal_type', None) == "Occurrence":
            lead_obj = aq_parent(aq_inner(acc_context))

        item = uuidToCatalogBrain(lead_obj.UID())

        if item.portal_type == "Image":
            return item.getURL()+"/@@images/image/mini"

        if item.leadMedia != None:
            uuid = item.leadMedia
            media_object = uuidToCatalogBrain(uuid)
            if media_object:
                return media_object.getURL()+"/@@images/image/mini"
            else:
                return None
        else:
            return None

        return ""


class CustomEventListingIcal(EventListingIcal):
    pass


def objectTranslated(ob, event):
    if ob:
        if ITranslatable.providedBy(ob):
            if getattr(ob, 'language', None) == "en" and getattr(ob, 'portal_type', None) in ["Document", "Event"]:
                createdEvent(ob, event)
                if not hasattr(ob, 'slideshow'):
                    if ITranslationManager(ob).has_translation('nl'):
                        original_ob = ITranslationManager(ob).get_translation('nl')

                        if hasattr(original_ob, 'slideshow'):
                            slideshow = original_ob['slideshow']
                            ITranslationManager(slideshow).add_translation('en')
                            slideshow_trans = ITranslationManager(slideshow).get_translation('en')
                            slideshow_trans.title = slideshow.title
                            slideshow_trans.portal_workflow.doActionFor(slideshow_trans, "publish", comment="Slideshow published")

                            for sitem in slideshow:
                                if slideshow[sitem].portal_type == "Image":
                                    ITranslationManager(slideshow[sitem]).add_translation('en')
                                    trans = ITranslationManager(slideshow[sitem]).get_translation('en')
                                    trans.image = slideshow[sitem].image
                                    addCropToTranslation(slideshow[sitem], trans)

                            ob.reindexObject()
                            ob.reindexObject(idxs=["hasMedia"])
                            ob.reindexObject(idxs=["leadMedia"])
                        else:
                            # no slideshow folder
                            pass
                    else:
                        # no translation
                        pass
                else:
                    # has slideshow
                    pass
            else:
                # wrong language
                pass
    else:
        # invalid object
        pass

    return


