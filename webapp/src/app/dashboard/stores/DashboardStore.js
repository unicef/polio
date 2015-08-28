import _ from 'lodash'
import { createStore } from 'reflux'

import DashboardActions from '../actions/DashboardActions'

import builtinDashboardList from '../constants/builtinDashboardList'

const ID_PREFIX = 'dashboard_'

export default createStore({

  init(){
    this.updateDashboardMap(builtinDashboardList)
    this.listenTo(DashboardActions.fetchDashboardList.completed, this._onFetchDashboardListCompleted)
  },

  _onFetchDashboardListCompleted(result){
    if (!_.isEmpty(result.objects)) {
      this.updateDashboardMap(result.objects)
      this.trigger()
    }
  },

  getDashboardList(){
    return _(this.dashboardMap)
      .values()
      .sortBy('id')
      .value()
  },

  updateDashboardMap(dashBoardList){
    this.dashboardMap = _.reduce(dashBoardList, (dashboardMap, dashboardItem)=> {
      if (dashboardItem.id) {
        dashboardMap[ID_PREFIX + dashboardItem.id] = dashboardItem
      }
      return dashboardMap
    }, this.dashboardMap || {})
  },

  getDashboardById(dashboardId){
    return this.dashboardMap[ID_PREFIX + dashboardId]
  }

})