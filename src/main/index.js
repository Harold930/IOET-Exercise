// Ejercicio
// La empresa ACME ofrece a sus empleados la flexibilidad de trabajar las horas que deseen. Pero debido a algunas circunstancias externas, 
// necesitan saber qué empleados han estado en la oficina dentro del mismo período de tiempo.
// El objetivo de este ejercicio es generar una tabla que contenga pares de empleados y con
//  qué frecuencia han coincidido en la oficina.

// Entrada: el nombre de un empleado y el horario en el que trabajó, indicando la hora y las horas.
// Este debe ser un archivo .txt con al menos cinco conjuntos de datos. 
// Puede incluir los datos de nuestros ejemplos a continuación:

// Ejemplo 1:

// ENTRADA
// RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
// ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
// ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00


// SALIDA:
// ASTRID-RENÉE: 2
// ASTRID-ANDRÉS: 3
// RENÉ-ANDRÉS: 2

// Ejemplo 2:

// ENTRADA:
// RENÉ=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
// ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

// SALIDA:
// RENÉ-ASTRID: 3


//Lo que se me ocurre es que primero debo crear las instancias de los empleados para luego trabajar 
// con esos objetos. Para eso, debo leer el archivo schedule.txt. 

const Employee = require('../utilities/employee.js');
const createEmployees = require('../utilities/createEmployees.js');

const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname,'../data/schedule.txt'));

let arrayEmployeesAndSchedule = data.toString().split('\n');

let arrayEmployees = createEmployees(arrayEmployeesAndSchedule);
// arrayEmployees.forEach((ele) => console.log(ele));
// // console.log(arrayEmployees);

//Una vez creados los empleados con sus respectivos nombres y los horarios a los que asistieron 
// a la oficina en esa semana, lo que procede es hacer la lógica para saber cuántas veces se cruzaron
// los empleados, de par en par. 

