import React from 'react'
import { Link } from 'react-router'

import FaIcon from '../components/FaIcon'

import UserBar from '../user/UserBar'
import DashboardMenu from './DashboardMenu'

const PropTypes = React.PropTypes

export default class TopBar extends React.Component {
  render() {
    return (
      <div className='top-bar'>
        <ul className="title-area">
          <li className='name'>
            <h1>
              <Link to='/'>
                Rhizome DB
              </Link>
            </h1>
          </li>
        </ul>
        <section className="top-bar-section">
          <DashboardMenu/>
          <ul className="right">
            <UserBar/>
          </ul>
        </section>
      </div>
    )
  }
}