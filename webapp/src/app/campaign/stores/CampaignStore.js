import _ from 'lodash'
import moment from 'moment'
import { createStore } from 'reflux'

import CampaignActions from '../actions/CampaignActions'

const ID_PREFIX = 'campaign_'

export default createStore({

  init(){
    this.updateCampaignMap([])
    this.listenTo(CampaignActions.getCampaignList.completed, this._onFetchCampaignListCompleted)
  },

  _onFetchCampaignListCompleted(result){
    if (!_.isEmpty(result.objects)) {
      this.updateCampaignMap(result.objects)
      this.trigger()
    }
  },

  getCampaignList(){
    return _(this.campaignMap)
      .values()
      .sortBy('start_date')
      .reverse()
      .value()
  },

  updateCampaignMap(campaignList){
    this.campaignMap = _.reduce(campaignList, (campaignMap, campaignItem)=> {
      if (campaignItem.id) {
        campaignMap[ID_PREFIX + campaignItem.id] = this._campaignItemFix(campaignItem)
      }
      return campaignMap
    }, this.campaignMap || {})
  },

  getCampaignById(campaignId){
    return this.campaignMap[ID_PREFIX + campaignId]
  },

  _campaignItemFix(campaignItem){

    campaignItem.start_date = moment(campaignItem.start_date, 'YYYY-MM-DD')

    return campaignItem;
  }

})