const Employee = require('../utilities/employee.js');
const createDate = require('./createDate.js');


let name = '';
let entryDate = '';
let exitDate = '';
let entryTime = '';
let entryMinute = '';
let exitTime = '';
let exitMinute = '';
let day = '';
let arraySchedule = [];
let arrayEmployees = [];


function createEmployees(arrayEmployeesAndSchedule){

            arrayEmployeesAndSchedule.forEach(element => {
                let employee = new Employee();
                name = element.split('=')[0];
                employee.name = name;
                employee.schedule = []
                arraySchedule = element.split('=')[1].split(',');
                
                arraySchedule.forEach((element) => {
                    
                    day = element.slice(0,2);
                    entryTime = element.slice(2).split('-')[0].slice(0,2);
                    entryMinute = element.slice(2).split('-')[0].slice(3,5);
                    exitTime = element.slice(2).split('-')[1].slice(0,2);
                    exitMinute = element.slice(2).split('-')[1].slice(3,5);

                    createDate(day, entryTime, entryMinute, exitTime, exitMinute, employee.schedule);
                
            });
            arrayEmployees.push(employee);
        });
    return arrayEmployees;
}

module.exports = createEmployees;
