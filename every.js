Array.prototype.fakeEvery=function(callback){
for(let i=0;i<this.length;i++){
if(!callback(this[i],i,this)){
    return false;
}
}
return true
}
let array=[1,2,3,8]
console.log(array.fakeEvery((elem)=>elem >0))