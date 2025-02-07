function fibonacci(n) {
    let next, a, b;
    a = 0;

    b = 1;
   if(n < 0){
    console.log("Enter a Valid Number");
   }else if(n > 0){
    console.log(a);
    console.log(b);
    for(i = 3; i <= n; i++) {
        next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
   }
   
}

fibonacci(5);