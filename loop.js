const bottle = {
    color: 'yellow',
    hold:'water', 
    price: 50,
    isCleaned: true
};

// for(let i = 0; i<10; i++){}
// for (const num of numbers){}  array 
// for (const prop in student) {}  onject 
for(const prop in bottle){
    console.log(bottle[prop]);
}