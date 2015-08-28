import { createAction } from 'reflux'

import api from 'data/api'

const asyncCfg = {
  asyncResult: true
}

const actions = {
  getOfficeList: createAction(asyncCfg)
}

actions.getOfficeList.listen(function () {
  api.office()
    .then(this.completed)
    .catch(this.failed)
})

export default actions