import React from 'react'
import Reflux from 'reflux'

import { Link } from 'react-router'
import FaIcon from '../components/FaIcon'

import UserStore from './stores/UserStore'

const UserBar = React.createClass({

  mixins: [
    Reflux.listenTo(UserStore, '_onUserStoreUpdate')
  ],

  getInitialState(){
    return {
      user: UserStore.user
    }
  },

  _onUserStoreUpdate(){
    this.setState({
      user: UserStore.user
    })
  },

  render() {
    const state = this.state
    return (
      <li className='UserBar has-dropdown not-click'>
        <a>
          hi~ { state.user.username }
        </a>
        <ul className='dropdown'>
          <li>
            <a href='/accounts/logout?next=/polio'>
              Log out &nbsp;
              <FaIcon type='sign-out' size='lg'/>
            </a>
          </li>
        </ul>
      </li>
    )
  }
});

export default UserBar