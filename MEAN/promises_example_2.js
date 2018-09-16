function orderSupplies(item) {
    let warehouse;
    const deliveryTime = Math.random() * 3000;

    return new Promise((resolve,reject) => {
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
            console.log('item ready: ',item)
            if (item in warehouse) {
                resolve(warehouse[item]);
            } else {
                reject(new Error(`${item} is out of stock`));
            };
        }, deliveryTime);    
    });
};


function receivedItem(item) {
    console.log(`Received the ${item.product}, time to ${item.directions()}`)
};

const tarp = orderSupplies('tarp');
const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const roller = orderSupplies('roller').catch((error) => {console.log(error.message)});

// tarp.then((item) => {
//     receivedItem(item); 
//     return paint;
// })
// .then((item) => {
//     receivedItem(item);
//     return brush;
// })
// .then((item) => {
//     receivedItem(item);
//     return roller;
// })
// .then((item) => {
//     receivedItem(item);
// });

Promise.all([tarp,paint,brush,roller]).then((items) => {
    items.forEach(receivedItem);
});

