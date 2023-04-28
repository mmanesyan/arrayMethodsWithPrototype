Array.prototype.fakeReduce=function(callback,initialValue){
let accumulator=initialValue!== undefined ? initialValue:this[0]
for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }
  return accumulator
}
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.fakeReduce((accumulator,current)=>accumulator+current))