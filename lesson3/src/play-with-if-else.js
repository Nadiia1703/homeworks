const b1 = true;
const b2 = false;

if (b1 && b2) {  // false тому пропускаемо
    console.log ('if worked');
} else {
    console.log ('else worked');
}

console.log('-2-------------------');
if (b1 && b2) {
    console.log ('if worked');
} else  if (b1||b2) {
    console.log ('else if worked');
} else {
    console.log('else worked');
}
console.log('--3------------------');
if (b1 && b2) {
    console.log ('if worked');
}if (b1||b2) {
    console.log ('else if worked');
};

console.log('--4------------------');
console.log(b1 || b2 ? 'if worked' : 'else worked');
