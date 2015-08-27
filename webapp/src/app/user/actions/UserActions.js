import { createAction } from 'reflux'

import api from 'data/api'

const asyncCfg = {
  asyncResult: true
}

const actions = {
  getUserPermissions: createAction(asyncCfg)
}

actions.getUserPermissions.listen(function () {
  api.user_permissions()
    .then(this.completed)
    .catch(this.failed)
})

export default actions