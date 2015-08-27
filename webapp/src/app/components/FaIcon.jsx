import React from 'react'
import classNames from 'classnames'

const PropTypes = React.PropTypes

export default class FaIcon extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    animate: PropTypes.oneOf(['spin', 'pulse'])
  }

  render() {
    const props = this.props;
    return (<i className={classNames('fa', {
      [`fa-${props.type}`]:props.type,
      [`fa-${props.size}`]:props.size,
      [`fa-${props.animate}`]:props.animate
    })}/>)
  }
}
