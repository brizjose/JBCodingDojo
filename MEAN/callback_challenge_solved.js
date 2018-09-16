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
    console.log(`received the ${item.product}, time to ${item.directions}`)
};

//order paint
    
let havePaint = false;
orderSupplies('paint', function(item){
    receivedItem(item)
    havePaint = true;
});

//order brush

orderSupplies('brush', handleBrush);

//ensure print paint directions before brush directions

function handleBrush(item) {
    if (havePaint) {
        return receivedItem(item)
    }
    setTimeout(handleBrush,50,item);
};

