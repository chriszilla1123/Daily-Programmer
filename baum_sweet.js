/*
    Author: Chris Hill
    Date: Dec. 22, 2017
    This: baum_sweet.js
    
    Created as an exercise from /r/dailyprogrammer.
*/
baum_sweet(15);

function baum_sweet(n){
    var result = []
    for(var onNum=0; onNum<=n; onNum++){
        var binary = onNum.toString(2);
        var numZeros = 0;
        for(var i=0; i<binary.length; i++){
            if(binary === "0"){  //Initial case, result should be 1;
                result.push(1);
                break;
            }
            if(binary.charAt(i) === '0'){
                numZeros++;
            }
            else{
                if(numZeros % 2 == 1){
                    result.push(0);
                    break;
                }
                else numZeros = 0;
            }
            if(i == (binary.length - 1)){
                if(numZeros % 2 === 1) result.push(0);
                else result.push(1);
            }
        }
    }
    console.log(result);
}