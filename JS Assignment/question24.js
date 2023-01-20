for (let i = 0; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && i !== 0 && i !== 1) {
        console.log(i);
    }
}
