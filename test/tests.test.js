const assert = require('assert');
const Employee = require('../src/utilities/employee.js');


describe('Clase Employee', function () {

    let employee;

    beforeEach(function() {
      employee = new Employee();
    });

  describe('Crea correctamente una instance de la clase Employee', function () {
    it('should return -1 when the value is not present', function () {
    //   assert.e(employee, Employee);
      expect(employee instanceof Employee).toBe(true);
    });
  });
});
