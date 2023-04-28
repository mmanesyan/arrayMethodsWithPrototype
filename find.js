Array.prototype.fakeFind=function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],this,i)){
            return this[i]
        }
    }
    return undefined
}
let array=[1,2,8,5,9]
console.log(array.fakeFind((elem)=>elem>5))