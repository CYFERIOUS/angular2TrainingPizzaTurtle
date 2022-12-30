//primitives:
let age:number;
age = 12;

let userName:string;
userName = "fercho";


let isGreat:boolean;
isGreat = true;

//complex types

let hobbies: string[];
hobbies= ["play guitar", "draw", "read"];

let person:{
    name:string,
    lastName:string
};

 person = {
    name:"fercho",
    lastName:"Nossa"
}

let people:{
    name:string,
    lastName:string
}[];

people = [{name:"pedro",lastName:"jara"},{name:"eduino",lastName:"deMostoles"}];


///type inference
let course = "angular course";
///course = 12024; infere it like string

///union types

let courseName:string | number = "angular course";
courseName = 12024; 


///type aliases
type Person = {
    name:string,
    lastName:string
};

// functions & types

function add(a:number,b:number):number | string{
    return a+b;
}
//return number infere, but can be an union too

function print(value:any):void{
    console.log(value);
}
//return nothing

/////generics
function insertAtBeginning<T>(array:T[],value:T){
    const newArray = [value,...array];
    return newArray;
}
////T is for infere the data type available in the function
const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray,-1);

////classes

class Student{
    firstName:string;
    lastName:string;
    age:number;
    private courses:string[];
    constructor( first:string,last:string,age:number,courses:string[]){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName:string){
        this.courses.push(courseName);
    }
    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student("fercho","nossa",42,["angular", "webgl"]);
student.enrol("unity");

///interfaces

interface Human {
    firstName:string;
    age:number;
    greet:()=>void;
}

let max: Human;
max={
    firstName:"fercho",
    age:42,
    greet(){
        console.log("fuck yeah");
    }
}

///interfaces implements clases

class Instructor implements Human{
    firstName = "milton";
    age = 35;
    greet(){
        console.log("hello fothermuckers");
    }
}