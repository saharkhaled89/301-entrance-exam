// create a javascript file and name it 'q1.js' on 'q1-solution' branch then do the following:
// Write a function greaterThan that will take an array of numbers and a number as parameters then
// return the number of numbers that are greater than that number in the array

// example greaterThan([1,2,3,4],2) => 2
// example greaterThan([2,4,8],8) => 0


function greaterThan(arr,elem){
  var counter=0;
  for(var i=0; i< arr.length ;i++){
    if(arr[i]>elem){
      counter+=1;
    }
  }
  return counter;
}

var arr =[5,0,1,2,3,4,5,6,7,8];
console.log(greaterThan(arr,3));