import SecondClass from './Second';
import assert from 'assert'
const object = new SecondClass(); 

/**  Test Data  */
class TestName {
  
  static get getName(){
    return "Test"
  }

  static get getAge(){
    return 10
  }
}

/** Test Suite */
describe('NameAndAge', function() {
      /** Test Specs */
      it('should have name as Test', function() {
        assert.equal(object.name , TestName.getName);
      });
      it('should have age as 10', function() {
        assert.equal(object.age , TestName.getAge);
      });
});