window.onload = function () {
    var calc_seconds = 00;
    var calc_miliseconds = 00;
    var seconds = document.getElementById("seconds");
    var miliseconds = document.getElementById("miliseconds");
    var buttonStart = document.getElementById("start-button");
    var buttonStop = document.getElementById("stop-button");
    var buttonReset = document.getElementById("reset-button");
    var interval;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer,10);
   }
   
   buttonStop.onclick = function(){
    clearInterval(interval);
   }

   buttonReset.onclick = function(){
    clearInterval(interval);
    calc_miliseconds = "00";
    calc_seconds = "00";
    miliseconds.innerHTML = calc_miliseconds;
    seconds.innerHTML = calc_seconds;
   }

   function startTimer(){
    calc_miliseconds++;

    if(calc_miliseconds <=9){
        miliseconds.innerHTML = "0" + calc_miliseconds;
    }

    if(calc_miliseconds > 9){
        miliseconds.innerHTML = calc_miliseconds;
    }

    if(calc_miliseconds > 99){
        console.log("seconds")
        calc_seconds++
        seconds.innerHTML = "0" + calc_seconds;
        calc_miliseconds = 0;
        miliseconds.innerHTML = 0;

    }

    if(calc_seconds > 9){
        seconds.innerHTML = calc_seconds;
    }
   }
}
