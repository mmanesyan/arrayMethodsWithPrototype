Array.prototype.fakeSome=function(callback){
    for(let i=0;i<this.length;i++){
     if(callback(this[i],i,this)){
        return true
     }
    }
    return false
}
let array=[1,2,4,7]
console.log(array.fakeSome((elem)=>elem<0))