import React from 'react';
import classNames from 'classnames';
import sizeClassMap from './constants/sizeClassMap';

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

    Object.keys(sizeClassMap).forEach((key)=> {
      let size = key;
      let prop = size + 'Collapse';

      if (props[prop] !== undefined) {
        classes[sizeClassMap[size] + (!!props[prop] ? '-collapse' : '-uncollapse')] = true;
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