Array.prototype.fakeFindIndex=function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],this,i)){
            return i
        }
    }
    return -1
}
let array=[1,2,7,8,24]
console.log(array.fakeFindIndex((elem)=>elem>5))