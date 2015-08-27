import React from 'react'

import Router, {RouteHandler, Route, DefaultRoute} from 'react-router';

import PageDashboard from './dashboard/PageDashboard';

import UserActions from './user/actions/UserActions'

class App extends React.Component {

  componentWillMount() {
    UserActions.getUserPermissions()
  }

  render() {
    return (
      <RouteHandler />
    )
  }
}

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={PageDashboard}/>
    { PageDashboard.Route }
  </Route>
);

Router.run(routes, Router.HashLocation, (Root)=> {
  React.render(
    <Root/>,
    document.getElementById('main')
  )
});
