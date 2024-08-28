const timer = document.querySelector('.timer')
const btnStart = document.querySelector('.btn-start')

let time = null
let hours = 0
let minutes = 0
let seconds = 0


function stopWatch(){
    seconds++
    if(seconds == 60){
        seconds = 0
        minutes++
        if(minutes == 60){
            minutes = 0
            hours++
        }
    }
    let h = hours < 10? '0' + hours: hours
    let m = minutes < 10? '0' + minutes: minutes
    let s = seconds < 10? '0' + seconds: seconds

    document.querySelector('.timer').innerHTML = h + ':' +  m + ':' +  s
}

function watchStart(){
    if(time !== null){
        clearInterval(time)
    }
    time = setInterval(stopWatch, 1000)
}

function watchStop(){
    clearInterval(time)
}
function watchReset(){
    clearInterval(time)
    time = null
    hours = 0
    minutes = 0
    seconds = 0
    document.querySelector('.timer').innerHTML = '00:00:00'
}

