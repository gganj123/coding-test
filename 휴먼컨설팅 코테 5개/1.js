function solution(a, b, budget) {
    //3000a + 5000b = 23000
    let A = 0;
    let B = 0;
    if(a > b){
        A=a;
        B=b;
    }else{
        A=b;
        B=a;
    }
    let count = 0;
    if(B==1){
        return Math.floor(budget/A)+1
    }

    for(let i=0;A*i <= budget;i++){
        for(let j=0;j*B+A*i<=budget;j++){
            if(A*i + B*j ==budget){
                count++;
            } 
        }
    }
    return count;

}