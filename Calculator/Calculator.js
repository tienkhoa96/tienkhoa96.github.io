let inputString_value = '';
let inputString_show = ''

function onClickValue (showtext, value){
    
    inputString_show += showtext;
    let inputDom  = document.getElementById('screen_1')
    inputDom.value = inputString_show
  
    if(value && typeof value === 'string') {
        inputString_value += value;
        
    
    } else {
        inputString_value *= value;
    }

}

function showResult () {
    let result = eval(inputString_show)
    let inputshow = document.getElementById('screen_2')
    inputshow.value = result
}
//   xóa 1 ký tự cuối
function clear(){
    inputString_show = inputString_show.slice(0,-1)
    

}

// xóa toàn bộ

function allClear(){
    inputString_show = '0'

}










// function onClickPower () {
//     let lengthIpnput = inputString_value.length
//     let numberCheck = ''
//     for(i=lengthIpnput; i>=0 ; i++) {
//         let value = inputString_value[i]
//         if(typeof value === 'number' || value ==='√' || value === '!') {
//             numberCheck += value
//         } else {
//             return
//         }
//     }
//     inputString_value = numberCheck.split("").reverse().join("")
// }
