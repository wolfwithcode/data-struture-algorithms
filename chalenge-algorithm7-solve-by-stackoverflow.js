var input = [
    'animal/mammal/dog',
    'animal/mammal/cat/tiger',
    'animal/mammal/cat/lion',
    'animal/mammal/elephant',
    'animal/reptile',
    'plant/sunflower'
]


let splitIntoNames = input.map(str => str.split('/'));
console.log("splitIntoNames: ", JSON.stringify(splitIntoNames, null, 2));
function addName(element, list, index){
    if(index >= list.length){
        return;
    }

    let name = list[index];
    console.log('name ', name);
    let isEndOfList = index === list.length - 1;

    element[name] = element[name] || (isEndOfList ? true : {});
    console.log('element', element[name]);
    addName(element[name], list, index+1);

}

let result = {};
splitIntoNames.forEach( (list) => {
    addName(result, list, 0);
})

console.log("result: ", JSON.stringify(result, null, 2));