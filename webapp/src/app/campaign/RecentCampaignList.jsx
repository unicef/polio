import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'
import moment from 'moment'

import CampaignActions from './actions/CampaignActions'
import CampaignStore from './stores/CampaignStore'

const RecentCampaignList = React.createClass({

  propTypes: {
    limited: React.PropTypes.number
  },

  mixins: [
    Reflux.listenTo(CampaignStore, '_onCampaignStoreUpdate')
  ],

  getDefaultProps(){
    return {
      limited: 6
    }
  },

  getInitialState(){
    return {
      campaignList: CampaignStore.getCampaignList(),
      limited: this.props.limited
    }
  },

  componentWillMount(){
    CampaignActions.getCampaignList()
  },

  _onCampaignStoreUpdate(){
    this.setState({
      campaignList: CampaignStore.getCampaignList()
    })
  },

  isEven(n) {
    return n % 2 !== 0;
  },

  renderTableRow(){
    const state = this.state
    return _(state.campaignList)
      .take(!!state.limited ? state.limited : state.campaignList.length)
      .map((campaignItem, idx)=> {
        return (
          <tr key={idx} className={this.isEven(idx)? 'even' : 'odd'}>
            <td>
              { campaignItem.slug }
            </td>
            <td>
              { campaignItem.pct_complete }% complete
            </td>
          </tr>
        )
      })
      .value()
  },

  toggleLimited(evt){
    evt.preventDefault()
    this.setState({
      limited: !!this.state.limited ? null : this.props.limited
    })
  },

  render(){
    return (
      <div>
        <h2>
          Recent Campaigns
        </h2>
        <a href="#" onClick={this.toggleLimited}>
          { !!this.state.limited ? 'See all campaigns' : 'Fold campaigns'}
        </a>
        <table>
          <tbody>
          { this.renderTableRow() }
          </tbody>
        </table>
      </div>

    )
  }

})

export default RecentCampaignList