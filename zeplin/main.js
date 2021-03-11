let input = document.getElementsByClassName('input')[0]
let input_text = document.getElementsByClassName('input-text')[0]

input.addEventListener('click', function(){
    input_text.style.display = 'block'
    input_text.focus()
})