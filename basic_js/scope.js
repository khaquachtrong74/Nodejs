// Closure
//

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}

let counter1 = outer();
counter1(); // 1
counter1(); // 2
counter1(); // 3

const getCode = (function(){
    const apiCode = "0axcv%24#";
    return function(){
        return apiCode;
    };
})();
console.log(getCode());

const counter = (function(){
    let count = 0;
    return {
        inc() {return ++count;},
        dec() {return --count;},
        get() {return count;}
    }
})();

console.log(counter.inc());
console.log(counter.inc());
console.log(counter.get());
console.log(counter.dec());

// Bài tập

