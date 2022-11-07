"use strict";
let containerAbout = document.querySelector(".containerAbout");
let containerEduAndSkill = document.querySelector(".containerEduAndSkill");
let containerGallery = document.querySelector(".containerGallery");
let containerGame = document.querySelector(".containerGame");
let containerContact = document.querySelector(".containerContact");


function formValidation(formId) {
    let f = document.getElementById(formId);
    let valInput = f['name'].value;
    if (!(/^[A-Za-z ]+$/.test(valInput))) {
        alert("The 'Name' field should contain letters and spaces only!");
        return false;
    }
    valInput = f['email'].value;
    if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valInput))) {
        alert("The 'Email' field should contain a real email!");
        return false;
    }
    valInput = f['Phone'].value;
    if (!(/^[0-9]{9,10}/.test(valInput))) {
        alert("The 'Phone' field should contain numbers only in length 9-10");
        return false;
    }
    return true;
}

function showMain() {
    containerAbout.style.display = 'inline-flex';
    containerEduAndSkill.style.display = 'block';
    containerGallery.style.display = 'none';
    containerGame.style.display = 'none';
    containerContact.style.display = 'block';
}

function showGallery() {
    containerAbout.style.display = 'none';
    containerEduAndSkill.style.display = 'none';
    containerGallery.style.display = 'block';
    containerGame.style.display = 'none';
    containerContact.style.display = 'none';
}

function showGame() {
    containerAbout.style.display = 'none';
    containerEduAndSkill.style.display = 'none';
    containerGallery.style.display = 'none';
    containerGame.style.display = 'block';
    containerContact.style.display = 'none';
}