from django.conf.urls import patterns, include, url
from django.contrib.auth.views import login, logout
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required
from django.views.generic.base import RedirectView
from django.views.generic import TemplateView
from decorator_include import decorator_include

from datapoints.api.meta_data import *
from datapoints.api.datapoint import DataPointResource, DataPointEntryResource
from datapoints.views import debug
from datapoints import views

from source_data.api import EtlResource
from tastypie.api import Api

admin.autodiscover()

## tastypie endpoints - ##
v1_api = Api(api_name='v1')
v1_api.register(DataPointResource())
v1_api.register(DataPointEntryResource())
v1_api.register(EtlResource())
v1_api.register(RegionPolygonResource())
v1_api.register(CampaignResource())
v1_api.register(RegionResource())
v1_api.register(IndicatorResource())
v1_api.register(OfficeResource())
v1_api.register(CampaignTypeResource())
v1_api.register(RegionTypeResource())
v1_api.register(IndicatorTagResource())
v1_api.register(IndicatorToTagResource())
v1_api.register(DashboardResource())
v1_api.register(DocumentResource())
v1_api.register(GroupResource())
v1_api.register(UserGroupResource())
v1_api.register(RegionPermissionResource())
v1_api.register(GroupPermissionResource())
v1_api.register(DocumentReviewResource())
v1_api.register(SourceObjectMapResource())
v1_api.register(UserResource())
v1_api.register(SourceSubmissionResource())
v1_api.register(DocumentDetailResource())
v1_api.register(DocDataPointResource())
v1_api.register(ComputedDataPointResource())
v1_api.register(RefreshMasterResource())


urlpatterns = patterns('',

    ## TASTYPIE API ##
    (r'^api/', include(v1_api.urls)),

    ## HOME PAGE
    url(r'^polio/', login_required(TemplateView.as_view(template_name="polio.html")), name='app'),
    url(r'^$', login_required(TemplateView.as_view(template_name="index.html")), name='index'),

    ## BASE DATPOINT FUNCTINOALITY ( see datapoints/urls )
    url(r'^datapoints/', decorator_include(login_required,'datapoints.urls', namespace="datapoints")),

    ## DASHBOARD WITH URL PARAMS ##
    url(r'^datapoints/[-a-zA-Z]+/$', decorator_include(login_required,'datapoints.urls', namespace="datapoints")),
    url(r'^datapoints/[-a-zA-Z]+/[^/]+/[0-9]{4}/[0-9]{2}/$', decorator_include(login_required,'datapoints.urls', namespace="datapoints")),
    url(r'^datapoints/source-data/[-a-zA-Z]+/[0-9]{4}/[0-9]{2}/[-a-zA-Z]+/[0-9]+/', decorator_include(login_required,'datapoints.urls', namespace="datapoints")),


    ## CORE SOURCE DATA FUNCTINOALITY
    url(r'^source_data/', decorator_include(login_required,'source_data.urls', namespace="source_data")),

    ## ADMIN, LOG IN AND LOGOUT
    url(r'^admin/', decorator_include(login_required,admin.site.urls)),
    url(r'^accounts/login/$', login, name='login'),
    url(r'^accounts/logout/$', logout, name='logout'),

    ## UFADMIN ##
    url(r'^ufadmin/', login_required(TemplateView.as_view(template_name='ufadmin.html')), name='ufadmin'),

    ## DOCUMENT_REVIEW ##
    url(r'^doc_review/', TemplateView.as_view(template_name="doc_review.html"), name='doc_review'),

    ) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += patterns('',
        url(r'^debug/', debug),
    )
