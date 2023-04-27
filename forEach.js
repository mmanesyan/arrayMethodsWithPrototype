Array.prototype.fakeForEach=function(callback){
    let newArray=[]
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}
let array=[1,2,3]
console.log(array.fakeForEach((elem,index,array) => console.log(`Element ${index}:${elem}`)))