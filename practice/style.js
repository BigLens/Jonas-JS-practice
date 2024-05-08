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
    servers: ['me', 'you', 'us', 'Shean'],

  order: function(starterIndex, mainIndex) {
    return [this.categories[starterIndex]], [this.servers[mainIndex]]
  },

  mainOrder: function ({
    starterIndex, mainIndex, date, time, address
  }) {
    console.log(`Order received! You ordered for ${this.categories[starterIndex]}. The staff name to deliver your order is ${this.servers[mainIndex]} to the address: ${address} on ${date} at around ${time}`);
  }
};

newArr.mainOrder({
    starterIndex: 1,
    mainIndex: 3,
    address: '"10, Akinpelu Road, Moniya Ibadan"',
    date: '24/4/2024',
    time: '17:00'
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



const newName = {
  materials: ['vegetables', 'apple', 'cum', 'face'],
  ingredient: ['asyouwant', 'plusminus', 'seminar', 'thentoo'],
};

const server = [...newName.materials, ...newName.ingredient]
for (const itemss of server.entries()) console.log(itemss);

for (const [i, el] of server.entries())
console.log(`${i + 1}: ${el}`);


