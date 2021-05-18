$(function () {
    let arrQuestion = [
        {
            ques: '1+1=?',

            listAnser : [

                {
                    title: '1',
                    isCorrect : 0
                },
                {
                    title: '2',
                    isCorrect : 1
                },
                {
                    title: '3',
                    isCorrect : 0
                },
                {
                    title: '4',
                    isCorrect : 0
                },
            ]
        },
        {
            ques: '1+2=?',

            listAnser : [

                {
                    title: '1',
                    isCorrect : 0
                },
                {
                    title: '2',
                    isCorrect : 0
                },
                {
                    title: '3',
                    isCorrect : 1
                },
                {
                    title: '4',
                    isCorrect : 0
                },
            ]
        },
        {
            ques: '1+3=?',

            listAnser : [

                {
                    title: '1',
                    isCorrect : 0
                },
                {
                    title: '2',
                    isCorrect : 0
                },
                {
                    title: '3',
                    isCorrect : 0
                },
                {
                    title: '4',
                    isCorrect : 1   
                },
            ]
        }
    ]

    let arrCheck= []


    let indexQNow = 0;
    

    function createQuestion (indexNumber) {
        let stringDomAnser = ''
    anserListNow = arrQuestion[indexNumber].listAnser
    for( i=0; i<=anserListNow.length -1; i++){
        stringDomAnser +=  `<button onclick="onClickFunction(this)" value=${anserListNow[i].isCorrect} class="button-check" >${anserListNow[i].title}</button>`
    }
    return `
    <div class="wrap-ques">
        <p id="question">${arrQuestion[indexNumber].ques}</p>
        <div id="buttonBox">

            ${stringDomAnser}


        </div>
    </div>
    
    `}

    
    
    $('#container').append(createQuestion(indexQNow))   

    
    function onClickFunction (item) {

    
       
        // lay value cua button
        
        arrCheck.push(item.value)

        if(arrCheck.length < arrQuestion.length){

            indexQNow ++

            $('.wrap-ques').replaceWith(createQuestion(indexQNow))

        } else{

            //check chuyen trang

            let count = 0;
            for( i=0; i<arrCheck.length - 1; i++) {
                if(arrCheck[i] ==1) {
                    count ++
                }
            }
            
            if(count === arrQuestion.length) {
                // chuyen sang trang chuc mung
                window.location.href("https://chat.zalo.me/");
            } else  {
                //hoi xem muon choi lai ko
                alert(`ban da tra loi dung ${count} cau. ban co muon choi lai khong`)
                window.location.reload();
            }
        }



        

    };



});