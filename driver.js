'use strict';

// require the events

const events =require('./event');

//events on the pickup
events.on('pickup', pickupHandler);


function pickupHandler(payload) {
    setTimeout(function () {
        console.log(`picked up ${payload.orderID}`);
        events.emit('in-transit', payload);
    }, 1000);

    setTimeout(function () {
        console.log('delivered');
        events.emit('delivered', payload);
    }, 3000);
};
