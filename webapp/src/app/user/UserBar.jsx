import React from 'react'
import Reflux from 'reflux'

import { Link } from 'react-router'
import FaIcon from '../components/FaIcon'
import DropdownMenu from '../components/DropdownMenu'

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

    const menuList = [
      {
        label: (<span>
          Log out &nbsp; <FaIcon type='sign-out' size='lg'/>
        </span>),
        href: '/accounts/logout?next=/polio'
      }
    ]

    return (
      <DropdownMenu
        className='UserBar'
        label={
          <span>
            hi~ { state.user.first_name } { state.user.last_name }
          </span>
        }
        menuList={menuList}
      />
    )
  }
});

export default UserBar