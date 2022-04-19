function warOfNumbers(N){
    let i;
    let x = 0;
    let y = 0;
    for(i = 0 ; i<=N.length -1 ; i ++){
        if (N[i] % 2 == 0){
        x += N[i]; 
        }
        else{
            y += N[i];
        }
    }
    if (x>y) {
        console.log("Even is the winner");
    }
    else {
        console.log("Odd is the winner");
    }
}
warOfNumbers([2, 8, 7, 5])
warOfNumbers([12, 90, 75])
warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]);