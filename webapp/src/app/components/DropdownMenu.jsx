import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'

const PropTypes = React.PropTypes

export default class DropdownMenu extends React.Component {

  static propTypes = {
    label: PropTypes.node,
    menuList: PropTypes.array,
    menuItemRenderer: PropTypes.func
  }

  static defaultProps = {
    menuItemRenderer(menuItem) {
      return (
        <a href={menuItem.href}> { menuItem.label } </a>
      )
    }
  }

  render() {
    const props = this.props

    let menuList

    if (!_.isEmpty(props.menuList)) {
      menuList = _.map(props.menuList, (menuItem, idx)=> {
        if (_.isObject(menuItem)) {
          return (
            <li key={idx}>{props.menuItemRenderer(menuItem)}</li>
          )
        }
        return (
          <li key={idx} className='divider'/>
        )
      })
    }

    return (
      <li className={classNames('has-dropdown not-click', props.className)}>
        <a>
          { props.label }
        </a>
        { menuList ? (
          <ul className='dropdown'>
            { menuList }
          </ul>
        ) : null}
      </li>
    )
  }
}