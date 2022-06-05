const bottle = {
    color: 'yellow',
    hold:'water', 
    price: 50,
    isCleaned: true
};

const keys = Object.keys(bottle);
// console.log(keys);

const values = Object.values(bottle);
// console.log(values);

const entries = Object.entries(bottle);
// console.log(entries);

// Object.seal(bottle);
delete bottle.isCleaned;
Object.freeze(bottle)
bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;
console.log(bottle);
