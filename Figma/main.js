$(document).ready(function () {


    var story_img_height = $(".story-image img").height();
        $(".story-left").height(story_img_height);

    $(window).on('resize', function () {
        var story_img_height = $(".story-image img").height();
        $(".story-left").height(story_img_height);
    });


    /* buoc 1 get data  tu json sever o day*/

    $.get( "http://localhost:3000/album", function( data ) {
        //lay data xong thi xem co thanh cong ko
        // khong thanh cong thi dung code lai

        if(data && data.length>0){
            // neu thanh cong thi update data vao DOM
            let album = $(".album-js")

            data.forEach(item => {
                album.append(
                    `   
                        <div class="col-md-4 album-item">
                            <div class="album-img">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="album-title">${item.title}</div>
                        </div>
                    `
                )
            });

        }
      });


      $.get( "http://localhost:3000/dress", function( data ) {
        //lay data xong thi xem co thanh cong ko
        // khong thanh cong thi dung code lai

        if(data && data.length>0){
            // neu thanh cong thi update data vao DOM
            let album = $(".dress-js")

            data.forEach(item => {
                album.append(
                    `
                        <div class="col-md-3 dress-item">
                            <img src="${item.img}" alt="">
                            <div class="dress-item-title">
                                <p>${item.title}</p>
                                <div class="dress-item-content">
                                    ${item.content}
                                </div>
                            </div>
                        </div>
                    `
                )
            });

        }
      });



});