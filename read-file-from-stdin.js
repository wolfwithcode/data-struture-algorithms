process.stdin.resume();
process.stdin.setEncoding('utf8');

const readLine = require('readline');
const fs = require('fs');
//const fileStream = fs.createReadStream('input.txt');
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputStrArray = [];

rl.on('line', function(line){
    //console.log('line ', line);
    inputStrArray.push(line);
})

rl.on('close', ()=>{
    doWork(inputStrArray);
})

function doWork(inputStrArray){
    //console.log('inputStrArr ', inputStrArray);
  	//let number0 = parseInt(inputStrArray[0]);
  	//let number1 = parseInt(inputStrArray[1]);
  	//console.log(number0+number1);
}


process.stdin.resume();
process.stdin.setEncoding('utf8');

const readLine = require('readline');
const fs = require('fs');
//const fileStream = fs.createReadStream('input.txt');
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputStrArray = [];

rl.on('line', function(line){
    //console.log('line ', line);
    inputStrArray.push(line);
})

rl.on('close', ()=>{
    doWork(inputStrArray);
})

function doWork(inputStrArray){
    //console.log('inputStrArr ', inputStrArray);
  	//let number0 = parseInt(inputStrArray[0]);
  	//let number1 = parseInt(inputStrArray[1]);
  	//console.log(number0+number1);
  	let arr0 = inputStrArray[0].split(' ').map(item => parseInt(item));
  	//console.log('arr0', arr0);
  	let arr1 = inputStrArray[1].split(' ').map(item => parseInt(item));
  	//console.log('arr1', arr1);
  	if( arr0.length !== arr1.length ) {
      console.log('NO'); 
      return;
    }
  	arr0.sort( function(a,b){ return a - b});
  	arr1.sort( function(a,b){return a -b});
  	//console.log('after sorting arr0', arr0);
  	//console.log('after sorting arr1', arr1);
  	for(let i=0; i<arr0.length; i++){
      if( arr0[i] !== arr1[i]) {
        console.log('NO'); 
      	return;
      }
    }
  	console.log('YES');       	
}




process.stdin.resume();
process.stdin.setEncoding('utf8');

const readLine = require('readline');
const fs = require('fs');

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputStrArray = [];

rl.on('line', function(line){
    //console.log('line ', line);
    inputStrArray.push(line);
})

rl.on('close', ()=>{
    doWork(inputStrArray);
})

function doWork(inputStrArray){
   
   let arr1 = inputStrArray[1].split(' ');   
   console.log(arr1.reverse().join(' '));
}