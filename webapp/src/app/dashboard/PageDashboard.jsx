import React from 'react'
import Router, {RouteHandler, Route, DefaultRoute} from 'react-router';

import TopBar from './TopBar'

const PropTypes = React.PropTypes

export default class PageDashboard extends React.Component {
  render() {
    return (
      <div className='page-dashboard'>
        <TopBar />
        I am Dashboard
      </div>
    )
  }
}