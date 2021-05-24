'use strict';

const pCach = new PCash([]); // calling the instruction
// const test = new Call([]);

let totalCash = 0;
let totalSpan = document.getElementById('totalSpan');

let right = document.getElementById('right');
let ulElName = document.createElement('ul');
right.appendChild(ulElName);


render();

//  global variables 
let num = 6; // number of inputs
let btnSave = document.getElementById('btnSave');
let inputData;
let checkUser = document.getElementById("labelBox");
let btnCash = document.getElementById('cash');
let btnStuff = document.getElementById('stuff');

// let arrayTest = [];

let formEl = document.getElementById('form');

let cashNameArray = ['Name', 'Phone', 'Email', 'Current Address', 'Card Inforomation', 'Cash Money'];
let stuffNameArray = ['Name', 'Phone', 'Email', 'Current Address', 'Pick up address', 'Stuff details'];

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
    for (let i = 0; i < num; i++) {  // Input  Text
        inputData = document.createElement('input');
        inputData.type = "text";
        inputData.id = `data${i}`;

        ulElRight.appendChild(inputData);

    }
    let phone = document.getElementById('data1');
    let cashMoney = document.getElementById('data5');

    phone.type = 'number';
    cashMoney.type = 'number';

    for (let i = 0; i < num; i++) {  // labels
        let h2El = document.createElement('label');
        h2El.id = `hLeft${i}`;
        h2El.setAttribute("for", `data${i}`);
        ulElLeft.appendChild(h2El);

        h2El.textContent = cashNameArray[i];
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



    let labelBox = document.createElement('label');
    labelBox.id = 'label';
    sectionEl2.appendChild(labelBox);
    labelBox.setAttribute('for', "labelBox")
    labelBox.textContent = "Donate as Private";
    // labelBox.id = "label";


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

    for (let i = 0; i < num; i++) {  // Input  Text
        inputData = document.createElement('input');
        inputData.type = "text";
        inputData.id = `data${i}`;

        ulElRight.appendChild(inputData);

    }
    let phone = document.getElementById('data1');

    phone.type = 'number';

    for (let i = 0; i < num; i++) {  // labels
        let h2El = document.createElement('label');
        h2El.id = `hLeft${i}`;  // hLeft
        h2El.setAttribute("for", `data${i}`);
        ulElLeft.appendChild(h2El);

        h2El.textContent = stuffNameArray[i];
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



    let labelBox = document.createElement('label');
    labelBox.id = 'label';
    sectionEl2.appendChild(labelBox);
    labelBox.textContent = "Donate as Private";
    labelBox.setAttribute('for', "labelBox")
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
    if(nameUser.value == "" || phoneUser.value == "" || emailUser.value == "" || addressUser.value =="" || cardUser.value == "" || cashUser.value == ""){
        swal("Warning", "Please fill all feilds", "warning")
    }else{
        pCach.getData(nameUser.value, phoneUser.value, emailUser.value, addressUser.value, cardUser.value, cashUser.value, checkUser.checked);

    if (checkUser.checked !== true) {
        let liEl = document.createElement('li');
        ulElName.appendChild(liEl);
        liEl.textContent = nameUser.value;
    }

    totalCash = totalCash +parseInt(cashUser.value) ;
    totalSpan.textContent = `Total Cash Donated : ${totalCash}`;

    // console.log(totalCash);

    swal("Good Job", "Thanks for your Donate, We will contact you urgently", 'success')

    }

    

}

function setDataStuff(event) {
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

    if(nameUser.value == "" || phoneUser.value == "" || emailUser.value == "" || addressUser.value =="" || cardUser.value == "" || cashUser.value == ""){
        swal("Warning", "Please fill all feilds", "warning")
    }else{
        pCach.getDataStuff(nameUser.value, phoneUser.value, emailUser.value, addressUser.value, cardUser.value, cashUser.value, checkUser.checked);

        if (checkUser.checked !== true) {
            let liEl = document.createElement('li');
            ulElName.appendChild(liEl);
            liEl.textContent = nameUser.value;
        }

        swal("Good Job", "Thanks for your Donate, We will contact you urgently", 'success')

    }

    
    
}

function render() {
    let CPrivate = JSON.parse(localStorage.getItem("CPrivate"));

    if (CPrivate == null || CPrivate == undefined) {
        totalSpan.textContent = `Total Cash Donated : ${0}`;
    } else {
        Call.cashDataArray = CPrivate;
        for (let i = 0; i < CPrivate.length; i++) {
            if (CPrivate[i].check !== true) {
                let liEl = document.createElement('li');
                ulElName.appendChild(liEl);
                liEl.textContent = CPrivate[i].name;
            }
            totalCash = totalCash +parseInt(CPrivate[i].cash) ;
            totalSpan.textContent = `Total Cash Donated : ${totalCash}`;
        }

    }


    let SPrivate = JSON.parse(localStorage.getItem("SPrivate"));
    if (SPrivate == null || SPrivate == undefined) {
        let a;
    } else {
        CallStuff.cashDataArrayStuff = SPrivate;

        for(let i=0;i<SPrivate.length;i++){
            if(SPrivate[i].check !== true){
                let liEl = document.createElement('li');
                liEl.textContent = SPrivate[i].name;
                ulElName.appendChild(liEl);

            }
        }
    }
}


