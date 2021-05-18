$(function () {
    // jquery o day
    // $('#search-name').keydown(function(event){
    //     if(event.which === 13) {
    //         $.get(`http://localhost:3000/listStudent?name_like=${event.target.value}`, function(data, status){
    //             // lay du lieu xong thi lam gi -> in danh sach học viên vào bảng
    //             data.forEach(item => {
    //                 $('#body-data').append(`
    //                     <tr>
    //                     <td>${item.name}</td>
    //                     <td>${item.age}</td>
    //                     <td>${item.email}</td>
    //                     <td>${item.description}</td>
    //                 </tr>
    //                 `)
    //             });
    //         });
    //     }
    // })

    const reUpdateDom = () => {
        $.get(`http://localhost:3000/listStudent`, function (data, status) {
            // lay du lieu xong thi lam gi -> in danh sach học viên vào bảng

            let newDowmString = ''

            data.forEach(item => {
                newDowmString = newDowmString + `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.age}</td>
                            <td>${item.email}</td>
                            <td>${item.description}</td>
                            <td class="data-delete" data-id="${item.id}"><i class="far fa-trash-alt"></i></td>
                            <td class="data-update" data-id="${item.id}">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#updateModal-${item.id}">
                                    <i class="fas fa-pen"></i>
                                </button>
                                
                                <div class="modal fade" id="updateModal-${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                        <div class="modal-body">

                                        <div>
                                            <label for="">name</label>
                                            <input autocomplete="" id="field-name-${item.id}" type="text" value="${item.name}">
                                        </div>
                                        <div>
                                            <label for="">age</label>
                                            <input id="field-age-${item.id}" type="text" value="${item.age}">
                                        </div>
                                        <div>
                                            <label for="">email</label>
                                            <input id="field-email-${item.id}" type="text" value="${item.email}">
                                        </div>
                                        <div>
                                            <label for="">description</label>
                                            <input id="field-description-${item.id}" type="text" value="${item.description}">
                                        </div>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button id="onUpdate" type="button" class="btn btn-primary" data-id="${item.id}">Save</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            
                                
                            </td>
                        </tr>
                     `
            })



            let wrapBodyData = `<tbody id="body-data"> ${newDowmString} </tbody>`
            $("#body-data").replaceWith(wrapBodyData);
            listenClick()
            listenUpdateClick()
        })
    }

    const listenClick = () => {
        $(".data-delete").click(function (event) {
            let {id} = event.currentTarget.dataset
            $.ajax({
                url: `http://localhost:3000/listStudent/${id}`,
                type: 'DELETE',
                success: function (result) {
                    // Do something with the result
                    // replaceWith lai body data
                    reUpdateDom()

                }
            });
        })
    }

    let totalItem = 35

    let perPage = 10



    $.get(`http://localhost:3000/listStudent`, function (data, status) {
        // lay du lieu xong thi lam gi -> in danh sach học viên vào bảng
        data.forEach(item => {
            $('#body-data').append(`
                        <tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.email}</td>
                        <td>${item.description}</td>
                        <td class="data-delete" data-id="${item.id}"><i class="far fa-trash-alt"></i></td>
                        <td class="data-update" data-id="${item.id}">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#updateModal-${item.id}">
                                <i class="fas fa-pen"></i>
                            </button>
                            
                            <div class="modal fade" id="updateModal-${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">

                                    <div>
                                        <label for="">name</label>
                                        <input autocomplete="" id="field-name-${item.id}" type="text" value="${item.name}">
                                    </div>
                                    <div>
                                        <label for="">age</label>
                                        <input id="field-age-${item.id}" type="text" value="${item.age}">
                                    </div>
                                    <div>
                                        <label for="">email</label>
                                        <input id="field-email-${item.id}" type="text" value="${item.email}">
                                    </div>
                                    <div>
                                        <label for="">description</label>
                                        <input id="field-description-${item.id}" type="text" value="${item.description}">
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button id="onUpdate" type="button" class="btn btn-primary" data-id="${item.id}">Save</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                            
                        </td>
                    </tr>
                    `)
        });

        listenClick()
        listenUpdateClick()


    });


    $(".page-item").click(function(event){
        let page = event.target.innerText
        reUpdateDom({
            page: page,
            key: key,
            limit: 2
        })
    })

    const listenUpdateClick = () => {
        
    $('#onUpdate').click(function (event) {
        let {id} = event.currentTarget.dataset
        // lay data cua 3 field
        let name = $(`#field-name-${id}`).val()
        let age = $(`#field-age-${id}`).val()
        let email = $(`#field-email-${id}`).val()
        let description = $(`#field-description-${id}`).val()

        $.ajax({
            type: "PUT",
            url: `http://localhost:3000/listStudent/${id}`,
            data: {
                name,
                age,
                email,
                description,
            },
            success: function (result) {
                $('#exampleModal').modal('toggle')
                reUpdateDom()
            }
        });

    })}

    $('#onAdd').click(function () {
        // lay data cua 3 field
        let name = $('#field-name').val()
        let age = $('#field-age').val()
        let email = $('#field-email').val()
        let description = $('#field-description').val()

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/listStudent",
            data: {
                name,
                age,
                email,
                description,
            },
            success: function (result) {
                $('#exampleModal').modal('toggle')
                reUpdateDom()
            }
        });
    })



});


