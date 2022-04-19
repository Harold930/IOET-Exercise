const assert = require('chai').assert;
const Employee = require('../src/utilities/employee.js');
const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname,'../src/data/schedule1.txt'));
const arrayEmployeesAndSchedule = data.toString().split('\n');
const createEmployees = require('../src/utilities/createEmployees.js');
const createDate = require('../src/utilities/createDate.js');
const { create } = require('domain');

describe('Employee class', function () {

    let employee1;
    let employee2;

    beforeEach(function() {
      employee1 = new Employee('Camilo', [{
                                            entry: new Date(2022, 03, 18, 10, 15),
                                            exit: new Date(2022, 03, 18, 14, 00)
                                          },
                                          {
                                            entry: new Date(2022, 03, 19, 08, 00),
                                            exit: new Date(2022, 03, 19, 12, 10)
                                          },
                                          {
                                            entry: new Date(2022, 03, 21, 15, 00),
                                            exit: new Date(2022, 03, 21, 18, 15),
                                          }]);

      employee2 = new Employee('Mateo', [{
                                            entry: new Date(2022, 03, 18, 10, 15),
                                            exit: new Date(2022, 03, 18, 14, 00)
                                          },
                                          {
                                            entry: new Date(2022, 03, 19, 09, 00),
                                            exit: new Date(2022, 03, 19, 11, 00)
                                          },
                                          {
                                            entry: new Date(2022, 03, 21, 13, 00),
                                            exit: new Date(2022, 03, 21, 18, 00),
                                          }]);
    });

    it('Employee should be a class that create instances successfully', function () {
      assert.instanceOf(employee1, Employee, 'employee is an instance of Employee');
    });

    it('The instances should have an attribute called name', function() {
      assert.equal(employee1.hasOwnProperty('name'), true);
    });

    it('The instances should have an attribute called schedule', function() {
      assert.equal(employee1.hasOwnProperty('schedule'), true);
    });

    it('The attribute schedule should be an array', function() {
      assert.equal(Array.isArray(employee1.schedule), true);
    });

    it('The Employee class has a method called getPairsSchedule', function() {
      assert.equal(typeof employee1.getPairsSchedule === 'function', true);
    });

    it('The getPairsSchedule method should return an object as above', function() {
      assert.deepEqual(Employee.prototype.getPairsSchedule(employee1,employee2),  {
                                                                                    pair: 'Camilo - Mateo',
                                                                                    times: 3,
                                                                                    timeInterval: '8 hrs 45 min'
                                                                                  });
    });
});


describe('createEmployees function', function(){
  it('createEmployees function should return an array of dates', function(){
    assert.equal(Array.isArray(createEmployees(arrayEmployeesAndSchedule)), true)
  });

  it('Each element belonging to the array created before are instance of Employee', function() {
    assert.instanceOf(createEmployees(arrayEmployeesAndSchedule)[0],Employee)
  })
});

describe('createDate function', function(){
  let array = []
  it('createDate function should return a object', function(){
    assert.instanceOf(createDate('MO', 18, 00, 20, 00, array), Object)
  });

  it('Each value belonging to the object created before are instance of Date', function() {
    assert.instanceOf(createDate('MO', 18, 00, 20, 00, array).entry,Date)
  })
});

