// let a = 100;
// if(a <= 9){
//     console.log("it is a single digit number");
// }else{
//     console.log("it is a double digit number");
// }



// if(a <= 9 && a>0){
//     console.log("it is a single digit number");
// }
// else if(a ==0){
//     console.log("it is a zero");
// }
// else if(a<99 && a>9){
//     console.log("it is a double digit number");
// }

// else{
//     console.log("it is above two digit number");
// }

// let a = 6;
// let b = 10;
// let c = "/";

// switch (c) {
//     case "+" :
//         console.log(a+b);
//         break;
//     case "-" :
//         console.log(a-b);
//         break;
//     case "*" :
//         console.log(a*b);
//         break;
//     case "/" :
//         console.log(a/b);
//         break;
//     default:
//         console.log("error")
//         break;
// }


// for (let index = 0; index<=10; index++) {
//     console.log("index:  "+index)
    
// }

// let odd=0;
// let even=0;
// for(let i=0; i<=10; i++){
//     if(i%2){
//         odd+=i
//     }
//     else if((i%2)+1){
//         even+=i
//     }

// }
// console.log("sum of numbers: "+ odd);
// console.log("sum of numbers: "+ even);
//--------------------------------------------------
// let num=123456789;
// function number(odd,even) {
//     for(let i=0; i<=10; i++){
//     if(i%2){
//         odd+=i
//     }
//     else if((i%2)+1){
//         even+=i
//     }

// }
// console.log("sum of odd numbers: "+ odd);
// console.log("sum of even numbers: "+ even);
    
// }number(num);
//----------------------------------------------------------


// let departments=["IT","MECH","CSE","EEE"];
// // console.log(departments);
//--------------------------------------------------------
// for(let i=0; i<=departments.length;i++){
//      console.log(departments[i]);
// }
// departments.unshift("AIDS");
// console.log(departments);

// departments.pop();
// departments[1]="AIML"
// console.log(departments);


// num=[1,2,3,4,5,6];

// console.log(num.splice(1,5))

//------------------------------------------------------------
// class AClass{
     
//     b=10;
    
//     demo(a1){
//         console.log("hello "+b+a1);
//     }
// }
// let a1=new AClass();
// a1.demo()

//-----------------------------------------------------------------

// function showalert(){
//         alert("hello welcome to this world");
//     }
//----------------------------------------------------------------

// let chocolates=["perk","kitcat","diary milk","5star","munch","kitcat"];
// chocolates.map(function(choco){
//     console.log(choco);
// })

//--------------------------------------------------------

// let twoarr=[[1,2,3],[4,5,6],[7,8,9]];
// for(let i=0; i<=twoarr.length;i++){
//     // console.log(twoarr[i]);
    
//     for(let j=0; j<=twoarr[i].length;j++){
//         //inte=twoarr[j]+twoarr[i];
//         console.log(j);
//     }
// }

//----------------------------------------------------

// class demo{
//     program(g){
//         console.log("welcome to javascript"+g);
//     }
// }
// let a=new demo();
// a.program(10);
// let a1=new demo();
// a1.program(6)


// class ChildDemo1 extends demo{
//     program1(){
//         console.log("welcome to html");
//     }
// }


// class ChildDemo2 extends demo{
//     program2(){
//         console.log("welcome to css");
//     }
// }



// class ChildDemo3 extends demo{
//     program3(){
//         console.log("welcome to react");
//     }
// }
// let a=new demo();
// let b=new ChildDemo1();
// let c=new ChildDemo2();
// let d=new ChildDemo3();
// a.program();
// b.program1();
// c.program2();
// d.program3();
//------------------------------------------------------------------------

// class twoWheeler{
//     constructor(bike,number){
//         this.bike=bike;
//         this.number=number;
//     }
//     data(){
        
//         console.log(`My bike name is ${this.bike}`);
//         console.log(`My bike number is ${this.number}`);
//     }

// }


// class fourWheeler extends twoWheeler{
//     constructor(car,carnumber){
//         super(car,carnumber);
//         this.car=car;
//         this.carnumber=carnumber;
//     }
//     data1(){
//         super.data();
//         console.log(`My car name is ${this.car}`);
//         console.log(`My car number is ${this.carnumber}`);
//     }
// }

// class heavyvehicle extends twoWheeler{
//     constructor(lorry,number){
//         super(lorry,number);
//         this.lorry=lorry;
//     }
//     data2(){
        
//         console.log(`My heavy vehicle name is ${this.lorry}`);
//         console.log(`My heavy vehicle number is ${this.number}`);
//     }
// }

// let a=new twoWheeler("pulsar",1946);
// let b=new fourWheeler("tata",1007);
// let c=new heavyvehicle("Tipper",3364);

// a.data();
// b.data1();

// c.data2();

//--------=========-------------------===========--------

// class disaster{

//     earth(){
//         console.log("There are two types of disaster");
//     }
// }

// class disaster1 extends disaster{
//     earth(){
//         super.earth();
//         console.log("One is a natural disaster");
//     }
// }

// class disaster2 extends disaster1{
//     earth(){
//         super.earth();
//          console.log("Another one is a man-made disaster");
//     }
// }

// function social(obj){
//     obj.earth();
// }


// let a=new disaster();
// let b=new disaster1();
// let c=new disaster2();

// c.earth();

// social(a);       //function call
// social(b);
// social(c);

// a.earth();
// b.earth();
// c.earth();

//--------------------------------------------------------------------------------------

let str="happy birthday";
let reverse;

for(let i=str.lastIndexOf();i<=str.length; i++){
    reverse+=i;

    console.log(Number(reverse));
}









