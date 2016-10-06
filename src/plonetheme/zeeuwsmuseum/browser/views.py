from Acquisition import aq_inner
from Products.Five import BrowserView
from plone.app.multilingual.subscriber import createdEvent

from collective.leadmedia.utils import addCropToTranslation
from plone.app.multilingual.interfaces import ITranslatable
from plone.app.multilingual.interfaces import ITranslationManager

class OnlineExperienceView(BrowserView):

    def getSlideshowItems(self):
        context = self.context
        inc = 2
        nthchild = 1

        inline_css = ""
        template = ".cd-fixed-bg:nth-child(%s) { background-image: url('%s');}"

        if 'slideshow' in context:
            slideshow = context['slideshow']
            for _id in slideshow:
                obj = slideshow[_id]
                if obj:
                    portal_type = getattr(obj, 'portal_type', None)
                    if portal_type == "Image":
                            url = obj.absolute_url()+"/@@images/image/large"
                            new_image = template % (nthchild, url)
                            inline_css += new_image
                            nthchild += inc

        final_inline_css = "<style>" + inline_css + "</style>"
        return final_inline_css


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


