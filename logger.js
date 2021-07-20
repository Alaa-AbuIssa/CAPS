'use strict';

const events =require('./event');
//pickup
events.on('pickup',(payload)=>logIt('pickup',payload));
//in transit
events.on('inTransit',(payload)=>logIt('inTransit',payload));
//delivered
events.on('delivered',(payload)=>logIt('delivered',payload));

function logIt(event,payload){
    console.log('Event Log',{event,time:new Date().toLocaleString(),payload});
}
