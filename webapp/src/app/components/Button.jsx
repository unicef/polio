import React from 'react';
import _ from 'lodash'
import classNames from 'classnames';

import fdColorClasses from './constants/fdColorClasses'
import fdSizeClasses from './constants/fdSizeClasses'
import fdRadiusClasses from './constants/fdRadiusClasses'

const PropTypes = React.PropTypes;

const propMap = {
  color: fdColorClasses,
  size: fdSizeClasses,
  radius: fdRadiusClasses
}

export default
class Button extends React.Component {

  static propTypes = {

    color: PropTypes.oneOf(_.keys(propMap.color)),
    size: PropTypes.oneOf(_.keys(propMap.size)),
    radius: PropTypes.oneOf(_.keys(propMap.radius)),

    expand: PropTypes.bool,
    disabled: PropTypes.bool
  }

  render() {

    const props = this.props

    const Tag = !!props.href ? 'a' : 'button';

    let classes = {
      button: true
    }

    _.forIn(propMap, (propClasses, propKey)=> {
      if (props[propKey]) {
        classes[propClasses[props[propKey]]] = true
      }
    });

    classes.expand = !!props.expand
    classes.disabled = !!props.disabled

    return (
      <Tag
        {...props}
        className={classNames(props.className, classes)}
        role='button'>
        {props.children}
      </Tag>
    );
  }
}


