function orderSupplies(item, callback) {
    let warehouse;
    const deliveryTime = Math.random() * 3000;

    setTimeout(() => {
        warehouse = {
            paint: {
                product: 'Neon green paint',
                directions: () => {return 'mix it'}
            },
            brush: {
                product: 'Horsehair brush',
                directions: () => {return 'start painting!'}
            },
            tarp: {
                product: 'Plastic tarp',
                directions: () => {return 'cover the floor'}
            }
        };

        callback(warehouse[item]);
        
    }, deliveryTime);
};


function receivedItem(item) {
    console.log(`received the ${item.product}, time to ${item.directions()}`)
};


const tarp = new Promise(function(resolve,reject) {
    // console.log(resolve,reject);  
    orderSupplies('tarp', resolve);
});
const paint = new Promise(function(resolve,reject) {
    // console.log(resolve,reject);  
    orderSupplies('paint', resolve);
});
const brush = new Promise(function(resolve,reject) {
    // console.log(resolve,reject);  
    orderSupplies('brush', resolve);
});

tarp.then((item) => {
    receivedItem(item);
    return paint
})
.then((item) => {
    receivedItem(item);
    return brush
})
.then((item) => {
    receivedItem(item);
});



