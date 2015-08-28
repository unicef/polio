import React from 'react';
import classNames from 'classnames';
import fdGridSizeClasses from './constants/fdGridSizeClasses';

import Col from './Col'

const PropTypes = React.PropTypes

class Row extends React.Component {

  static propTypes = {
    smCollapse: PropTypes.bool,
    mdCollapse: PropTypes.bool,
    lgCollapse: PropTypes.bool
  }

  render() {

    const props = this.props;
    let classes = {}

    Object.keys(fdGridSizeClasses).forEach((key)=> {
      let size = key;
      let prop = size + 'Collapse';

      if (props[prop] !== undefined) {
        classes[fdGridSizeClasses[size] + (!!props[prop] ? '-collapse' : '-uncollapse')] = true;
      }
    });

    return (
      <div {...props} className={classNames(props.className, 'row', classes)}>
        {props.children}
      </div>
    );
  }
}

Row.Col = Col;

export default Row;