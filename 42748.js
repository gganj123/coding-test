function solution(array, commands) {
    var list= [];
    var answer = [];
    function cutsortpick(n){
        let [i,j,k]=n
        let slicearray = array.slice(i-1,j).sort((a,b)=>a-b);
        list.push(slicearray[k-1]);
    }
    for(x=0;x<commands.length;x++){
        cutsortpick(commands[x]);
    }
    
    return list;
}