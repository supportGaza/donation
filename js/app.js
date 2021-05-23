'use strict'
// 3

const PCash = function (item, items) {  //  main constructure
  this.item = item;
  this.items = items;
}


// Function for Cash local storage
PCash.prototype.getData = function (name, phone, email, address, card, cash, check) {


  this.item = new Call(name, phone, email, address, card, cash, check);
  //   console.log(Call.cashDataArray);

  let CPrivate = JSON.stringify(Call.cashDataArray); // cash
  localStorage.setItem("CPrivate", CPrivate);
};



//  Function  for  Stuff  local  storage 
PCash.prototype.getDataStuff = function (name, phone, email, address, card, cash, check) {
  this.items = new CallStuff(name, phone, email, address, card, cash, check);
  //   console.log(Call.cashDataArray);

  let SPrivate = JSON.stringify(CallStuff.cashDataArrayStuff); // Stuff
  localStorage.setItem("SPrivate", SPrivate);
};


//  Cash  Constructure
const Call = function (name, phone, email, address, card, cash, check) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.address = address;
  this.card = card;
  this.cash = cash;
  this.check = check;

  Call.cashDataArray.push(this);
}

Call.cashDataArray = [];



//   Stuff  Constructure
const CallStuff = function (name, phone, email, address, card, cash, check) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.address = address;
  this.card = card;
  this.cash = cash;
  this.check = check;

  CallStuff.cashDataArrayStuff.push(this);
}

CallStuff.cashDataArrayStuff = [];

