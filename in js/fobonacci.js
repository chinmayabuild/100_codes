function fibonacci(n) {
    let next, a, b, count;
    a = 0;
    b = 1;
    count = 0;
    if (n > 0){
        while(n > count) {
        
            console.log(a);
            let next = a + b;
            a = b;
            b = next;
            count++;
        }
    } else {
        console.log("no fibonacci number lies")
    }
    
}

fibonacci(0);


