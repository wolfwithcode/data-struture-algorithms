// var _ = require('underscore');
// // var expected = {
// //     animal: {
// //         mammal: {
// //             dog: true,
// //             cat: {
// //                 tiger: true,
// //                 lion: true
// //             },
// //             elenphant: true
// //         },
// //         reptile: true
// //     },
// //     plant: {
// //         sunflower: true
// //     }
// // };

// // //your object
// // var o = { 
// //     foo:"bar",
// //     arr:[1,2,3],
// //     subo: {
// //         foo2:"bar2"
// //     }
// // };

// // //called with every property and its value
// // function process(key,value) {
// //     console.log(key + " : "+value);
// // }

// // function traverse(o,func) {
// //     for (var i in o) {
// //         func.apply(this,[i,o[i]]);  
// //         if (o[i] !== null && typeof(o[i])=="object") {
// //             //going one step down in the object tree!!
// //             traverse(o[i],func);
// //         }
// //     }
// // }

// // //that's all... no magic, no bloated framework
// // traverse(o,process);


// // Example usage
// var arr = [
//     {'id':'animal' ,'parentid' : 0},
//     {'id':'mammal' ,'parentid' : 'animal'},
//     {'id':'dog' ,'parentid' : 'mammal'},
//     {'id':'cat' ,'parentid' : 'mammal'},
//     {'id':'tiger' ,'parentid' : 'cat'},
//     {'id':'elephant' ,'parentid' : 'mammal'},
//     {'id':'reptile' ,'parentid' : 'animal'},
//     {'id':'lion' ,'parentid' : 'cat'},
//     {'id':'plant' ,'parentid' : 0},
//     {'id':'sunflower' ,'parentid' : 'plant'}
// ];

// unflatten = function( array, parent, tree ){
//     tree = typeof tree !== 'undefined' ? tree : [];
//     parent = typeof parent !== 'undefined' ? parent : { id: 0 };
        
//     var children = _.filter( array, function(child){ return child.parentid == parent.id; });
    
//     if( !_.isEmpty( children )  ){
//         if( parent.id == 0 ){
//            tree = children;   
//         }else{
//            parent['children'] = children
//         }
//         _.each( children, function( child ){ unflatten( array, child ) } );                    
//     }
    
//     return tree;
// }

// tree = unflatten( arr );

// console.log(JSON.stringify(tree, null, " "));

var input = [
    'animal/mammal/dog',
    'animal/mammal/cat/tiger',
    'animal/mammal/cat/lion',
    'animal/mammal/elephant',
    'animal/reptile',
    'plant/sunflower'
]
var tableInput = [];
for ( item of input){
    let arr = item.split('/');
    // console.log(arr);
    tableInput.push(arr);
}

console.log('tableInput ',tableInput);
// input.forEach( item => {
//     let arr = item.split('/');
//     console.log(arr);
// })
var tree = {};
var root = [];
for( array of tableInput){
    console.log('array ', array);
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        console.log('item ',item);
        if(i == 0) {
            if( !root.includes(item) ) root.push(item);
        }
        if( !(item in tree) ){
            tree[item] = [];
        } else {
            
        }
        if( i+1 < array.length){
            let nextItem = array[i+1];
            if( !tree[item].includes(nextItem) ) tree[item].push(nextItem);
        }
    }
}

console.log('tree ', tree);

console.log('root ', root);

var result  = {};
var createData = function(arg){
    let children = tree[arg];
    if( children === undefined || children.length == 0){
        return true;
    }
    else {
        let node = {};
        for(child of children){
            node[child] = createData(child);
        }
        return node;
    }
}
for(item of root){
    result[item] = createData(item);
}
console.log('result ',result);
console.log('result ', JSON.stringify(result, null, " "));