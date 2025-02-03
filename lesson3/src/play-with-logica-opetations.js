const a = true;
const b = false;

console.log (a && b);  // i якщо є 1 значення=false ? ,буде  false
console.log (a || b);  // or якщо є 1 значення=true ? ,буде  true
console.log (! b);  // протилежне значення

const c = null;
const d = 2;
const e = c ?? d ?? 4;  //  якщо с <> null  то результат буде с, якщо с = null то результат буде  наступний не null d

console.log (e);


