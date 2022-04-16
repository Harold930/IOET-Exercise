

function createDate(day, entryTime, entryMinute, exitTime, exitMinute, schedule){

let entryDate = '';
let exitDate = '';

switch (day) {
    case 'MO':
        entryDate = new Date(2022, 03, 18, entryTime, entryMinute);
        exitDate = new Date(2022, 03, 18, exitTime, exitMinute);
        schedule.push({
            entry: entryDate,
            exit: exitDate
        });
        break;
    case 'TU':
        entryDate = new Date(2022, 03, 19, entryTime, entryMinute);
        exitDate = new Date(2022, 03, 19, exitTime, exitMinute);
        schedule.push({
            entry: entryDate,
            exit: exitDate
        });
        break;      
    case 'WE':
        entryDate = new Date(2022, 03, 20, entryTime, entryMinute);
        exitDate = new Date(2022, 03, 20, exitTime, exitMinute);
        schedule.push({
            entry: entryDate,
            exit: exitDate
        });
        break;     
    case 'TH':
        entryDate = new Date(2022, 03, 21, entryTime, entryMinute);
        exitDate = new Date(2022, 03, 21, exitTime, exitMinute);
        schedule.push({
            entry: entryDate,
            exit: exitDate
        });
        break;    
    case 'FR':
        entryDate = new Date(2022, 03, 22, entryTime, entryMinute);
        exitDate = new Date(2022, 03, 22, exitTime, exitMinute);
    schedule.push({
        entry: entryDate,
        exit: exitDate
    });
        break;
    case 'SA':
        entryDate = new Date(2022, 03, 23, entryTime, entryMinute);
        exitDate = new Date(2022, 03, 23, exitTime, exitMinute);
    schedule.push({
        entry: entryDate,
        exit: exitDate
    });
        break;  
    case 'SU':
        entryDate = new Date(2022, 03, 24, entryTime, entryMinute);
        exitDate = new Date(2022, 03, 24, exitTime, exitMinute);
    schedule.push({
        entry: entryDate,
        exit: exitDate
    });
        break;
    default:
        break;
}

}

module.exports = createDate;