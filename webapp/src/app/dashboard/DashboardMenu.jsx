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

    let dataMenuList = _(state.dashboardList)
      .map((dashboardItem)=> {
        return {
          label: dashboardItem.title,
          href: '#/' + _.kebabCase(dashboardItem.title)
        }
      })
      .value()

    dataMenuList = dataMenuList.concat([
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
        menuList={dataMenuList}
        />
    )
  },

  render() {


    return (
      <ul>
        { this.renderExploreDataMenu() }
      </ul>
    )
  }
});

export default DashboardMenu