'use strict';

const pCach = new PCash([]); // calling the instruction

render();

//  global variables 
let num = 6; // number of inputs
let btnSave = document.getElementById('btnSave');
let inputData;
let checkUser = document.getElementById("labelBox");
let btnCash = document.getElementById('cash');
let btnStuff = document.getElementById('stuff');

let arrayTest = [];

let formEl = document.getElementById('form');

let cashNameArray = ['name', 'phone', 'email', 'Current Address', 'Card Inforomation', 'Money'];
let stuffNameArray = ['name', 'phone', 'email', 'Current Address', 'Pick up address', 'Stuff details'];

btnCash.addEventListener('click', createCash);
btnStuff.addEventListener('click', createStuff);



function createCash(event) { // Create function for cash

    event.preventDefault();


    // remove old View
    let sec1 = document.getElementById("sec1");
    let sec2 = document.getElementById("sec2");

    sec1.remove();
    sec2.remove();
    ///////////////////////


    let sectionEl = document.createElement('section');
    sectionEl.id = "sec1";

    formEl.appendChild(sectionEl);
    // create Ul 
    let ulElRight = document.createElement('ul');
    let ulElLeft = document.createElement('ul');
    // create  Section

    sectionEl.appendChild(ulElLeft);
    sectionEl.appendChild(ulElRight);

    //  Create labels  for  section left

    for (let i = 0; i < num; i++) {  // labels
        let h2El = document.createElement('h2');
        h2El.id = `hLeft${i}`;
        ulElLeft.appendChild(h2El);

        h2El.textContent = cashNameArray[i];
    }

    for (let i = 0; i < num; i++) {  // Input  Text
        inputData = document.createElement('input');
        inputData.type = "text";
        inputData.id = `data${i}`;

        ulElRight.appendChild(inputData);

    }

    //  creat button to submit

    let sectionEl2 = document.createElement('section');
    sectionEl2.id = "sec2";
    formEl.appendChild(sectionEl2);

    // creat cheak box 
    checkUser = document.createElement('input');
    checkUser.type = 'checkbox';
    sectionEl2.appendChild(checkUser);
    checkUser.id = "labelBox";
    checkUser.name = "labelBox";



    let labelBox = document.createElement('h2');
    labelBox.id = 'label';
    sectionEl2.appendChild(labelBox);
    labelBox.textContent = "Donate as Private";
    labelBox.id = "label";


    ///  button to save and submit
    btnSave = document.createElement('button');
    sectionEl2.appendChild(btnSave);


    btnSave.textContent = "Submit";
    btnSave.id = 'btnSave';
    //  call it from local storage

    btnSave.addEventListener("click", setData);


}


/////////////////////////////////////////////////////


function createStuff(event) { // Create function for Stuff

    event.preventDefault();


    // remove old View
    let sec1 = document.getElementById("sec1");
    let sec2 = document.getElementById("sec2");

    sec1.remove();
    sec2.remove();
    ///////////////////////


    let sectionEl = document.createElement('section');
    sectionEl.id = "sec1";

    formEl.appendChild(sectionEl);
    // create Ul 
    let ulElRight = document.createElement('ul');
    let ulElLeft = document.createElement('ul');
    // create  Section

    sectionEl.appendChild(ulElLeft);
    sectionEl.appendChild(ulElRight);

    //  Create labels  for  section left

    for (let i = 0; i < num; i++) {  // labels
        let h2El = document.createElement('h2');
        h2El.id = `hLeft${i}`;
        ulElLeft.appendChild(h2El);

        h2El.textContent = stuffNameArray[i];
    }

    for (let i = 0; i < num; i++) {  // Input  Text
        inputData = document.createElement('input');
        inputData.type = "text";
        inputData.id = `data${i}`;

        ulElRight.appendChild(inputData);

    }

    //  creat button to submit

    let sectionEl2 = document.createElement('section');
    sectionEl2.id = "sec2";
    formEl.appendChild(sectionEl2);

    // creat cheak box 
    checkUser = document.createElement('input');
    checkUser.type = 'checkbox';
    sectionEl2.appendChild(checkUser);
    checkUser.id = "labelBox";
    checkUser.name = "labelBox";



    let labelBox = document.createElement('h2');
    labelBox.id = 'label';
    sectionEl2.appendChild(labelBox);
    labelBox.textContent = "Donate as Private";
    labelBox.id = "label";


    ///  button to save and submit
    btnSave = document.createElement('button');
    sectionEl2.appendChild(btnSave);


    btnSave.textContent = "Submit";
    btnSave.id = 'btnSave';
    //  call it from local storage

    btnSave.addEventListener("click", setDataStuff);


}


/////////////////////////////////////////////////////
btnSave.addEventListener("click", setData);

function setData(event) {
    event.preventDefault();

    let nameUser = document.getElementById('data0'),
        phoneUser = document.getElementById('data1'),
        emailUser = document.getElementById('data2'),
        addressUser = document.getElementById('data3'),
        cardUser = document.getElementById('data4'),
        cashUser = document.getElementById('data5');

    checkUser = document.getElementById('labelBox');

    // console.log(checkUser);
    // let a = event.target.labelBox.checked;

    pCach.getData(nameUser.value, phoneUser.value, emailUser.value, addressUser.value, cardUser.value, cashUser.value, checkUser.checked);



}

function setDataStuff(event){
    event.preventDefault();

    let nameUser = document.getElementById('data0'),
        phoneUser = document.getElementById('data1'),
        emailUser = document.getElementById('data2'),
        addressUser = document.getElementById('data3'),
        cardUser = document.getElementById('data4'),
        cashUser = document.getElementById('data5');

    checkUser = document.getElementById('labelBox');

    // console.log(checkUser);
    // let a = event.target.labelBox.checked;

    
    pCach.getDataStuff(nameUser.value, phoneUser.value, emailUser.value, addressUser.value, cardUser.value, cashUser.value, checkUser.checked);

    

}


function render(){
    let CPrivate = JSON.parse(localStorage.getItem("CPrivate"));
    if(CPrivate !== null || CPrivate !== undefined){
        Call.cashDataArray = CPrivate;
    }


    let SPrivate = JSON.parse(localStorage.getItem("SPrivate"));
    if(SPrivate !== null || SPrivate !== undefined){
        CallStuff.cashDataArrayStuff = SPrivate;
    }
}
