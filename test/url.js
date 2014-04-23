var assert = require('assert');
var scrub = require('../index.js');
var gold = 'dogs-and-cats-and-2-dogs-and-3-cats';

suite('Test url scrubbing', function() {

  test('Simple case', function(done) {
    var dirty = 'Dogs and cats and 2 dogs and 3 Cats';

    var clean = scrub(dirty);
    console.log(dirty, clean);
    assert.equal(clean, gold, 'Should match clean format');
    done();
  });

  test('Special characters', function(done) {
    var dirty = 'Dogs and cats : and 2 DOGS and 3- cAts?';

    var clean = scrub(dirty);
    console.log(dirty, clean);
    assert.equal(clean, gold, 'Should match clean format');
    done();
  });

  test('Double dash', function(done) {
    var dirty = 'Dogs and -- cats and 2 dogs    and-3-- Cats';

    var clean = scrub(dirty);
    console.log(dirty, clean);
    assert.equal(clean, gold, 'Should match clean format');
    done();
  });

});