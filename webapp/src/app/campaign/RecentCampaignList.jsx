import React from 'react'
import Reflux from 'reflux'
import { Link } from 'react-router'
import _ from 'lodash'
import moment from 'moment'

import CampaignActions from './actions/CampaignActions'
import CampaignStore from './stores/CampaignStore'

import OfficeStore from '../meta/stores/OfficeStore'

import BuiltinDashBoardTypes from '../dashboard/constants/BuiltinDashBoardTypes'

const RecentCampaignList = React.createClass({

  propTypes: {
    limited: React.PropTypes.number
  },

  mixins: [
    Reflux.connect(OfficeStore),
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

  buildDashboardDetailLink(dashboardType, label, campaignItem){
    return (
      <Link to='dashboard-detail'
            params={{
                dashboardType: dashboardType,
                region: campaignItem.office_id,
                year: campaignItem.start_date.format('YYYY'),
                month: campaignItem.start_date.format('MM')
              }}
        >
        {label}
      </Link>
    )
  },

  renderTableRow(){
    const state = this.state

    return _(state.campaignList)
      .take(!!state.limited ? state.limited : state.campaignList.length)
      .map((campaignItem, idx)=> {
        return (
          <tr key={idx} className={this.isEven(idx)? 'even' : 'odd'}>
            <td key='title'>
              { OfficeStore.getOfficeById(campaignItem.office_id).name }: {campaignItem.start_date.format('MMM YYYY')}
            </td>
            <td key='complete'>
              { campaignItem.pct_complete }% complete
            </td>
            {_.map(BuiltinDashBoardTypes, (value, key)=> {
              return (
                <td key={key}>
                  {this.buildDashboardDetailLink(key, value, campaignItem)}
                </td>
              )
            })}
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