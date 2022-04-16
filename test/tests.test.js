const assert = require('chai').assert;
const Employee = require('../src/utilities/employee.js');


describe('Employee class', function () {

    let employee;

    beforeEach(function() {
      employee = new Employee('Harold', [{},{}]);
    });

    it('Employee should be a class that create instances successfully', function () {
      assert.instanceOf(employee, Employee, 'employee is an instance of Employee');
    });

    it('The instances should have an attribute called name', function() {
      assert.equal(employee.hasOwnProperty('name'), true);
    });

    it('The instances should have an attribute called schedule', function() {
      assert.equal(employee.hasOwnProperty('schedule'), true);
    });

    it('The attribute schedule should be an array', function() {
      assert.equal(Array.isArray(employee.schedule), true);
    });

    it('The Employee class has a method called getPairsSchedule', function() {
      assert.equal(typeof employee.getPairsSchedule === 'function', true);
    });

});
