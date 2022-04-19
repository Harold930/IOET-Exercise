
class Employee {
    constructor(name, schedule){
        this.name = name;
        this.schedule = schedule;
    }
    
    getPairsSchedule(employee1, employee2){
        let times = 0;
        let timeInterval = 0;
        
        employee1.schedule.forEach((schEmployee1) => {
            employee2.schedule.forEach((schEmployee2) => {
            if(schEmployee1.entry.getDay() === schEmployee2.entry.getDay()){
                
                let totalEntryTime1 = schEmployee1.entry.getHours() + (schEmployee1.entry.getMinutes() / 60);
                let totalEntryTime2 = schEmployee2.entry.getHours() + (schEmployee2.entry.getMinutes() / 60);
                let totalExitTime1 = schEmployee1.exit.getHours() + (schEmployee1.exit.getMinutes() / 60);
                let totalExitTime2 = schEmployee2.exit.getHours() + (schEmployee2.exit.getMinutes() / 60);
                
                if(totalEntryTime1 === totalEntryTime2){
                    times++;
                   if(totalExitTime1 === totalExitTime2){
                       timeInterval = timeInterval + (totalExitTime1 - totalEntryTime1);
                   } else if(totalExitTime1 > totalExitTime2){
                        timeInterval = timeInterval + (totalExitTime2 - totalEntryTime1);
                   } else if(totalExitTime1 < totalExitTime2){
                    timeInterval = timeInterval + (totalExitTime1 - totalEntryTime1);
                   }
                } else if(totalEntryTime1 > totalEntryTime2){
                            if(totalEntryTime1 < totalExitTime2){
                                times++;
                               if(totalExitTime1 === totalExitTime2){
                                   timeInterval = timeInterval + (totalExitTime1 - totalEntryTime1);
                               } else if(totalExitTime1 > totalExitTime2){
                                   timeInterval = timeInterval + (totalExitTime2 - totalEntryTime1);
                               } else if(totalExitTime1 < totalExitTime2){
                                   timeInterval = timeInterval + (totalExitTime1 - totalEntryTime1);
                               }
                        }
                } else if(totalEntryTime2 < totalExitTime1){
                    times++;
                   if(totalExitTime1 === totalExitTime2){
                       timeInterval = timeInterval + (totalExitTime2 - totalEntryTime2);
                   } else if(totalExitTime1 > totalExitTime2){
                       timeInterval = timeInterval + (totalExitTime2 - totalEntryTime2);
                   } else if(totalExitTime1 < totalExitTime2){
                       timeInterval = timeInterval + (totalExitTime1 - totalEntryTime2);
                   }
                }
            }
        });
      });
      
      if(times){
          console.table({
            pair: `${employee1.name} - ${employee2.name}`,
            times: times,
            timeInterval: `${timeInterval.toString().split('.')[0]} hrs ${timeInterval.toString().split('.')[1] ? Math.floor(('0.'+timeInterval.toString().split('.')[1]) * 60): 0} min`
          })
      } else {
        console.table({
            pair: `${employee1.name} - ${employee2.name}`,
            times: times,
            timeInterval: `${times} hrs`
          })
      }

      return {
        pair: `${employee1.name} - ${employee2.name}`,
        times: times,
        timeInterval: `${timeInterval.toString().split('.')[0]} hrs ${timeInterval.toString().split('.')[1] ? Math.floor(('0.'+timeInterval.toString().split('.')[1]) * 60): 0} min`
      }
    }
}

module.exports = Employee