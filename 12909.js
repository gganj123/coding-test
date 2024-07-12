function solution(s){
    var result=0;
    for(list of s){
        result += list =="(" ? 1:-1
        if(result<0){
            return false;
        }
    }
    return result==0;
}