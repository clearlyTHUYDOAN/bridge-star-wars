import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { sinon } from 'sinon';
import Planet from './planet';

// first you want to have a function called describe
// takes two arguments:
// 1) string names the thing we're testing
// 2)

describe('<Planet />', () => { // encapsulates a bunch of it statements...also if you put x in front of subscribe it won't run
    // it('Should display the name in an H4', () => {
    //     const wrapper = shallow(
    //         <Planet name='Planet Della' 
    //         terrain="rocky"
    //         climate="Arid"
    //         population="1000000"
    //         />);

    //     expect(wrapper.find('h4')).to.have.length(1); // wrapper is an enzyme component and represents the component itself
    //     expect(wrapper.find('h4').text()).tocontainer('Planet Dlla');

    //     // you want to make sure your tests are capable of failing so it will alert you when something is off.
    // })



    // it('should fire getPlanets when that button is clicked', () => { // DOESN'T WORK RIGHT NOW
    //     // sinon kind of hijacks and creates spies for your functions.
    //     // lets you check to see if your function was called, how many times, and what was passed into it

    //     const getPlanetsSpy = sinon.spy(Planets.prototype, 'getPlanets');

    //     const wrapper = shallow(<Planets />)

    //     wrapper.find('button').simulate('click');

    //     expect(getPlanetsSpy.called).to.equal(true);

    // })



})

// you should get into the habit of writing test.js files for your components. della likes to test at least 75% of app
// most important thing to test would be the functions