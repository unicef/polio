import _ from 'lodash'
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
      .sortBy('end_date')
      .value()
  },

  updateCampaignMap(dashBoardList){
    this.campaignMap = _.reduce(dashBoardList, (campaignMap, campaignItem)=> {
      if (campaignItem.id) {
        campaignMap[ID_PREFIX + campaignItem.id] = campaignItem
      }
      return campaignMap
    }, this.campaignMap || {})
  },

  getCampaignById(campaignId){
    return this.campaignMap[ID_PREFIX + campaignId]
  }

})