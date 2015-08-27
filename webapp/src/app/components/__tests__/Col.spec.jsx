import { expect } from 'chai';

import React from 'react/addons'
import Col from '../Col';

const TestUtils = React.addons.TestUtils

describe(__filename, ()=> {

  context('when render', ()=> {

    it('should have className with "columns"', ()=> {
      const instance = TestUtils.renderIntoDocument(<Col/>)
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.eql('columns');
    })

  })

  context('when render with size', ()=> {

    it('should have className with "<size>-<number>"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Col sm={12}/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('columns');
      expect(instanceDomClassName).to.contains('small-12');
    })

  })

  context('when render with offsets', ()=> {

    it('should have className with "<size>-offset-<number>"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Col lg={4} lgOffset={1}/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('columns');
      expect(instanceDomClassName).to.contains('large-4');
      expect(instanceDomClassName).to.contains('large-offset-1');
    })

  })

  context('when render with pulls', ()=> {

    it('should have className with "<size>-pull-<number>"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Col lg={4} lgPull={1}/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('columns');
      expect(instanceDomClassName).to.contains('large-4');
      expect(instanceDomClassName).to.contains('large-pull-1');
    })

  })

  context('when render with pushs', ()=> {

    it('should have className with "<size>-pull-<number>"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Col lg={4} lgPush={1}/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('columns');
      expect(instanceDomClassName).to.contains('large-4');
      expect(instanceDomClassName).to.contains('large-push-1');
    })

  })

  context('when render with centered', ()=> {

    it('should have className with "<size>-centered"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Col sm={4} smCentered={true} lgCentered={false}/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('columns');
      expect(instanceDomClassName).to.contains('small-centered');
      expect(instanceDomClassName).to.contains('large-uncentered');
    })

  })

  context('when render with end', ()=> {

    it('should have className with "end"', ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Col sm={4} end/>
      )
      const instanceDomClassName = React.findDOMNode(instance).className;

      expect(instanceDomClassName).to.contains('small-4');
      expect(instanceDomClassName).to.contains('columns');
      expect(instanceDomClassName).to.contains('end');
    })

  })

});