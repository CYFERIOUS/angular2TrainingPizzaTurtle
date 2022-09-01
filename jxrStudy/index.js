import { filter, interval, timeInterval, map, debounceTime, Observable, of, reduce, scan, fromEvent, pluck, distinctUntilChanged } from 'rxjs';
 


import pkg from 'prompt-sync';
const prompt = pkg();
const name = {type:String, value:String}
name.value = prompt('What is your name?');
console.log(`Hey there ${name.value}`);

const observable1 = interval(1000);
const observer1 = {
    next:function(value){
        console.log(value);
    }, 
    error:function(error){
        console.log("Error" + error);
    }
}


let obs1 = observable1
  .pipe(debounceTime(500),filter((value)=>{
        return value % 2 == 0;
  }),timeInterval(),map((data)=>{
    return "study :" + data.interval; 
  }))
  .subscribe(observer1);


const observable2 = of(1,2,3,4,5);
const observer2 = {
  next:function(value){
      console.log(value);
  }, 
  error:function(error){
      console.log("Error" + error);
  }
}

let obs2 = observable2.pipe(scan((total,current)=>{
  return total + current;
})).subscribe(observer2);

 ////pluck
const observable3 = of(name);
const observer3 = {
  next:function(value){
      console.log("the name is "+value);
  }, 
  error:function(error){
      console.log("Error" + error);
  }
}
//////pipe(pluck('target','value'),debounceTime(500),distinctUntilChanged()).
let obs3 = observable3.subscribe(observer3);

setTimeout(()=>{
    obs1.unsubscribe();
    obs2.unsubscribe();
    obs3.unsubscribe();
},10000);

