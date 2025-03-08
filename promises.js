// Question-1 : Online Food Delivery
function OrderReceived(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Order Received")
        },1000)
    })
}
function preparingFood(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Food prepared")
        },3000)
    })
}
function packingFood(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Food Packed")
        },2000)
    })
}
function assignedPerson(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Assigned a Delivery Person")
        },2000)
    })
}
function deliveringFood(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Delivered Food Successfully")
        },4000)
    })
}
OrderReceived()
.then(res => {
    console.log(res) 
    return preparingFood()
})
.then(res => {
    console.log(res)
    return packingFood()
})
.then(res => {
    console.log(res)
    return assignedPerson()
})
.then(res => {
    console.log(res)
    return deliveringFood()
})
.then(res => console.log(res))
.catch(err => console.error(err))


// Question-2 : Movie Ticket Booking
function selectSeats(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Seats Selected")
        },2000)
    })
}
function paymentProcess(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Payment Successfull")
        },3000)
    })
}
function ticketGenerated(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Ticket Generated Successfully")
        },1000)
    })
}
function confirmEmail(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Sent Email Confirmation")
        },2000)
    })
}
selectSeats()
.then(res => {
    console.log(res)
    return paymentProcess()
})
.then(res => {
    console.log(res)
    return ticketGenerated()
})
.then(res => {
    console.log(res)
    return confirmEmail()
})
.then(res => console.log(res))
.catch(err => console.error(err))


// Question-3 : Car Service Center
function checkinCar(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Car Check-in Completed")
        },1000)
    })
}
function oilChange(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Oil Chnaged")
        },2000)
    })
}
function engineCheck(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Engine Checked")
        },3000)
    })
}
function carWash(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Car wash checked")
        },2000)
    })
}
function qualityCheck(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("Final Quality Checked")
        },2000)
    })
}
checkinCar()
.then(res => {
    console.log(res)
    return oilChange()
})
.then(res => {
    console.log(res)
    return engineCheck()
})
.then(res => {
    console.log(res)
    return carWash()
})
.then(res => {
    console.log(res)
    return qualityCheck()
})
.then(res => console.log(res))
.catch(err => console.error(err))


// Question-4 : Laptop Repair Service
function diagnosingIssue(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Issue Diagnosing")
        },3000)
    })
}
function faultyParts(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Faulty Parts Replaced")
        },4000)
    })
}
function updateSoftware(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Software Updated")
        },2000)
    })
}
function finalTesting(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Final Tested")
        },2000)
    })
}
function returnCustomer(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Returned to customer")
        },1000)
    })
}
diagnosingIssue()
.then(res => {
    console.log(res)
    return faultyParts()
})
.then(res => {
    console.log(res)
    return updateSoftware()
})
.then(res => {
    console.log(res)
    return finalTesting()
})
.then(res => {
    console.log(res)
    return returnCustomer()
})
.then(res => console.log(res))
.catch(err => console.error(err))


// Question-5 : Online Course Enrollment
function checkingCourse(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Course Availability Checked")
        },1000)
    })
}
function processingPayment(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Payment Successfull")
        },3000)
    })
}
function enrolledId(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Enrolled Id Generated")
        },1000)
    })
}
function courseMaterial(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Sent Course Materials")
        },2000)
    })
}
function accessGrant(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Access to live classes Granted")
        },2000)
    })
}
checkingCourse()
.then(res => {
    console.log(res)
    return processingPayment()
})
.then(res => {
    console.log(res)
    return enrolledId()
})
.then(res => {
    console.log(res)
    return courseMaterial()
})
.then(res => {
    console.log(res)
    return accessGrant()
})
.then(res => console.log(res))
.catch(err => console.error(err))
