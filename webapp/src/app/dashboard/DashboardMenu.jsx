import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'

import { Link } from 'react-router'
import FaIcon from '../components/FaIcon'
import DropdownMenu from '../components/DropdownMenu'

import DashboardActions from './actions/DashboardActions'
import DashboardStore from './stores/DashboardStore'

const DashboardMenu = React.createClass({

  mixins: [
    Reflux.listenTo(DashboardStore, '_onDashboardStoreUpdate')
  ],

  getInitialState(){
    return {
      dashboardList: DashboardStore.getDashboardList()
    }
  },

  componentWillMount(){
    DashboardActions.fetchDashboardList()
  },

  _onDashboardStoreUpdate(){
    this.setState({
      dashboardList: DashboardStore.getDashboardList()
    })
  },

  menuItemRenderer(menuItem) {
    if (menuItem.to) {
      return <Link to={menuItem.to} params={menuItem.params}> { menuItem.label } </Link>
    }
    return (
      <a href={menuItem.href}> { menuItem.label } </a>
    )
  },

  renderExploreDataMenu(){

    const state = this.state

    let menuList = _(state.dashboardList)
      .map((dashboardItem)=> {
        return {
          label: dashboardItem.title,
          to: 'dashboard-detail-latest',
          params: {
            dashboardType: _.kebabCase(dashboardItem.title)
          }
        }
      })
      .value()

    menuList = menuList.concat([
      null,
      {
        label: 'Data Browser',
        to: 'data-view'
      },
      null,
      {
        label: 'See all custom dashboards',
        to: 'dashboard-custom'
      },
      {
        label: 'Create New dashboard',
        to: 'dashboard-custom-create'
      }
    ])

    return (
      <DropdownMenu
        label={
          <span>
            <FaIcon type='bar-chart' size='lg'/> Explore Data
          </span>
          }
        menuList={menuList}
        menuItemRenderer={this.menuItemRenderer}
        />
    )
  },

  renderEnterDataMenu(){

    let menuList = [
      {
        label: 'Enter Data via Form',
        href: '/datapoints/entry'
      },
      {
        label: 'Upload Data via CSV File',
        href: '/source_data/file_upload'
      }
    ]

    return (
      <DropdownMenu
        label={
          <span>
            <FaIcon type='table' size='lg'/> Enter Data
          </span>
          }
        menuList={menuList}
        />
    )
  },

  renderManageSystemMenu(){
    return (
      <li>
        <a href='/ufadmin/regions'>
          <FaIcon type='cogs' size='lg'/> Manage System
        </a>
      </li>
    )
  },

  render(){
    return (
      <ul>
        { this.renderExploreDataMenu() }
        { this.renderEnterDataMenu() }
        { this.renderManageSystemMenu() }
      </ul>
    )
  }
});

export default DashboardMenu