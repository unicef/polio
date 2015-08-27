import React from 'react';
import classNames from 'classnames';
import sizeClassMap from './constants/sizeClassMap';

const PropTypes = React.PropTypes;

class Col extends React.Component {

  static propTypes = {

    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,

    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,

    smPush: PropTypes.number,
    mdPush: PropTypes.number,
    lgPush: PropTypes.number,

    smPull: PropTypes.number,
    mdPull: PropTypes.number,
    lgPull: PropTypes.number,

    smCentered: PropTypes.bool,
    mdCentered: PropTypes.bool,
    lgCentered: PropTypes.bool,

    end: PropTypes.bool
  }

  render() {

    const props = this.props;
    let classes = {};

    Object.keys(sizeClassMap).forEach((key)=> {
      let size = sizeClassMap[key];

      let prop = key;
      let classPart = size + '-';

      if (props[prop]) {
        classes[classPart + props[prop]] = true;
      }

      prop = key + 'Offset';
      classPart = size + '-offset-';
      if (props[prop] >= 0) {
        classes[classPart + props[prop]] = true;
      }

      prop = key + 'Push';
      classPart = size + '-push-';
      if (props[prop] >= 0) {
        classes[classPart + props[prop]] = true;
      }

      prop = key + 'Pull';
      classPart = size + '-pull-';
      if (props[prop] >= 0) {
        classes[classPart + props[prop]] = true;
      }

      prop = key + 'Centered';

      if (props[prop] !== undefined) {
        classPart = size + (props[prop] ? '-centered' : '-uncentered');
        classes[classPart] = true;
      }

    });

    classes.columns = true;
    classes.end = !!props.end;

    return (
      <div {...props}
        className={classNames(props.className, classes)}>
        {props.children}
      </div>
    );
  }
}

export default Col;