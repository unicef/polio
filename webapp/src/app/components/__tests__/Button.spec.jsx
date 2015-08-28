import sinon from 'sinon';
import { expect } from 'chai';

import React from 'react/addons'
import Button from '../Button';

const TestUtils = React.addons.TestUtils

describe(__filename, ()=> {

  context('when render', ()=> {

    it(`should have className with 'button'`, ()=> {
      const instance = TestUtils.renderIntoDocument(<Button/>)
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.eql('button');
    })

  })

  context(`when render with prop 'size'`, ()=> {

    it(`should have className with 'button large'`, ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Button size='large'/>
      )
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.contains('button');
      expect(instanceNodeClassName).to.contains('large');
    })

  })

  context(`when render with prop 'color'`, ()=> {

    it(`should have className with 'button alert'`, ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Button color='alert'/>
      )
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.contains('button');
      expect(instanceNodeClassName).to.contains('alert');
    })

  })

  context(`when render with prop 'radius'`, ()=> {

    it(`should have className with 'button radius'`, ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Button radius='radius'/>
      )
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.contains('button');
      expect(instanceNodeClassName).to.contains('radius');
    })

  })

  context(`when render with prop 'expand'`, ()=> {

    it(`should have className with 'button expand'`, ()=> {
      const instance = TestUtils.renderIntoDocument(
        <Button expand/>
      )
      const instanceNodeClassName = React.findDOMNode(instance).className;

      expect(instanceNodeClassName).to.contains('button');
      expect(instanceNodeClassName).to.contains('expand');
    })

  })

  context(`when render with prop 'disabled'`, ()=> {

    it(`should have className with 'button disabled' and not be clickable`, ()=> {

      const onClick = sinon.spy();

      const instance = TestUtils.renderIntoDocument(
        <Button disabled onClick={onClick}/>
      )
      const instanceNode = React.findDOMNode(instance);

      TestUtils.Simulate.click(instanceNode)

      expect(instanceNode.className).to.contains('button');
      expect(instanceNode.className).to.contains('disabled');

      expect(onClick.calledOnce).to.be.eql(false)

    })

    it(`should have not className with 'button' and be clickable, if disabled be set false`, ()=> {

      const onClick = sinon.spy();

      const instance = TestUtils.renderIntoDocument(
        <Button disabled={false} onClick={onClick}/>
      )

      const instanceNode = React.findDOMNode(instance);

      TestUtils.Simulate.click(instanceNode)

      expect(instanceNode.className).to.contains('button');
      expect(instanceNode.className).to.not.contains('disabled');

      expect(onClick.calledOnce).to.be.eql(true)

    })

  })

});