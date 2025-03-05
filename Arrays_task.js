// Question-1
arr = [1,2,3,4,5]
console.log(arr)

// Question-2
arr = [1,2,3,4,5]
console.log(arr[2])

// Question-3
arr = [1,2,3,4,5]
arr[1] = 6
console.log(arr)

// Question-4

// arr = [1,2,3,4,5]
// console.log(arr.length)

function length(arr){
    return arr.length
}
console.log(length([1,2,3,4,5]))


// Question-5
arr = [1,2,3,4,5]
arr.push(6)
// arr[5] = 6
console.log(arr)

// Question-6
arr = [1,2,3,4,5,6]
arr.pop()
console.log(arr)

// Question-7
arr = [1,2,3,4,5]
for(var i = 0;i<=arr.length;i++){
    console.log(arr[i])
}

// Question-8
function checkValue(arr,value){
    return value in arr
}
console.log(checkValue([1,2,3,4,5],3))
console.log(checkValue([1,2,3,4,5],6))

// Question-9
array = [1, 2, 3, 4, 5]
console.log("Original Array",array)
copied_array = array.slice()
console.log("Copied Array:", copied_array)

// Another method
copy_arr = [...array]
console.log(copy_arr)

// Question-10
arr = [1,2,3,4,5]
console.log(arr.join(""))
