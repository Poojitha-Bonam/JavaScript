// 1st Question
function processNumbers(x,y,callback){
    return callback(x,y)
}
var sum=processNumbers(3,4,function(x,y){
    return x+y
})
console.log("sum:",sum)

        // or

// 1st Question
function processNumbers(anonymous){
    console.log(anonymous(3,4))
}
var sum=function(a,b){
    return a+b
}
processNumbers(sum)


// 2nd Question
function greet(callback){
    return callback("Alice")
}
var x=greet(function(name){
    return name
});
console.log("Hello,",x)


// 3rd Question
function calculate(x,y,callback){
    return callback(x,y)
}
var diff=calculate(10,5,function(x,y){
    return x-y
})
console.log("Difference:", diff);


// With Arrow Function
function calculate(x,y,callback){
    return callback(x,y)
}
var diff=calculate(10,5,(a,b) => a-b)
console.log("Difference:", diff);



