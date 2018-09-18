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


function receivedItem(item) {
    let items = [];
    items.push(item);
    console.log(items.length)
};
    
orderSupplies('paint', receivedItem);
orderSupplies('brush', receivedItem);



