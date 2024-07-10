let name = "Steve";

let firstName = function(){
    let fName = 'Steve';
    return fName;
}

// Arrow Functions
const names = ['Bob', 'Kenneth', 'Walter']
console.log(names.map( (names => names.length) ) )

const nums = [1, 4, 9, 16]
const numsSqrt = (nums.map((num) => Math.sqrt(num)));


function getScore(){
    let scr = 7;
    return scr;
}

function showScore(){
    console.log(7 + '-' + 9);
}

showScore();


// Promises
let myPromise = new Promise(function(resolve, reject){
    resolve();
    reject();
});

myPromise.then(
    function(value){
        console.log("The promise succeeded.");
    },
    function(error){
        console.log("The promise was rejected.");
    }
);

const createPromise = new Promise( 
    (resolve, reject) => {

    setTimeout(function () {
        resolve("The promise is resolved after 5 seconds");
    }, 5000);
});

createPromise.then( (promisedata) => console.log("Promise resolved successfully.", promisedata));
