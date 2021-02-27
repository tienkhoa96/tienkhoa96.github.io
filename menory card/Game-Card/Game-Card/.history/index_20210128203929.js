$(function() {
// logic here

let arrImages = [
    {
        frontImg: 'https://robinhuy.github.io/memory-card/img/f1.jpg',
        backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg',
        id: 1
    },
    {
        frontImg: 'https://robinhuy.github.io/memory-card/img/f2.jpg',
        backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg',
        id: 2
    },
    {
        frontImg: 'https://robinhuy.github.io/memory-card/img/f3.jpg',
        backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg',
        id: 3
    },
    {
        frontImg: 'https://robinhuy.github.io/memory-card/img/f4.jpg',
        backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg',
        id: 4,
    },
    {
        frontImg: 'https://robinhuy.github.io/memory-card/img/f5.jpg',
        backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg',
        id: 5
    },
    {
        frontImg: 'https://robinhuy.github.io/memory-card/img/f6.jpg',
        backImage: 'https://robinhuy.github.io/memory-card/img/back.jpg',
        id: 6
    }
]

let newImages = arrImages.concat(arrImages)







for(i=0; i<=newImages.length-1; i++) {
    $("#main").append(`
    
    <div class="card" data-id="${newImages[i].id}">
    <div class="card__face card__face--back">
        <img src="${newImages[i].frontImg}" alt="">
    </div>
    <div class="card__face card__face--front">
    <img src="${newImages[i].backImage}" alt="">
    </div>
  </div>`);
}



// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });

$('.card').each( function(index, item){

    item.addEventListener( 'click', function() {
    item.classList.toggle('is-flipped');

    console.log('item', item)
});

    //your code here

   }
);


});


