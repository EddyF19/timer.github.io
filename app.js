
// Short alias for document.querySelector
const $ = document.querySelector.bind(document);

// Variables para botones
const startStopBtn = $('#startStopBtn');
const resetBtn = $('#resetBtn');

// Variables para el time values

let seconds = 0;
let minutes = 0;
let hours = 0;

let resetSeconds = 0;
let resetMinutes = 0;
let resetHours = 0;

// Varibles para set interval and timerstatus

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch Function

function stopWatch()
{
    seconds++

    if(seconds / 60 === 1)
    {
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1)
        {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        resetSeconds = "0" + seconds.toString();
    }
    else    {
        resetSeconds = seconds;
    }

    if(minutes < 10){
        resetMinutes = "0" + minutes.toString();
    }
    else    {
        resetMinutes = minutes;
    }

    if(hours < 10){
        resetHours = "0" + hours.toString();
    }
    else    {
        resetHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = `${resetHours} : ${resetMinutes} : ${resetSeconds}`;

}



startStopBtn.addEventListener('click', function(){
   
    if(timerStatus === 'stopped')
    {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"> </i>`;
        timerStatus = 'started';
    }
    else
    {
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = 'stopped';
    }

});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = `00:00:00`;
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
})