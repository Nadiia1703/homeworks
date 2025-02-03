function playWithVar(){
    const a=1;
    let b =2;
    b=3;

    console.log(a, b);

    const booleanVar = true;
    const underfidVar = undefined;

    console.log (booleanVar,underfidVar);

    const obj ={
        key: 'value',
        key1: 'value1'
    };

    console.log(obj);

    return obj;
}

//playWithVar();
console.log('\n' + playWithVar());
