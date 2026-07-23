// function sum(a, b){
//     return a+b;
//     console.log("Hello");
// }
// console.log(sum(2,3));
// const sum = (a,b) =>{
//     return a+b;
// }
// console.log(sum(8,9));
//Arrow Function
// const sum=()=>({a:1,b:2});
// console.log(sum()); //it doesnt have this keyword ,arguments object, super keyword;
// function sum(){
//     console.log(arguments);
//     return a+b;

// }
// sum();
//Rest Parameter;
// const sum=(...number)=>{
//     console.log(number);

// }
// sum(1,2,3,4,5,6);
// sum("a","b","c");

// const sum=(...number,a,b)=>{
//     console.log(a);
// }
// sum(3,4,1,2);
//Rest parameter should be last parameter always;
// a=[1,2,3,4,5];
// b=[...a,6,7,8,9];
// console.log(b);

//Lexical Scoping
// function outer(){
//     const a =9;
//     function inner(){

//     }
//     inner();
// }
// outer();

//Closures

// function outer(){
//     var a = 9;
//     return function inner(){
//         a++;
//         console.log(a);
//     }
// }
//     const f=outer();
//     f();
//     f();


//array 
      