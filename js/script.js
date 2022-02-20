// altijd verplicht bijzetten 
"use strict";


//const declaratie en initialisatie
const date = new Date();
// let strTime;
let hours,minutes,seconds;

let btnShow;

let divUur;
let divMinuut;
let divSecond;


//wait for document load
window.addEventListener('load',Initialize);

function Initialize(){
   
    
    btnShow = document.getElementById("show");

    divUur = document.getElementById("uur")
    divMinuut = document.getElementById("minuut")
    divSecond = document.getElementById("second")


    
    
    //get hours, minutes and seconds
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();



    // strTime = `Het is nu ${hours} uur, ${minutes} minuten en ${seconds}`;

    btnShow.addEventListener('click', displayHours)
    btnShow.addEventListener('click', displayMinutes)
    btnShow.addEventListener('click', displaySeconds)


}

function displaySeconds(){
    console.log(seconds);
    divSecond.className ="feedback3";
    divSecond.textContent = `${seconds}`
}
function displayHours(){
    
    console.log(hours);
    divUur.className ="feedback";
    divUur.textContent = `${hours}:`
}

function displayMinutes(){
    console.log(minutes);
    divMinuut.className ="feedback2";
    divMinuut.textContent = `${minutes}:`
}

