function fibonacci(n) {
  let next, a, b, i;
  a = 0;
  b = 1;
  i = 0;
  if (n > 0) {
    while (n > i) {
      console.log(a);
      let next = a + b;
      a = b;
      b = next;
      i++;
    }
  } else {
    console.log("no fibonacci number lies");
  }
}

// fibonacci number at a position
function fibonacciAtPosition(n) {
    let a = 0, b = 1, next;
    if (n === 1) return a;
    if (n === 2) return b;

    for (let i = 3; i <= n; i++) {    
      next = a + b;
      a = b;
      b = next;
      count = 0;
    }
    return next;
  }


  function serialFibonacci(initial, final) {
    let a = 0, b = 1, next, count = 1;

    if (initial === 1) console.log(a);
    if (initial <= 2 && final >= 2) console.log(b);

    while (count < final) {
        next = a + b;
        a = b;
        b = next;
        count++;

        if (count >= initial && count <= final) {
            console.log(next);
        }
    }
}


// Example usage
function serialFibonacci(initial, final) {
    let a = 0, b = 1, next, count = 1;

    if (initial === 1) console.log(a);
    if (initial <= 2 && final >= 2) console.log(b);

    while (count < final) {
        next = a + b;
        a = b;
        b = next;
        count++;

        if (count >= initial && count <= final) {
            console.log(next);
        }
    }
}


function serielFibbonaccii( innitial, final){

    let a, b, next;
    a = 0;
    b = 1;

    
    
}