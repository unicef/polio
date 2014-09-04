from tastypie.resources import ModelResource, ALL
from datapoints.models import *
from tastypie.authorization import Authorization
from tastypie.authentication import ApiKeyAuthentication
from tastypie import fields
from django.utils.decorators import method_decorator
from stronghold.decorators import public
from django.contrib.auth.models import User
# from datapoints.api.aggregate import FnLookUp, ResultObject
import pprint as pp
from tastypie.bundle import Bundle
from datapoints.api.base import parse_slugs_from_url,get_id_from_slug_param

class SimpleApiResource(ModelResource):
    '''
    This is the top level class all other Resource Classes inherit from this.
    The API Key authentication is defined here and thus is required by all
    other resources.  This class enherits fro the Tastyppie "ModelResource"

    See Here: http://django-tastypie.readthedocs.org/en/latest/resources.html?highlight=modelresource
    '''

    class Meta():
        authentication = ApiKeyAuthentication()
        authorization = Authorization()
        always_return_data = True


class RegionResource(SimpleApiResource):
    '''Region Resource'''

    class Meta(SimpleApiResource.Meta):
        queryset = Region.objects.all()
        resource_name = 'region'

class IndicatorResource(SimpleApiResource):
    '''Indicator Resource'''

    class Meta(SimpleApiResource.Meta):
        queryset = Indicator.objects.all()
        resource_name = 'indicator'
        filtering = {
            "slug": ('exact'),
            "id":('exact','gt','lt','range'),
        }

class CampaignResource(SimpleApiResource):
    '''Campaign Resource'''


    class Meta(SimpleApiResource.Meta):
        queryset = Campaign.objects.all()
        resource_name = 'campaign'

class UserResource(SimpleApiResource):
    '''User Resource'''

    class Meta(SimpleApiResource.Meta):
        queryset = User.objects.all()
        resource_name = 'user'
        excludes = ['password', 'username']
        allowed_methods = ['get']

class OfficeResource(SimpleApiResource):
    '''Office Resource'''

    class Meta(SimpleApiResource.Meta):
        queryset = Office.objects.all()
        resource_name = 'office'

    #############################################
    #############################################
    #############################################

class DataPointResource(SimpleApiResource):
    '''Datapoint Resource'''

    region = fields.ToOneField(RegionResource, 'region')
    indicator = fields.ToOneField(IndicatorResource, 'indicator')
    campaign = fields.ToOneField(CampaignResource, 'campaign')
    changed_by_id = fields.ToOneField(UserResource, 'changed_by')


    class Meta(SimpleApiResource.Meta):
        queryset = DataPoint.objects.all()
        resource_name = 'datapoint'
        excludes = ['note']
        filtering = {
            "value": ('exact','lt','gt','lte','gte','range'),
            "created_at":('exact','lt','gt','lte','gte','range'),
            "indicator":('exact'),
            "region":('exact'),
            "campaign":('exact'),
        }

    def hydrate(self, bundle):
        '''determine changed_by_id from the username param'''
        username = bundle.request.GET['username']
        user_id = User.objects.get(username=username).id
        user_resource_uri = "/api/v1/user/" + str(user_id) + "/"
        bundle.data['changed_by_id'] = user_resource_uri

        return bundle

    def convert_slug_to_resource(self,slug,resource_string,model,id_only=False):
        '''this is a generic method that converts the slug in the request
           string into a resource URI that can be saved to the DB'''

        object_id = model.objects.get(slug=slug).id

        if id_only:
            object_resource_uri = object_id

        else:
            object_resource_uri = "/api/v1/%s/%s/" % (resource_string , object_id)

        return object_resource_uri

    def hydrate_region(self, bundle):
        '''convert region slug into resource uri'''
        slug = bundle.data['region']
        region_uri = self.convert_slug_to_resource(slug,'region',Region)
        bundle.data['region'] = region_uri

        return bundle

    def hydrate_indicator(self, bundle):
        '''convert indicator slug into resource uri'''
        slug = bundle.data['indicator']
        indicator_uri = self.convert_slug_to_resource(slug,'indicator'
            ,Indicator)
        bundle.data['indicator'] = indicator_uri

        return bundle

    def hydrate_campaign(self, bundle):
        '''convert campaign slug into resource uri'''
        slug = bundle.data['campaign']
        campaign_uri = self.convert_slug_to_resource(slug,'campaign',Campaign)
        bundle.data['campaign'] = campaign_uri

        return bundle

    def get_object_list(self, request):
        '''this method overides the get_object_list of the model resource
        class taken from tastypie.  The idea here is that for GET Requests
        we parse out the additional params that wer not passed as resources
        for when the end point is hit with a SLUG as opposed to RESOURCE'''

        object_list = super(DataPointResource, self).get_object_list(request)
        query_dict = request.GET

        indicator_id, region_id, campaign_id,indicator_part_id \
            ,indicator_whole_id = parse_slugs_from_url( query_dict)

        # ## CLEAN THIS UP ##
        if indicator_id > 0:
            object_list = object_list.filter(indicator=indicator_id)

        if region_id > 0:
            object_list = object_list.filter(region=region_id)

        if campaign_id > 0:
            object_list = object_list.filter(campaign=campaign_id)

        return object_list


#### INTERACTING W THE API FROM POSTMAN ####

  # save RAW data as:
    # {"indicator": "/api/v1/indicator/47/"
    # ,"region": "/api/v1/region/9/"
    # ,"campaign": "/api/v1/campaign/1/"
    # ,"value": "1.00"
    # ,"changed_by_id": "/api/v1/user/1/"}

  # header: application/json
  # URL : http://127.0.0.1:8000/api/v1/datapoint/?username=john&
    # api_key=3018e5d944e1a37d2e2af952198bef4ab0d9f9fc


## CREATING AN API KEY ##
# from tastypie.models import ApiKey
# from django.contrib.auth.models import User
# john = User.objects.get(username='john')
# api_key = ApiKey.objects.create(user=john)

# http://127.0.0.1:8000/api/v1/datapoint/?username=john&api_key=3018e5d944e1a37d2e2af952198bef4ab0d9f9fc&format=json

# http://polio.seedscientific.com/api/v1/datapoint/?username=john&api_key=b8f139e164a2a1811da57b4eaeddd554b7683ea8&format=json