const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '017171122111', friends: ['Tom hanks', 'Tom cruise', 'Tom yarn'] }
//const gfName = person.gfName;
// const phone = person.phone;

const {phone, gfName, salary, address} = person;


const complexObject = { // nested object
    name: "abc",
    info: {
        address : "Kola Bagan",
        leader: "Tiger Leader"
    }
}
console.log(gfName, phone, salary, address);
// console.log(phone);

const {leader} = complexObject.info;
console.log(leader);



// array destructuring

const friends = ['Life', 'Hate', 'Love', 'Jealous', 'Let Go'];
const [chotoFriend, NextFriend, ...restFriends] = friends;
console.log(restFriends);
