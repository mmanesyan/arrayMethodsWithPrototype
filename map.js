Array.prototype.fakeMap=function(callback){
    let newArray=[]
 for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
    newArray.push(callback(this[i],i,this))
    }
 }
 return newArray
}
let array=[1,2,3]
console.log(array.fakeMap((element) => element*5))