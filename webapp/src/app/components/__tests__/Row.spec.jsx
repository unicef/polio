import { expect } from 'chai';

import React from 'react/addons'
import Row from '../Row';

const TestUtils = React.addons.TestUtils

describe(__filename, ()=> {

  context('when render', ()=> {

    it('should have className with "row"', ()=> {
      const instance = TestUtils.renderIntoDocument(<Row/>)
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.eql('row');
    })

  })

  context('when render with prop xxCollapse', ()=> {

    it('should have className with "row small-collapse"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Row smCollapse/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('row');
      expect(instanceDomClassName).to.contains('small-collapse');
    })

    it('should have className with "row small-uncollapse", if prop smCollapse be set false', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Row smCollapse={false}/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('row');
      expect(instanceDomClassName).to.not.contains('small-collapse');
      expect(instanceDomClassName).to.contains('small-uncollapse');
    })

    it('should have mixin classNames', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Row mdCollapse={false} lgCollapse={true}/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('row');
      expect(instanceDomClassName).to.contains('medium-uncollapse');
      expect(instanceDomClassName).to.contains('large-collapse');
    })

  })

});