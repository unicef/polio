import React from 'react'
import Router, {RouteHandler, Route, DefaultRoute} from 'react-router';

import TopBar from './TopBar'

import PageDashboardCustom from '../dashboard-custom/PageDashboardCustom';
import PageDataView from '../data-view/PageDataView';

import PageLanding from './PageLanding';
import PageDashboardDetail from './PageDashboardDetail';

class PageDashboardIndex extends React.Component {

  render() {
    return (
      <div className='page-dashboard'>
        <TopBar />

        <div style={{paddingTop:'20px'}}>
          <RouteHandler/>
        </div>
      </div>
    )
  }
}

PageDashboardIndex.Route = (
  <Route name='dashboard' path='/' handler={ PageDashboardIndex }>
    <DefaultRoute handler={ PageLanding }/>
    { PageDashboardDetail.Route }
    { PageDashboardCustom.Route }
    { PageDataView.Route }
  </Route>
)

export default PageDashboardIndex