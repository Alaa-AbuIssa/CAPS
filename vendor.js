'use strict';

const events=require('./event');
require('dotenv').config();
const faker=require('faker');
const uuid=require('uuid').v4;

setInterval(function(){
    let payload={
        store:process.env.STORE,
        orderID:uuid(),
        customer:faker.name.findName(),
        adress:faker.address.streetAddress()
    }
    events.emit('pickUp',payload)
},5000);

events.on('delivered', deliveredHandler);
function deliveredHandler(payload) {
    console.log('Finally!!');
};