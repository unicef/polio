import React from 'react'
import { Route } from 'react-router';

class PageDashboardCustomCreate extends React.Component {

  render() {
    return (
      <div className='PageDashboardCustomCreate'>
        PageDashboardCustomCreate
      </div>
    )
  }
}

PageDashboardCustomCreate.Route = (
  <Route name='dashboard-custom-create'
         path='create'
         handler={ PageDashboardCustomCreate }/>
)

export default PageDashboardCustomCreate