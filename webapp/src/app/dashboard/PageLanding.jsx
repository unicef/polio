import React from 'react'
import Router, {RouteHandler, Route, DefaultRoute} from 'react-router';

import Row from '../components/Row'
import RecentCampaignList from '../campaign/RecentCampaignList'
import AboutRhizome from './components/AboutRhizome';

class PageLanding extends React.Component {

  render() {
    return (
      <div className='PageLanding'>
        <Row>
          <Row.Col md={9}>
            <span className="pageWelcome">
              Welcome to UNICEF’s Polio Eradication data portal.
            </span>
            <RecentCampaignList />
          </Row.Col>
          <Row.Col md={3}>
            <AboutRhizome/>
          </Row.Col>
        </Row>
      </div>
    )
  }
}

PageLanding.Route = (
  <Route name='landing' handler={ PageLanding }/>
)

export default PageLanding