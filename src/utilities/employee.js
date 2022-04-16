class Employee {
    constructor(name, schedule){
        this.name = name;
        this.schedule = schedule;
    }

    getPairsSchedule(employee1, employee2){
        let times = 0;
        let timeInterval = 0;
        let day = 0;
        let j  = 0;
        let arrayFilter = [];
        for(let i = 0; i < employee1.schedule.length; i++){
            day = employee1.schedule[i].entry.getDay();
            // console.log(day)
            employee2.schedule.map((element,i) => {
                
                if(element.entry.getDay() === day){
                    console.log(element.entry.getDay())
                    j =  i;
                }
            });
            // console.log(j)
        }
    }
}

module.exports = Employee
