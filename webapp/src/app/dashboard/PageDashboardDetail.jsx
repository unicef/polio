import React from 'react'
import Router, { RouteHandler, Route, DefaultRoute } from 'react-router';

class PageDashboardDetail extends React.Component {

  render() {
    return (
      <div className='PageDashboardDetail'>
        PageDashboardDetail
      </div>
    )
  }
}

PageDashboardDetail.Route = (
  <Route path='dashboard'
         handler={ PageDashboardDetail }>
    <DefaultRoute handler={ PageDashboardDetail }/>
    <Route name='dashboard-detail-latest'
           path=':dashboardType/'
           handler={ PageDashboardDetail }/>
    <Route name='dashboard-detail'
           path=':dashboardType/:region/:year/:month'
           handler={ PageDashboardDetail }/>
  </Route>
)

export default PageDashboardDetail