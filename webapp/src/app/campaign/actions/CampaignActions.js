import { createAction } from 'reflux'

import api from 'data/api'

const asyncCfg = {
  asyncResult: true
}

const actions = {
  getCampaignList: createAction(asyncCfg)
}

actions.getCampaignList.listen(function () {
  api.campaign()
    .then(this.completed)
    .catch(this.failed)
})

export default actions