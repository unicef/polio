import React from 'react'
import Router, { Route } from 'react-router';

class PageDashboardCustomList extends React.Component {

  render() {
    return (
      <div className='PageDashboardCustomList'>
        PageDashboardCustomList
      </div>
    )
  }
}

PageDashboardCustomList.Route = (
  <Route name='dashboard-custom-list'
         handler={ PageDashboardCustomList }/>
)

export default PageDashboardCustomList