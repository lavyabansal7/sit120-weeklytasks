let now = new Date(Date.now());
console.log("the current date is ");
console.log(now.toDateString());

console.log("the day is " + now.getDay());
console.log("the date is " + now.getDate());
console.log("the Month is " + now.getMonth());

console.log("the year is " + now.getFullYear());


now.setFullYear(2002);
console.log(now.getFullYear());
now.setDate(16);
console.log(now.getDate());
now.setMonth(12);
console.log(now.getMonth());

let birthday = new Date('16 December 2002 ');
console.log(birthday.toDateString());


let new_date = new Date();
setTimeout(() => {
    new_date = Date.now();
    console.log(new_date);
}),10000
