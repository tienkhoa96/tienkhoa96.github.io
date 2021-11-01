$(function () {
    const reUpdateDom = () =>{
        $(".todo-list").html("")
            $.get(`http://localhost:3000/todoList`, function(data, status){
                data.forEach(item => {
                    $(".todo-list").append(`
                        <div class="todo-item ${item.status == true ? "active-todo" : ""}">
                            <div class="todo-item-title">
                                <input type="checkbox" ${item.status == true ? "checked" : ""}>
                                <p>${item.title}</p>
                            </div>
                            <div class="option">
                                <button class="btn btn-update" data-id="${item.id}">
                                    <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg" alt="icon">
                                </button>
                                <button class="btn btn-delete"  data-id="${item.id}">
                                    <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg" alt="icon">
                                </button>
                            </div> 
                        </div>
                    `)
                });
                deleteClick();
                updateClick();
            })
    }

    $("#btn-add").click(function () { 
            let title = $("#todo-input").val()
            let status = false
            let data = {title, status}
        $.ajax({
            type: "POST",
            url: `http://localhost:3000/todoList`,
            data: data,
            success: function (result) {

            },
            dataType: 'json'
        });
    });

    const deleteClick = () => {
        $(".btn-delete").click(function (event) {
            let { id } = event.currentTarget.dataset;
            $.ajax({
                url: `http://localhost:3000/todoList/${id}`, // url data you want to delete
                type: 'DELETE',
                success: function (result) {
                    reUpdateDom();
                }
            });
        });
    }

    reUpdateDom()

    const updateClick = () => {
        $(".btn-update").click(function (event) {
            let { id } = event.currentTarget.dataset;
            let title = $(".todo-item-title").text()
            console.log(title)

            let data = {  }
            $.ajax({
                type: "PUT",
                url: `http://localhost:3000/todoList/${id}`,
                data: data,
                success: function (result) {
                    let key = $("#search-name").val();
                    reUpdateDom(`name_like=${key}`);
                    $(`#updateId${id}`).modal("hide");
                    $('.modal-backdrop').remove();
                },
                dataType: 'json'
            });
        });
    }


    
     
})