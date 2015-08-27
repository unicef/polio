import React from 'react'
import Router, {RouteHandler, Route, DefaultRoute} from 'react-router';

import AboutRhizome from './components/AboutRhizome';

import Row from '../components/Row'

export default class PageLanding extends React.Component {

  render() {
    return (
      <div className='PageLanding'>
        <Row>
          <Row.Col md={9}>
            heh
          </Row.Col>
          <Row.Col md={3}>
            <AboutRhizome/>
          </Row.Col>
        </Row>
      </div>
    )
  }
}