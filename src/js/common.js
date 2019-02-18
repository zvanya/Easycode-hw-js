let add = (...rest) => {
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};

console.log(`sum = ${add(1,2,3,4,5,6,7,8,9)}`);