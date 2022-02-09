'use strict';



(function () {

    /* Operators 
    https://javascript.info/operators
    */
    /*     console.log(2 * 3); // multiply
        console.log(2 ** 3); // square root */

    /* console.log( 50 ** (1/4) ); */
    /*     let x = (2 * 1) + 3;
        console.log(x); */

    /* let firstName = 'Johny';
    let lastName = null;
    let nickName = "Supercoder";
    console.log((firstName || lastName || nickName || "Anonymous")); */

    /* function name(parameter1, parameter2, ... parameterN) {
        console.log(parameter1, parameter2, parameterN);
      }
      name(1,3,4,5,6); */
    /*  function sayHi() {
       alert( "Hello" );
     }
     
     alert( sayHi ); // shows the function code
     sayHi(); // prints Hello */

    //arrow functions 
    /* let sum = (a, b) => a + b;
    console.log(sum(1, 2));
    let sayHi = () => alert("Hello!");

    sayHi(); */
    /* let sum = (a, b) => (a ?? 100) * (b ?? 50);
    console.log(sum(1,3)); */
/* 
    let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? () => alert('Hello') :  () => alert("Greetings!");

welcome(); */
/* 
//Multi line arrow function
let johny = (a,b) =>{
    if(a > b){
        return 'A is greater than B';
    }
    return 'B is greater than A';

}
console.log(johny(12,3)); */
})();