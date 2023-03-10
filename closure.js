function stopWatch(){
    let counter = 2;
    return function(){
        counter++;
        return counter;
    }
}

const watch1 = stopWatch();
const watch2 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch2());