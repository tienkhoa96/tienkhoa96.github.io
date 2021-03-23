const todo_list = document.querySelector('.todo-list')
const btn_add = document.querySelector('#btn-add')
const todo_input = document.querySelector('#todo-input')
let isUpdate = false
let idUpdate = null
const options = document.getElementsByName('todo-option-item')
//id , title, status



function createId() {
    let id = Math.floor(Math.random() * 100000)
    return id;
}



//renderUI
function renderUI(arr) {
    todo_list.innerHTML = "";
    if (arr.length == 0) {
        todo_list.innerHTML = '<p class="todos-empty"> Khong co danh sach viec can lam</p>'
        return
    }
    for (let i = 0; i < arr.length; i++) {
        let t = arr[i]
        todo_list.innerHTML +=
            `
                <div class="todo-item ${t.status ? 'active-todo' : ''}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? 'checked' : ''} onClick="toggleTodo(${t.id})">
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update" onClick="updateTodo(${t.id})">
                            <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg" alt="icon">
                        </button>
                        <button class="btn btn-delete" onClick="deleteTodo(${t.id})">
                            <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg" alt="icon">
                        </button>
                    </div>
                </div>
        `
    }

}
renderUI(todos)
//additeem
btn_add.addEventListener('click', function () {
    let todoTitle = todo_input.value
    if (todoTitle == '') {
        alert('Noi dung khong duoc de trong')
        return;
    }
    if (isUpdate) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = todoTitle
            }
        }
        btn_add.innerText = 'THÊM'
        isUpdate = false
        idUpdate = ""

    } else {
        let newTodo = {
            id: createId(),
            title: todoTitle,
            status: false
        }
        todos.push(newTodo)

    }

    renderUI(todos)
    todo_input.value = ""
})
//toggleestatus
function toggleTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
        }
    }
    renderUI(todos)

}
// deletetodo
function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }
    }
    renderUI(todos)

}
// updatetodo
function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id)
            todo_input.value = todos[i].title
    }
    btn_add.innerText = 'cap nhat'
    todo_input.focus()
    isUpdate = true
    idUpdate = id


}


// optiontodo

/*
    chay for options
    
    chay for 
    if ss status true false

    */
function optionTodo() {

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            checkedId = options[i].id;
        }
    }
    if (checkedId == 'all') {
        renderUI(todos)

    } else if (checkedId == 'unactive') {
        let newTodos = []
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].status == false) {
                newTodos.push(todos[i])
            }
        }
        renderUI(newTodos)
    } else if (checkedId == 'active') {
        let newTodoss = []
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].status == true) {
                newTodoss.push(todos[i])

            }
        }
        renderUI(newTodoss)
    }



}

