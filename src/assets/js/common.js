
function LocalStorageFn(){};
LocalStorageFn.prototype.set=function(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}
LocalStorageFn.prototype.get=function(key){
    var  value=JSON.parse( localStorage.getItem(key));
    return  value;
 }
 export  let LocalStorage = new LocalStorageFn();
 