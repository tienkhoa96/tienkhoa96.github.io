function getDay(){
    var day = new Date().getDay() 
    var a = day == 1 ? "MO" : day == 2 ? "TU" : day == 3 ? "WE" : day == 4 ? "TH" : day == 5 ? "FR" : day == 6 ? "SA" : "SU"
    document.getElementsByClassName("day")[0].innerHTML = "Hôm nay là thứ " + a
}

getDay()

function getDateAgo(date, days){
    var dateAgo = date.getDate() - days
    var a = new Date().setDate(dateAgo)
    var dateAgoNew = new Date(a).getDate()
    document.getElementsByClassName("dateAgo")[0].innerHTML = "Hôm nay là ngày " + dateAgoNew
}

getDateAgo(new Date(), 23)

function getLastDayOfMonth(a, month){
    var newDate = new Date(a.getFullYear(),a.getMonth()+1, a.getDate())
    var lastDay = new Date(newDate.setDate(month)).getDate()
    document.getElementsByClassName("lastDay")[0].innerHTML = "Ngày " + lastDay + " là ngày cuối tháng này"
}

getLastDayOfMonth(new Date(), 0)


function getSecondsToTomorrow(){
    var a = new Date()
    var b = new Date(a.getFullYear(),a.getMonth(), a.getDate()+1)
    var secondsToTomorrow = (b-a)/1000
    document.getElementsByClassName("secondsToTomorow")[0].innerHTML = "Còn " + secondsToTomorrow + " giây là đến ngày mai"
}
getSecondsToTomorrow()


function fomatDate(data){

    var now = data
    var ago = new Date()

    var fomatDate = document.getElementsByClassName("fomatDate")[0]
    if(ago.getSeconds() - now.getSeconds() > 0 && now.getMinutes() == ago.getMinutes()){
        fomatDate.innerHTML = "Ngay bây giờ"
    } else if(ago.getMinutes() - now.getMinutes() > 0 && now.getHours() == ago.getHours()){
        fomatDate.innerHTML = ago.getMinutes() - now.getMinutes()  +" phút trước"
    } else if(ago.getHours() - now.getHours() > 0 && now.getDay() == ago.getDay()){
        
        var hour = ago.getHours()
        console.log(hour)
        fomatDate.innerHTML = `${ago.getHours() - now.getHours()} giờ trước`
        
    // } else if(ago.getDay() - now.getDay() > 0){
    //     var a = ago.getDay() - now.getDay() > 0
    //     console.log(a)
    //     fomatDate.innerHTML = `${now.getFullYear()}:${now.getMonth()}:${now.getDay()} ${now.getHours()}:${now.getMinutes()}`
    // }

}}

fomatDate(new Date("03/22/2021 19:18:30"))