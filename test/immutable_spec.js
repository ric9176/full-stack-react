import {expect} from 'chai';
import {List, Map} from 'immutable';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);


describe('immutability', () => {

  describe('a number', () => {

   function increment(currentState) {
     return currentState + 1;
   }

   it('is immutable', () => {
     let state = 42;
     let nextState = increment(state);

     expect(nextState).to.equal(43);
     expect(state).to.equal(42);
   });

 });

  describe('a tree', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.eql(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.eql(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });

  });

});
