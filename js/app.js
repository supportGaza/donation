'use strict'

function PCash(item){
    this.item = item;
}

PCash.prototype.getData = function (name,phone,email,address,card,cash,check){
  this.item = new Call(name,phone,email,address,card,cash,check);
  console.log(Call.cashDataArray);
};

function Call(name,phone,email,address,card,cash,check){
    this.name=name;
    this.phone=phone;
    this.email=email;
    this.address=address;
    this.card=card;
    this.cash=cash;
    this.check=check;

    Call.cashDataArray.push(this);
}

Call.cashDataArray = []; 