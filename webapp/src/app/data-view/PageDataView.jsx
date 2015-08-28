import React from 'react'
import { Route } from 'react-router';

class PageDataView extends React.Component {

  render() {
    return (
      <div className='PageDataView'>
        <h2>
          Page Data View
        </h2>
      </div>
    )
  }
}

PageDataView.Route = (
  <Route name='data-view'
         handler={ PageDataView }/>
)


export default PageDataView