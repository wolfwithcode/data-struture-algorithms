var asserts = require('assert');
function solution(num){
    return getData(num).then(data => {
        let numbers = [data.first, data.second];
        return getMax(numbers);
    }); 
}


function getData(num){
    return Promise.resolve({
        first: 80*num,
        second: 30*num
    });
}

function getMax(numbers){
    return Promise.resolve(Math.max(...numbers));
}

solution(10).then(result => {
    console.log(result);
    // asserts.equal(result, 80)
});
