'use strict';



// function practiceApp(apples, oranges) {
//     const juice = `We have ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const modeChange = practiceApp(5, 0);
// console.log(modeChange);
// console.log(practiceApp(5, 0));

// const appleCard = birhtyear => 2023 - birhtyear; 
// const age = appleCard(1991);
// console.log(age);

/////////////////////////////////////

//working with arrow functions 

// const arrowFunc = (birthYear, firstName) => {
//     const age = 2030 - birthYear;
//     const retirement = 50 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(arrowFunc(1990, 'joe'));
// console.log(arrowFunc(1995, 'movie'));

// /////////////////////

// const newFruit = function (fruits) {
// return fruits * 4;
// }

// function theFunc(apples, oranges) {
//     const appleMultiply = newFruit(apples);
//     const orangeMultiply = newFruit(oranges);
//     return `This is ${appleMultiply} apples and ${orangeMultiply} oranges`;
// }

// console.log(theFunc(2, 3));
///////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////
// const newVar = (a, b, c) => (a + b + c) / 3;
// console.log(newVar(3, 4, 5));


// const newDolphins = newVar(44, 23, 71);
// const newDennis = newVar(27, 38, 40);
// console.log(newDolphins, newDennis);

// const callingFunc = function (vgDolphins, vgDennis) {
//     if (vgDolphins >= 2 * vgDennis) {
//         console.log(`Dolphin wins 🎉 (${vgDolphins} vs. ${vgDennis})`);
//     }else if ( vgDennis >= 2 * vgDolphins) {
//         console.log(`Dennis wins 🎉 (${vgDennis} vs. ${vgDolphins})`);
//     }else {
//         console.log(`No one wins.....`);
//     }
// }
// callingFunc(newDolphins, newDennis);
// callingFunc(113, 20);

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// const newVar = (a, b, c) => (a + b + c) / 3;
// console.log(newVar(3, 4, 5));
// ////////////////////////////////////////////////
// const newDolphins = newVar(44, 23, 71);
// const newDennis = newVar(27, 38, 40);
// console.log(newDolphins, newDennis);

// ////////////////////////////////
// const callingFunc = function (newDolphins, newDennis) {
//     if (newDolphins >= 2 * newDennis) {
//         console.log(`Dolphin wins 🎉 (${newDolphins} vs. ${newDennis})`);
//     }else if ( newDennis >= 2 * newDolphins) {
//         console.log(`Dennis wins 🎉 (${newDennis} vs. ${newDolphins})`);
//     }else {
//         console.log(`No one wins.....`);
//     }
// }
// callingFunc(newDolphins, newDennis);
// callingFunc(113, 20);

// const Name = ['james', 'Aron', 'Jacob'];

// console.log(Name[Name.length -1]);

// const Names = {
//     firstName: 'Joe',
//     lastName: 'Akan',
//     hobby: 'entertainment'
// };
// const names = 'Name'
// console.log(Names.firstName);
// console.log(Names['last' + names])

// //const propT = prompt('What would you want to know about Names? Choose between firstName, lastName, hobby');
// //console.log(Names[propT]);  
// //const choose = prompt('please choose between firstName, lastName, hobby');
// //console.log(choose);

// const newArr = [1990, 1991, 1998, 2000, 1290];
// const ages = [];

// for (let i = newArr.length; i >= 0; i--) {
//     //ages.push(2023 - newArr[i]);
//     console.log(newArr[i]);
// }

//Type conversion and coercion 

// let conversion = '23';
// console.log(conversion);

// const nameNew = '24';

// if(nameNew === 24)  {
//     console.log();
// }
// console.log();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const temps = [12, 32, 15];

// const calcArray = function(temps) {
//     let max = temps[0];
//     for(let i = 0; i < temps.length; i++) {
//         if(temps[i] > max) max = temps[i]
//     }
//     console.log(max);
// }
// calcArray([32, 64, 53, 49, 19]);

// /////////////////////////////////////////////////////////////////////////////////
// const Array1 = ['a', 'b', 'c'];
// const Array2 = ['d', 'e', 'f'];

// const Array3 = Array1.concat(Array2);
// console.log(Array3);



// const calArray = function(temps) {
//     let max = temps[0];
//    for(let i = 0; i < temps.length; i++) {
//         if(temps[i] > max) max = temps[i];
//     }
//     console.log(max);
// }

// calArray([2, 7, 12, 56]);

 const randNames = ['Abel', 'Jacobs', 'Nymes', 'John', 'Joel', 'Michael', 'Jonathan'];

 const loopNames = function(randNames) {
    for (let i = 0; i < randNames.length; i++) {
        randNames[i] += (Math.trunc(Math.random()* 7)+ 1);
    }
    console.log(randNames[i]);
 }

 loopNames(randNames[i]);
 
 document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess')).value;
 })