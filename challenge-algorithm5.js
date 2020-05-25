var assert = require('assert');
function solution(...arrays){
    var inputArr = [];
    for(const arg in arguments ){
        // flatten(arguments[arg]);
        inputArr.push(arguments[arg]);
    }
    var flattenedArray = [];
    var flatten = function(arg){
        if( !Array.isArray(arg)){
            flattenedArray.push(arg);
        } else {
            for( var a in arg){
                flatten(arg[a]);
            }
        }
    };
    
    // arguments.forEach(flatten);
    inputArr.forEach(flatten);
    console.log('flattened Array ', flattenedArray);
    let arr = [];
    for(let i=0; i < flattenedArray.length; i++){
        let item = flattenedArray[i];
        if( arr.includes(item) ) return true;
        else arr.push(item);
    }
    return false;
}

// assert.equal(solution(1,2,[3]),false);
// let array = [1,2,3];
let array = [[1,2],[[3,1],1]];
// let array = [1,2,[3]];
// let array = [1,2,[3]];

let result = solution(array);
console.log('result ', result);