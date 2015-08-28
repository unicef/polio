import { expect } from 'chai';

import React from 'react/addons'
import Row from '../Row';

const TestUtils = React.addons.TestUtils

describe(__filename, ()=> {

  context('when render', ()=> {

    it('should have className with "row"', ()=> {
      const instance = TestUtils.renderIntoDocument(<Row/>)
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.eql('row');
    })

  })

  context('when render with prop xxCollapse', ()=> {

    it('should have className with "row small-collapse"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Row smCollapse/>
      )
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.contains('row');
      expect(instanceNodeClassName).to.contains('small-collapse');
    })

    it('should have className with "row small-uncollapse", if prop smCollapse be set false', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Row smCollapse={false}/>
      )
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.contains('row');
      expect(instanceNodeClassName).to.not.contains('small-collapse');
      expect(instanceNodeClassName).to.contains('small-uncollapse');
    })

    it('should have mixin classNames', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Row mdCollapse={false} lgCollapse={true}/>
      )
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.contains('row');
      expect(instanceNodeClassName).to.contains('medium-uncollapse');
      expect(instanceNodeClassName).to.contains('large-collapse');
    })

  })

});