'use strict'

let num = 6;

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
    let inputData = document.createElement('input');
    inputData.type = "text";
    inputData.id = `data${i}`;
    
    ulElRight.appendChild(inputData);

}

    let sectionEl2 = document.createElement('section');
}

function createStuff(event){
    event.preventDefault();
    
    
}

