$(document).ready(function(){

    let arr = ['tung', {name: 'techmaster', age: 5}, 4, false, true, 8];
    let numberArr = [];
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
            numberArr.push(arr[i]);
            
        }
    }

    console.log('number',numberArr)


})

