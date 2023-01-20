obj = {
    name : "Gaurav",
    age : 20
};

function addToAge(years){
    this.age += years
}
arr = [5];
addToAge.apply(obj,arr);

console.log(`${obj.age} after apply`);
addToAge.call(obj , 5);
console.log(`${obj.age} after call`);

function getAge(){
    console.log(this.age);
}

var boundedgetAge =getAge.bind(obj);
boundedgetAge();

let add = function (x,y){
    console.log(x+y);
}

let  addTwo = add.bind(this,2);
addTwo(5);
