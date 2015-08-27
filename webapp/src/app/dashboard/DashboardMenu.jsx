import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'

import { Link } from 'react-router'
import FaIcon from '../components/FaIcon'
import DropdownMenu from '../components/DropdownMenu'

import DashboardStore from './stores/DashboardStore'

const DashboardMenu = React.createClass({

  getInitialState(){
    return {
      dashboardList: DashboardStore.getBuiltinDashBoardList()
    }
  },

  renderExploreDataMenu(){

    const state = this.state

    let menuList = _(state.dashboardList)
      .map((dashboardItem)=> {
        return {
          label: dashboardItem.title,
          href: '#/' + _.kebabCase(dashboardItem.title)
        }
      })
      .value()

    menuList = menuList.concat([
      null,
      {
        label: 'Data Browser',
        href: '#/datapoints/table'
      },
      null,
      {
        label: 'See all custom dashboards',
        href: '#/datapoints/dashboards'
      },
      {
        label: 'Create New dashboard',
        href: '#/datapoints/dashboards/edit'
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