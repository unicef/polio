import { createAction } from 'reflux'

import api from 'data/api'

const asyncCfg = {
  asyncResult: true
}

const actions = {
  fetchDashboardList: createAction(asyncCfg)
}

actions.fetchDashboardList.listen(function () {
  api.get_dashboard()
    .then(this.completed)
    .catch(this.failed)
})

export default actions