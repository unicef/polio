import React from 'react'
import { RouteHandler, Route, DefaultRoute } from 'react-router';

import PageDashboardCustomList from './PageDashboardCustomList'
import PageDashboardCustomCreate from './PageDashboardCustomCreate'

class PageDashboardCustom extends React.Component {

  render() {
    return (
      <div className='PageDashboardCustom'>
        <h2>
          Dashboard Custom
        </h2>
        <RouteHandler/>
      </div>
    )
  }
}

PageDashboardCustom.Route = (
  <Route name='dashboard-custom'
         handler={ PageDashboardCustom }>
    <DefaultRoute handler={ PageDashboardCustomList }/>
    { PageDashboardCustomList.Route }
    { PageDashboardCustomCreate.Route }
  </Route>
)


export default PageDashboardCustom