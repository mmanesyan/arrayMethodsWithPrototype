Array.prototype.fakeFilter=function(callback){
    let newArray=[]
 for(let i=0;i<this.length;i++){
    if(callback(this[i],i,this)){
    newArray.push(this[i])
    }
 }
 return newArray
}
let array=[1,2,3,6,10,15]
console.log(array.fakeFilter((element) => element>2))