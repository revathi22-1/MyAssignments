/*
  Name        : HomeAssignment1.js
  Author      : Revathi Nair
  Created     : 19-08-2025
  Description : Use var, let, and const to declare variables for all primitive data types in JavaScript. Write simple
code snippets to show how they work, print both their values and types, and use them in short,
meaningful examples

 /*********Variables for each primitive data type ***********/
 //string
 var mobilename="Oppo"
 console.log(`"I am using ${mobilename}", type : ${typeof mobilename}`)

 //number
 let num =9176437183
 console.log(`"My number is ${num}", type : ${typeof num}`)

 //boolean
 var isringing=true
 if(isringing){
    console.log(`"Pick up the call!", type : ${typeof isringing}`)}
    else{
     console.log(`"Don't pick the call",type : ${typeof isringing}`)
    }   
    
//Note else condition is not executed and the condition is not satisfied.

//Undefined
let mobilecolour
console.log(`type: ${typeof mobilecolour}`)

//BigInt
const val= 123456789n
console.log(`${val}, type: ${typeof val}`)

//Null 
const empty=null
console.log(`${empty}, type: ${typeof empty}`)
var id=null
console.log(`${id}, type: ${typeof id}`)
let address=null
console.log(`${address}, type: ${typeof address}`)

/* short note on var,let and const 
"Var" allows redeclaration and reassignment.
      scope is global /function level
      it can be hoisted
"let" & "const" does not allow redeclaration and allows reassignment 
                scope is block level
                it cannot be hoisted
*/

// Scope testing  let block scoping 
//print the outputs inside the scope.
var mobilebrand = "Samsung"
const touchscreen=true
    if(touchscreen){
       let mobilebrand ="Readmi"
       console.log(mobilebrand + "," + typeof(mobilebrand))
    }

// Scope testing  var  global scoping 
//print the outputs outside the scope.

var mobilebrand1 = "Samsung"
const touchscreen1=true
    if(touchscreen){
       let mobilebrand1 ="Readmi"
    }
console.log(mobilebrand1 + "," + typeof(mobilebrand1))

// The below example is for var where it can be redeclared and reassigned.
// Here the mobilebrand1 is redeclared and redefined and the output will be the new value assigned to it.
var mobilebrand2 = "Readmi"
var touchscreen2 =true
if(touchscreen1){
    var mobilebrand2 ="Samsung"
    }
console.log(mobilebrand2 + "," + typeof(mobilebrand2))



