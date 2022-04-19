const Employee = require('../utilities/employee.js');


function createTables(employees){
    let i = 0;
    while (i <= employees.length) {
        for(let j = i + 1; j < employees.length; j++){
            Employee.prototype.getPairsSchedule(employees[i], employees[j])
        }
        i++;
    }
}

module.exports = createTables;

