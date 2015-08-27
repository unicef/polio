import _ from 'lodash'
import { createStore } from 'reflux'

import UserActions from '../actions/UserActions'

export default createStore({

  init() {
    this.user = {}
    this.listenTo(UserActions.getUserPermissions.completed, '_onGetUserPermissionsCompleted')
  },

  _onGetUserPermissionsCompleted(result) {
    if (!_.isEmpty(result.objects)) {
      this.user = _.find(result.objects)
      this.trigger()
    }
  },

  setPermissions(){
    this.permissions = [];
  },

  hasPermission(permissionKey) {
    return _.indexOf(this.permissions || [], permissionKey) > -1
  }

})