// normal array sum

const ages = [12, 14, 19, 65];
const ages2 = [20, 32, 11];
const ages3 = [60, 82, 21];
const allAges = ages.concat(ages2).concat([5000]).concat(ages3);
console.log(allAges);

//using es6

const ages = [12, 14, 19, 65];
const ages2 = [20, 32, 11];
const ages3 = [60, 82, 21];
const allAges = [...ages, ...ages2, 5000,  ...ages3];
console.log(allAges);

// Finding the biggest number from an array

const takaPoisa = [600, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);

//Finding the biggest number from variable

const business = 600;
const minister = 450;
const sochib = 250;
const maximum2 = Math.max(business, minister, sochib);
console.log(maximum2);