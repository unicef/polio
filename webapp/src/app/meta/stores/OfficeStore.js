import _ from 'lodash'
import moment from 'moment'
import { createStore } from 'reflux'

import MetaActions from '../actions/MetaActions'

export default createStore({

  init(){
    this.updateOfficeMap([])
    this.listenTo(MetaActions.getOfficeList.completed, this._onGetOfficeListCompleted)
  },

  getInitialState(){
    if (_.isEmpty(this.officeMap)) {
      MetaActions.getOfficeList()
    }
  },

  _onGetOfficeListCompleted(result = {}){
    if (!_.isEmpty(result.objects)) {
      this.updateOfficeMap(result.objects)
      this.trigger()
    }
  },

  updateOfficeMap(officeList){
    this.officeMap = _.reduce(officeList, (officeMap, officeItem)=> {
      if (officeItem.id) {
        officeMap[officeItem.id] = officeItem
      }
      return officeMap
    }, this.officeMap || {})
  },

  getOfficeById(officeId){
    return this.officeMap[officeId] || {}
  }

})