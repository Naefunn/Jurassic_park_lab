const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 25);
    dinosaur = new Dinosaur('Velociraptor', 'carnivore', 30);
    dinosaur2 = new Dinosaur('T-rex', 'carnivore', 50);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurCollection;
    assert.deepEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur)
    const actual = park.dinosaurCollection;
    assert.deepEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.findPopularDinosaur();
    assert.strictEqual(actual, 50);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.findDinosaurBySpecies('T-rex');
    assert.deepEqual(actual, dinosaur2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 80);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 29200);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    const actual = park.annualRevenue();
    assert.strictEqual(actual, 730000);
  });

});
