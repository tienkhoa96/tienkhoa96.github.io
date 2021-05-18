// var a 

// if(1+1==3){
//     a = "tung"
// } else if(1+1==2){
//     a = "khoa"
// } else{
//     a = "nam"
// }

// var a = 1+1 ==3 ? "tung" : 1+1 ==2 ? "khoa" : "nam"

// console.log("a",a)  

// => a = khoa

// let arr = [1,2,3,4]

// var a = arr[0]
// var b = arr[1]
// var c = arr[2]

// var [a,b,c] = arr
// console.log(arr)

// function f() { return [1, 2, 3];}
// var [a, , b] = f()


// var mixed = {
//     one: 1, two: 2, values: [3, 4, 5]
// };
// var { one: a, two: b, values:[c, ,e]} = mixed;
// console.log(a,b,c,e)

// var [{prop: x} = {prop: 123}] = []
// console.log("x",x)

// if(true){
//     var b =2;
// }
// console.log(b) 
// => b = 2

// if(true){
//     let c =2;
// }
// console.log(c) 
// => c undefined

// function checkScope(){
//     var d = "checking"
// }
// console.log("this", this)

// const a = "tung"

// a = "nam"

// console.log("a", a)
// => a không được thay đổi

// const u = {
//     name: 'tung',
//     age : 16
// }

// u.age = 20
// console.log("a", u)
// => a = {
//     name: "tung",
//     age: 20
// }

// for(var C=0; c<3; c++){

// }
// console.log("cacs", c)

// function doSomeThing(){
//     let d = 4
// }
// console.log(a) // 1
// console.log(b) // 2
// console.log(c) // 3
// console.log(d) // undefined

// let tinhtong = (a,b) => a+b

// let tong = tinhtong(5,6)
// console.log(tong) = 11



// let arr = [5, 6, 7, 8]

// let a = arr.map((item, index) =>{
//     return {
//         key: index,
//         value: item
//     }
// })

// console.log("a", a) 
// =>  
// a   (4) [{…}, {…}, {…}, {…}]
//     0: {key: 0, value: 5}
//     1: {key: 1, value: 6}
//     2: {key: 2, value: 7}
//     3: {key: 3, value: 8}

// let returnObj = (arr) => arr.map((item, index) => ({key: index, value: item}))
// console.log("returnObj", returnObj(arr))
