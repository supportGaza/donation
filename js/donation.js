'use strict'
const pCach = new PCash([]);

let num = 6;
let btnSave ;
let inputData;
let checkBox;
let btnCash = document.getElementById('cash');
let btnStuff = document.getElementById('stuff');

let formEl = document.getElementById('form');

let cashNameArray = ['name','phone','email','Current Address','Card Inforomation','Money'];

btnCash.addEventListener('click', createCash);
btnStuff.addEventListener('click', createStuff);

function createCash(event){ // Create function for cash
    event.preventDefault();
    
    let sectionEl = document.createElement('section');
    formEl.appendChild(sectionEl);
// create Ul 
    let ulElRight = document.createElement('ul');
    let ulElLeft = document.createElement('ul');
// create  Section
    
    sectionEl.appendChild(ulElLeft);
    sectionEl.appendChild(ulElRight);
    
   //  Create labels  for  section left

   for(let i=0;i<num;i++){  // labels
       let h2El = document.createElement('h2');
       h2El.id = `hLeft${i}`;
       ulElLeft.appendChild(h2El);

       h2El.textContent=cashNameArray[i];  
   }

   for(let i=0;i<num;i++){  // Input  Text
     inputData = document.createElement('input');
    inputData.type = "text";
    inputData.id = `data${i}`;
    
    ulElRight.appendChild(inputData);

}

//  creat button to submit
    let sectionEl2 = document.createElement('section');
    formEl.appendChild(sectionEl2);

     btnSave = document.createElement('button');
    sectionEl2.appendChild(btnSave);

    btnSave.type ="click";
    btnSave.textContent = "Submit"
    btnSave.id = 'btnSave';
    //  call it from local storage


// creat cheak box 

let labelBox = document.createElement('h2');
sectionEl2.appendChild(labelBox);
labelBox.textContent = "Private";
labelBox.id = "labelBox";

 checkBox = document.createElement('input');
checkBox.type = "checkBox"
sectionEl2.appendChild(checkBox);
checkBox.id = "checkBox";


}
btnSave.addEventListener("click",setData);

function setData (event){
    event.preventDefault();

    let nameUser = document.getElementById('data0'),
      phoneUser = document.getElementById('data1'),
      emailUser = document.getElementById('data2'),
      addressUser = document.getElementById('data3'),
      cardUser = document.getElementById('data4'),
      cashUser = document.getElementById('data5'),
      checkUser = document.getElementById('checkBox');

  
    pCach.getData(nameUser.value,phoneUser.value,emailUser.value,addressUser.value,cardUser.value,cashUser.value,checkUser.checked);

    
}
 

function createStuff(event){
    event.preventDefault();
    
    
}

