#!/usr/bin/python
# -*- coding: utf-8 -*-

from Products.Five import BrowserView
from Products.CMFPlone.browser.search import Search
from AccessControl import getSecurityManager
from zope.component import getUtility
from plone.registry.interfaces import IRegistry
from plone.app.uuid.utils import uuidToCatalogBrain

class AdvancedSearchView(BrowserView, Search):
    """
    Adding to Search view
    """

    def checkUserPermission(self):
        sm = getSecurityManager()
        if sm.checkPermission(ModifyPortalContent, self.context):
            return True
        return False

    def getAdvancedButtonQuery(self):
        params = self.request.form.items()

        registry = getUtility(IRegistry)
        searchFiltersRecord = registry.get('advancedsearch.fields', None)
        q = ""

        if searchFiltersRecord:
            advancedfields = list(searchFiltersRecord)
            advancedfields.append("SearchableText")
            q = "&".join(["%s=%s" %(param,value) for param,value in params if param in advancedfields and value])

        return q

    def getSearchFilters(self):
        searchFilters = []
        registry = getUtility(IRegistry)
        try:
            searchFiltersRecord = registry['searchfilters.folders']
        except:
            searchFiltersRecord = ['7c00323d7114470ca50ff73f6586947f', '1aae4add8d094ed1b81459573cd2abb8', '1f57d68cb7f64917bb51e161c2910364',
                                    '1431a8b32fc94c7492cf296688be5233', 'af85e21e2e4f4c80a8123bcdd94dc5ed', '0a35ff0214bc47c5b719593aab4c0b0a']

        if searchFiltersRecord:
            filters = list(searchFiltersRecord)

            if filters:
                for uid in filters:
                    item = uuidToCatalogBrain(uid)
                    if item:
                        searchFilters.append({"name": item.Title, "path": item.getPath()})

        return searchFilters

    def getExtraFilters(self):
        params = self.request.form.items()
        extra_filters = []

        # Needs fix
        widget_fields = ['identification_identification_collection', 'physicalCharacteristics_materials',
                         'physicalCharacteristics_techniques', 'identification_objectName_objectname_type']


        new_params = []
        for k, v in params:
            if k != "path":
                new_params.append((k,v))
            else:
                if type(v) is list:
                    for p in v:
                        new_params.append(('path:list', p))
                else:
                    new_params.append((k,v))

        params = new_params

        registry = getUtility(IRegistry)
        searchFiltersRecord = registry.get('advancedsearch.fields', None)

        if searchFiltersRecord:
            advancedfields = list(searchFiltersRecord)
            advancedfields.append('path')

            for param, value in params:
                if param in advancedfields:
                    if value:
                        if type(value) == list:
                            continue
                        if param in widget_fields:
                            list_fields = value.split("_")
                            curr = 0
                            for field in list_fields:
                                curr += 1
                                q = "&".join(["%s=%s" %(p, v) for p, v in params if p != param and p not in ['created']])

                                new_list_field = [f for f in list_fields if f != field]
                                new_string = "_".join(new_list_field)
                                q += "&%s=%s" %(param, new_string)

                                search_filter = {}
                                if curr > 1:
                                    search_filter["param"] = ''
                                else:
                                    search_filter["param"] = param
                                search_filter["value"] = field
                                search_filter["link"] = self.context.absolute_url()+"/@@search?%s" %(q)
                                extra_filters.append(search_filter)
                        else:
                            q = "&".join(["%s=%s" %(p, v) for p, v in params if p != param and p not in ['created']])
                            search_filter = {}
                            search_filter["param"] = param
                            search_filter["value"] = value
                            search_filter["link"] = self.context.absolute_url()+"/@@search?%s" %(q)
                            extra_filters.append(search_filter)
                            
        return extra_filters

    def getAdvancedFields(self):

        context_url = self.context.absolute_url()

        advanced_widgets = {
            'identification_identification_collection': {
                'data': '{"orderable": true, "vocabularyUrl": "%s/@@getVocabulary?name=collective.object.collection&field=identification_identification_collections", "initialValues": {}, "separator": "_"}' % (context_url)
            },
            'physicalCharacteristics_materials': {
                'data': '{"orderable": true, "vocabularyUrl": "%s/@@getVocabulary?name=collective.object.materials&field=material", "initialValues": {}, "separator": "_"}' % (context_url)
            },
            'physicalCharacteristics_techniques': {
                'data': '{"orderable": true, "vocabularyUrl": "%s/@@getVocabulary?name=collective.object.techniques&field=technique", "initialValues": {}, "separator": "_"}' % (context_url)
            },
            'identification_objectName_objectname_type': {
                'data':'{"orderable": true, "vocabularyUrl": "%s/@@getVocabulary?name=collective.object.objectname_type&field=types", "initialValues": {}, "separator": "_"}' % (context_url)
            },
            'identification_objectName_objectname': {
                'data':'{"orderable": true, "vocabularyUrl": "%s/@@getVocabulary?name=collective.object.objectname&field=types", "initialValues": {}, "separator": "_"}' % (context_url)
            }
        }
        
        searchFilters = []
        registry = getUtility(IRegistry)
        searchFiltersRecord = registry.get('advancedsearch.fields', None)
        if searchFiltersRecord:
            filters = list(searchFiltersRecord)
            if filters:
                for advanced_filter in filters:
                    if advanced_filter != "":
                        is_widget = False
                        data_select = ""
                        if advanced_filter in advanced_widgets:
                            is_widget = True
                            data_select = advanced_widgets[advanced_filter]['data']

                        new_filter = {
                            "name": advanced_filter,
                            "is_widget": is_widget,
                            "select2_data": data_select
                        }

                        searchFilters.append(new_filter)
                    else:
                        continue
            else:
                return searchFilters

        return searchFilters

