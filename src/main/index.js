//Lo que se me ocurre es que primero debo crear las instancias de los empleados para luego trabajar 
// con esos objetos. Para eso, debo leer el archivo schedule.txt. 

const createEmployees = require('../utilities/createEmployees.js');
const createTables = require('../utilities/createTables.js')
const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname,'../data/schedule.txt'));

const arrayEmployeesAndSchedule = data.toString().split('\n');
const arrayEmployees = createEmployees(arrayEmployeesAndSchedule);

//Una vez creados los empleados con sus respectivos nombres y los horarios a los que asistieron 
// a la oficina en esa semana, lo que procede es hacer la lógica para saber cuántas veces se cruzaron
// los empleados, de par en par.

createTables(arrayEmployees);
