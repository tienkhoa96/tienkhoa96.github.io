// // $(document).ready(function(){
// //     $('.card').click(function(){
// //         $(this).children('img').each(function () {
// //             if ($(this).hasClass('hidden')) {
// //                 $(this).removeClass('hidden');
// //             } else {
// //                 $(this).addClass('hidden');
// //             }
// //         });
// //     }); 
// // });


$(function() {
    // logic here
    
    
    
    
    let arrImages = [
        {
            frontImg: './image/1.jpg',
            backImg: './image/back.PNG',
            id: 1
        }, 
        {
            frontImg: './image/2.jpg',
            backImg: './image/back.PNG',
            id: 2
        }, 
     
        {
            frontImg: './image/3.jpg',
            backImg: './image/back.PNG',
            id: 13
        }
        
         
    ];
    
    let newImages = arrImages.concat(arrImages);
    
    
    
    let checkId = [];
    
    for(i=0; i<=newImages.length-1; i++) {
        $("#main").append(`
        <div class="scene">
        <div class="card" data-id="${newImages[i].id}" stt="${i}"" >
            <div class="card-face card-face-front hidden" >
                <img src="${newImages[i].frontImg}"  alt="">
            </div>
            <div class="card-face card-face-back" >
                <img src="${newImages[i].backImg}"  alt="">
            </div>
        </div>
        </div>
        `
      );
    } 
    
    
    let checkId2 = []
    
    
    
    
    
    $('.card').each( function(index, item){
            item.addEventListener( 'click', function() {

                item.classList.toggle('is-flipped');
                
                let id = item.getAttribute('data-id')
    
                if(id == checkId2[0]){
                    return;
                }   else{
                    checkId2.push(i);
                    checkId2 = [  ]
                }
    
     
    
                
                
                
            
                
                checkId.push(id);
    
                console.log('id', checkId)
                console.log('id2', checkId2)
    
    
                
                if(checkId.length === 2) {
                    if(checkId[0] === checkId[1]) {
                        // display none 2 the di
                        setTimeout(function() {
                            $(`[data-id=${checkId[0]}]`)[0].style.opacity = '0'
                            $(`[data-id=${checkId[1]}]`)[1].style.opacity = '0' 
                            checkId = [] 
                        }, 1000);
            
                    } else {
            
                        setTimeout(function() {
                            $(`[data-id=${checkId[0]}]`).removeClass('is-flipped')
                            $(`[data-id=${checkId[1]}]`).removeClass('is-flipped')
                            checkId = []
                        }, 1000);
                    }
                }
            });
    
        //your code here
    
       }
    );
    
    
    
    
    });