// const props = ["eating","running"]
// const animal = {
//     name : "Rabite",
//     walk : function(step){
//         console.log("walk", step);
//     }
// };
// const human = {
//     name: "Rabite",
//     props : ["Eating","runing"],
//     walk: function () {
//         props.forEach(function(item){
//             console.log(this.name + " " + item)
//         })
//         // console.log(this.name + " is walk " + step + " steps");
//     },
// };
// human.walk()
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
// const nameHiman = ["marwan", "ali"];
// const humans = {
//     legs: function (numberOfLeg) {
//     nameHiman.forEach(function (items) {
//         console.log(items + " have " + numberOfLeg + " legs");
//     });
//     },
// };
// humans.legs(10);
//----New Example-------------------------------------------------------
// function showThis(){
//     console.log(this)
// }
// const user ={
//     name: "marwan",
//     show :showThis
// }
// //what the deferant between it :-
// // تعريف ال this بتتعرف عن طريق ال object الي هي فيها
// showThis()//بيصير ما الها ريفرنس
// user.show()//لو كانت داخل اوبجيكت فصارت بتاشر على الاوبجيكت هاي


//----New Example-------------------------------------------------------
// const admin ={
//     username : "admin",
//     password : 123,
//     login : function(){
//         console.log("login "+this.username+" with pass: "+this.password)
//     }
// }
// admin.login()

// const user ={
//     username : "marwan",
//     password : 12345,
//     login :admin.login
// }
// user.login()
//----How can i fixed by (bind)-------------------------------------------------------
// const prop = ["eating","running"]
// function printAnimalProp(itemm) {
//     console.log(this.name + " " + itemm);
// }
// const animals ={
//     name:"rabbit",
//     printProp: function(){
//         prop.forEach(printAnimalProp.bind(animals))
//     }
// }
// animals.printProp();
//----How can i fixed by (call)-------------------------------------------------------
const admin ={
    username : "admin",
    password : 123,
    login : function(){
        console.log("login "+this.username+" with pass: "+this.password)
    }
}
admin.login()

const user ={
    username : "marwan",
    password : 12345,
}
//ال call هو عبارة عن bind and calling لكن ال bind لحالها بتعمل فقط calling
const deleteUserUtility = admin.login.bind(user);
deleteUserUtility()