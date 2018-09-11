function orderSupplies(item, callback) {
    let warehouse;
    const deliveryTime = Math.random() * 3000;

    setTimeout(() => {
        warehouse = {
            paint: {
                product: 'Neon green paint',
                directions: () => { return 'mix it'}
            },
            brush: {
                product: 'Horsehair brush',
                directions: () => { return 'start painting!' }
            }
        };

        callback(warehouse[item]);
        
    }, deliveryTime);
};


function receivedItem(item, callback) {
    const items = [];
    if (item.product === "Horsehair brush") {
        items.push(item);

    } else {
        items.unshift(item);
    };
    console.log(items)
    // printAction(items[0],items[1])
};

// function printAction(item1, item2) {
//     console.log(`Received ${ item1.product }, time to ${ item1.directions( )}`);
//     console.log(`Received ${ item2.product }, time to ${ item2.directions( )}`);
// };
orderSupplies('paint', receivedItem);
orderSupplies('brush', receivedItem);

