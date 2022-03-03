"use strict";

const keyCoding = "abcdefghijklmnopqrstuvwxyz,.! ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const example = "Dit is een geheime boodschap. Zorg via de code dat deze wordt omgezet naar geheimtaal!"
let btnCode, btnDecode,txaTextArea, btnSample;
let inputLength;
let newIndexPosition;
let newNegativeIndexPosition;
let input;
let newLetter;
let newWord;

window.addEventListener('load', initialize);

function initialize() {
    bindElements();
    addEvents();

}
function bindElements() {
    btnCode=document.getElementById("codeer");
    btnCode.className="btn-yellow";

    btnDecode=document.getElementById("decodeer");
    btnDecode.className="btn-pink";

    btnSample=document.getElementById("sample");
    btnSample.className="btn-green";

    txaTextArea=document.getElementById("textarea");

  
}
function addEvents() {
    btnCode.addEventListener("click",code);
    btnDecode.addEventListener("click",decode);
    btnSample.addEventListener("click",sample);
    txaTextArea.addEventListener("dblclick",deleteCode);
}
function code() {
    readInput();
    let singleCharacterOfInput;
    newWord="";

    for ( let i=0; i<inputLength; i++) {
        
        singleCharacterOfInput = input.charAt(i);
        let positionOfCharacterInKey;
        positionOfCharacterInKey=keyCoding.indexOf(singleCharacterOfInput);
        newIndexPosition = positionOfCharacterInKey + i + 1;   

            while(newIndexPosition >= 56){
            newIndexPosition -= 56;
            }

        newLetter =keyCoding.charAt(newIndexPosition);
        makeNewWord();
    }

    displayNewWord(); 

}
function decode() {
    readInput();
    let singleCharacterOfInput;
    newWord="";

    for ( let i=0; i<inputLength; i++) {
        
        singleCharacterOfInput = input.charAt(i);
        let positionOfCharacterInKey;
        positionOfCharacterInKey=keyCoding.indexOf(singleCharacterOfInput);
        newIndexPosition = positionOfCharacterInKey - i + 55;
        while(newIndexPosition >= 56){
                newIndexPosition -= 56;
        }
        newLetter =keyCoding.charAt(newIndexPosition);
        makeNewWord();
    }

    displayNewWord();    
      
}
function sample(){
    txaTextArea.value="";
    txaTextArea.value=example;
}
function makeNewWord() {
    newWord += newLetter;
}
function displayNewWord() {
    txaTextArea.value="";
    txaTextArea.value=newWord;
}
function readInput() {
    input = txaTextArea.value;
    inputLength = input.length;
}
function deleteCode() {
    txaTextArea.value="";
}


 