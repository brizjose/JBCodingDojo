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
            },
            tarp: {
                product: 'Plastic tarp',
                directions: () => { return 'cover the floor' }
            }
        };

        callback(warehouse[item]);
        
    }, deliveryTime);
};


function receivedItem(item) {
    console.log(`received the ${item.product}, time to ${item.directions}`)
};


// now we have 3 products, so previous solution would be too complicated

// step one, create array with products in the order you want to print back

const items = ['tarp','paint','brush'];

function orders(items) {
    
    // we order items one by one by following the items list in order
    
    const received = [];
    for (let index = 0; index < items.length; index++) {
        const item = items[index];

        //because 'let index' follows 0,1,2 through tarp,paint,brush, we'll order the supply by item.product and place it in the right spot within the received array.

        orderSupplies(item, function(product) {
            received[index] = product;

            console.log('got product', index);

            //a problem with the above is that received.length is always 3 because by the time we get the products back, it already looped through the whole items array.  so a length comparison like the below would always show truty.

            //what .filter will do is build a new temporary array of things that meet the criteria in its arguments.  It will only pass those objects that are truthy and discard the falsy.
            //that way we can compare the length of this new filtered array with the items array.    

            //then, what forEach does is loop over an array and this is how we can print items and instructions one by one
            if (received.filter(p => p).length === items.length) {
                received.forEach(receivedItem);
            }
        });
    }
}

orders(items);