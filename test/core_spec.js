import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries} from '../src/core';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);


describe('application logic', () => {

  describe('setEntries', () => {

    it('converts to immutable', () => {
  const state = Map();
  const entries = ['Trainspotting', '28 Days Later'];
  const nextState = setEntries(state, entries);
  expect(nextState).to.equal(Map({
    entries: List.of('Trainspotting', '28 Days Later')
  }));
});
    });

  });
