console.log("js is running...");


// Valid voter
function checkVoter() {
    const ageInput = document.getElementById('ageInput').value;
    const age = Number(ageInput);
    const result = document.getElementById('result');

    if (isNaN(age)) {
        result.innerText = "Please enter a valid number.";
    } else if (age >= 18) {
        result.innerText = "You can vote!";
    } else {
        result.innerText = "You can't vote.";
    }
}

// shop discount


//Positive or Negative number
function positiveNegetiveNumber(num) {
    if (num > 0) console.log("the number is possitive");
    else if (num == 0) console.log("the number is zero");
    else console.log("the number is negative");
};


//Even or Odd number
function evenOdd(num) {
    if (num % 2 === 0) console.log("Even num");
    else console.log("Odd number");
}

// Binary representation 

function convertToBonary(num) {
    let binary = " ";
    if (num === 0) return console.log("binary representation of the num is 0");
    else {
        while (num > 0) {
            let remainder = num % 2;
            binary = remainder + binary;
            num = Math.floor(num / 2);
        }
        binary = Number(num);
        return console.log(`binary representation of the num is ${num} `);
    }

}
convertToBonary(10);

// By using a inbuilt js method 
let binary = num => console.log(num.toString(2));
binary(10);


//  convert a number By using bit wise operator 
let decimalToBinary = function (num) {
    if (num === 0) return console.log(`the binary representation of ${num} is 0`);
    else {
        let binary = "";

        while (num > 0) {
            let lastbit = num & 1;
            binary = lastbit + binary;
            num = num >> 1;
        }

        return console.log(binary);
    }
}

decimalToBinary(10);


//  Check if a number is a multiple of another

let multiple = (a, b) => {
    if (a % b === 0) {
        console.log(`${a} is a multiple of ${b}`);
    } else {
        console.log(`${a} is not a multiple of ${b}`);
    }
};

multiple(10, 5);
multiple(10, 3);

// The sum of the first N natural numbers 

function sumOfNaturalNumber(num) {
    let sum = (num * (num + 1)) / 2
    return console.log(`sum of num is  ${sum}`);
}

sumOfNaturalNumber(10);

//Sum of numbers in a given range

function sumIntRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return console.log(` the sum of given range is ${sum} `);
}

sumIntRange(10, 11);

//Sum of digits until a single digit (Digital Root)

function unitDigitOfSum(num) {

    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return console.log(num);

}
unitDigitOfSum(111);

//divisibility 

let pt = prompt("enter a number");
if (pr === null) {
    console.log("cancel");
} else {
    let n = Number(pr);
}

if (isNaN(n)) {
    console.log("Invalid Input");
} else {
    if (n > a) {
        for (let i = 1; i <= Math.floor(n / 2); i++) {
            if (n % i === 0) {
                console.log(i);
            }
        }
    }
}

// prime Number
function primeOrNot(num) {
    let pt = prompt("enter a number");
    if (pr === null) {
        console.log("cancel");
    } else {
        let n = Number(pr);
    }

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n > 0) {
            let isPrime = true;
            for (let i = 1; i <= Math.floor(n / 2); i++) {
                if (n % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) console.log("isPrime");
            else console.log("not prime");
        }
    }
}


function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

// break and continue 
// break stop the loop 
// continue skip the current iteration 



// while loop - when to stop

// let i = 1;
// while (i < 10) {
//     console.log(i);
// }
// when we  taking a mud of a number with 10 it will giv the last digit
//  let rev = 4; rev = rev*10 + rem;


//strong Number = when you take factorial of a every digit of a number and then accumulated the factorial if the sum is equal to the original number is a strong number


/* 
do{
console.log("hello");
i++
} 
while (i <= 10); 

its called entry control
*/

// gause random nnumber

let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let guess = 0;
while (guess !== random) {
    guess = Number(prompt("Guess the Number"));
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("try again between 0 to 100");
        continue
    } 
    if(guess > random ) {
        console.log("too high , try again");
    } else if( guess < random ) {
        console.log("too low, try again");
    } else {
        console.log("congratulation 🎉 you gress the right number")
    }

}