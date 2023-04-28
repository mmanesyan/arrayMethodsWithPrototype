Array.prototype.fakeReverse=function(){
for(let i=0;i<Math.floor(this.length/2);i++){
let current=this[i]
this[i]=this[this.length-1-i]
this[this.length-1-i]=current
}
return this
}
let array=[1,2,3,4,5,10]
console.log(array.fakeReverse())