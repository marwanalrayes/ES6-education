const props = ["eating","running"]
const animal = {
    name : "Rabite",
    walk : function(step){
        console.log("walk", step);
    }
};
const human = {
    name: "Rabite",
    props : ["Eating","runing"],
    walk: function () {
        props.forEach(function(item){
            console.log(this.name + " " + item)
        })
        // console.log(this.name + " is walk " + step + " steps");
    },
};
human.walk()
// const dog ={
//     name : "Dog",
// }
// Object.setPrototypeOf(dog , human)
// animal.walk(2);
// human.walk(2);
// dog.walk(2);
// //arrow function
// const name1 = () => 1 + 2
// console.log(name1())
const nameHiman = ["marwan", "ali"];
const humans = {
    legs: function (numberOfLeg) {
    nameHiman.forEach(function (items) {
        console.log(items + " have " + numberOfLeg + " legs");
    });
    },
};
humans.legs(10);