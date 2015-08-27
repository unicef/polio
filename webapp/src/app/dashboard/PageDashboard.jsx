import React from 'react'
import Router, {RouteHandler, Route, DefaultRoute} from 'react-router';

import TopBar from './TopBar'

import PageLanding from './PageLanding';

class PageDashboard extends React.Component {

  render() {
    return (
      <div className='page-dashboard'>
        <TopBar />

        <div>
          <RouteHandler/>
        </div>
      </div>
    )
  }
}

PageDashboard.Route = (
  <Route name='dashboard' path='/' handler={ PageDashboard }>
    <DefaultRoute handler={ PageLanding }/>
  </Route>
)

export default PageDashboard