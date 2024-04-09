'use strict'

const firstArr = [2, 10, 12];
const [x, y, z] = firstArr;
console.log(x, y, z);

//swapping values

let primary = 'oluLens';
let secondary = 'bigLens';

let temp = primary;
primary = secondary;
secondary = temp;
console.log(primary, secondary);

// That's too stressful. We can achieve this same result by using array destructuring. See example below


const newArr = {
    categories: ['fish', 'meat', 'and-co'],
    servers: ['me', 'you', 'us', 'them'],

    order: function (mainIndex, starterIndex) {
        return [this.categories[mainIndex]], [this.servers[starterIndex]]
    },

    mainOrder: function ({mainIndex, starterIndex, time, address}) {
        console.log(`Your order is received! you ordered for ${this.categories[starterIndexIndex]}, the staff to deliver your order is ${this.servers[mainIndex]} to ${address} at around ${time}`);
    }
};

newArr.order({
    address: '12, Anikulapo street, Mokola Ibadan',
    time: '19:00',
    mainIndex: 1,
    starterIndex: 1
});


let [main, , second] = newArr.categories;
console.log(main, second);

[main, second] = [second, main]
console.log(main, second);

//mutating values

let a = 12;
let b = 14;

const anotherAr = {a: 10, b: 13}; ({a, b} = anotherAr);
console.log(a, b);


//NULIFY COALITION 
console.log(5 && 6 && 7 && 8);

let guestNum = newArr.guestNum1 || 0;
console.log(guestNum);
