$(function() {
// logic here




let arrImages = [
    {
        frontImg: '/la-bai/image/1.jpg',
        backImg: '/la-bai/image/back.PNG',
        id: 1
    }, 
    // {
    //     frontImg: '../image/2.jpg',
    //     backImg: '../image/back.PNG',
    //     id: 2
    // }, 
 
    // {
    //     frontImg: '../image/13.PNG',
    //     backImg: '../image/back.PNG',
    //     id: 13
    // }
    
     
];

let newImages = arrImages.concat(arrImages);



let checkId = [];

for(i=0; i<=newImages.length-1; i++) {
    $("#main").append(`
    
    <div class="card" data-id="${newImages[i].id}" id="${i}"" >
    <div class="card__face card__face--back" >
        <img src="${newImages[i].frontImg}"  alt="">
    </div>
    <div class="card__face card__face--front" >
    <img src="${newImages[i].backImg}"  alt="">
    </div>
  </div>`);
} 


let checkId2 = []





$('.card').each( function(index, item){
        item.addEventListener( 'click', function() {

            if(item.getAttribute('data-id') == checkId2[0]){
                return;
            }   else{
                checkId2.push(item.getAttribute('data-id'));
                checkId2 = [  ]
            }

 

            
            
            item.classList.toggle('is-flipped');
        
            let id = item.getAttribute('data-id')
            checkId.push(id);

            console.log(checkId)
            console.log(checkId2)


            
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


