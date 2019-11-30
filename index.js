// Your code here
function createEmployeeRecord(e){
   let h={}
    h.firstName =e[0]
    h.familyName =e[1]
    h.title =e[2]
    h.payPerHour =e[3]
    h.timeInEvents =[]
    h.timeOutEvents =[]
    return h
}

function createEmployeeRecords(arrays){
    const newEmployeeRecords = arrays.map(e => createEmployeeRecord(e))
    return newEmployeeRecords
}

function createTimeInEvent(emplyee, dateTimeString){
    emplyee.timeInEvents.push({type: "TimeIn", date: dateTimeString.split(' ')[0], hour: Number(dateTimeString.split(' ')[1])})

    return emplyee
}


function createTimeOutEvent(emplyee, dateTimeString){
    emplyee.timeOutEvents.push({type: "TimeOut", date: dateTimeString.split(' ')[0], hour: Number(dateTimeString.split(' ')[1])})

    return emplyee
}

function hoursWorkedOnDate(emplyee, date){
    const timeOut = emplyee.timeOutEvents.find(t => t.date === date)
    const timeIn = emplyee.timeInEvents.find(t => t.date === date)
    return (timeOut.hour - timeIn.hour)/100
 }

 function wagesEarnedOnDate(emplyee, date){
    return (hoursWorkedOnDate(emplyee, date) * emplyee.payPerHour)
 }

 function allWagesFor(emplyee){
     let total = 0
    emplyee.timeOutEvents.forEach(function(tIn){
        total +=  wagesEarnedOnDate(emplyee, tIn.date)
    } ) 
    return total
  
 }

 function calculatePayroll(emplyees){

    return emplyees.reduce(function(memo, emplyee) {
                    return (memo +  allWagesFor(emplyee))
                    }, 0);
 }

 function findEmployeeByFirstName(emplyees, name){
     return emplyees.find(emplyee => emplyee.firstName === name)

 }