from Acquisition import aq_inner
from Products.Five import BrowserView
from plone.app.multilingual.subscriber import createdEvent

from collective.leadmedia.utils import addCropToTranslation
from plone.app.multilingual.interfaces import ITranslatable
from plone.app.multilingual.interfaces import ITranslationManager

from plone.app.contenttypes.browser.collection import CollectionView
from plone.app.uuid.utils import uuidToCatalogBrain


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

    def getPatterns(self, results):
        # L P L L L P P P
        TEST_INPUT = ["L", "P", "L", "L", "L", "P", "P", "P"]
        FIRST_ITEM = 0
        
        items = results
        total_items = len(items)
        items_checked = []
        final_patterns = []

        for i in range(total_items):
            if i not in items_checked:

                pattern = {
                    "size": "small",
                    "orientation": self.find_orientation(items[i]),
                    "position": "pair",
                    "clearfix": False
                }
               
                if i == FIRST_ITEM:
                    pattern['position'] = "single"
                    pattern['size'] = "big"
                    final_patterns.append(pattern)
                    items_checked.append(i)
                else:
                    if i+1 < total_items:
                        next_orientation = self.find_orientation(items[i+1])

                        if next_orientation == pattern["orientation"] == "landscape":
                            pattern["position"] = "single"
                            pattern["size"] = "big"
                            final_patterns.append(pattern)

                        else:
                            new_pattern = {
                                "size": pattern['size'],
                                "orientation": pattern['orientation'],
                                "position": "pair",
                                "clearfix": True
                            }
                            new_pattern["orientation"] = next_orientation

                            if next_orientation == pattern['orientation'] == "portrait":
                                pattern['size'] = "big"
                                new_pattern['size'] = "big"
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


