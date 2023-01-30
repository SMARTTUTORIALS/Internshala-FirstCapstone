
function increaseQuantity(inputID) {
    const inputItem = document.getElementById(inputID);
    if (inputItem.value < 10) {
        inputItem.value = parseInt(inputItem.value) + 1;
        changePrice();
    }
}

function decreaseQuantity(inputID){
    const inputItem = document.getElementById(inputID);
    if (inputItem.value > 1) {
        inputItem.value = inputItem.value - 1;
        changePrice();
    } 
}

function changePrice(){
    const itemPrices = document.querySelectorAll(".item-price");
    const price = document.getElementById("summary-price");
    const shipping = document.getElementById("summary-shipping");
    const total = document.getElementById("summary-total");

    let itemPriceList = [];

    itemPrices.forEach(element => {
       itemPriceList.push( parseFloat(element.innerHTML.replaceAll(',', '') ) );
    });

    for (let index in itemPriceList) {
        
        index = parseInt(index) + 1;
        //console.log(index);
        
        itemPriceList[index-1] *= parseInt(document.getElementById("item" + index + "-count-input").value);
        
        //console.log("item" + index + "-count-input");
    }

    
    //console.log(itemPriceList);

    let totalPrice = 0;
    let grandTotal = 0;
    let shippingPrice = parseFloat( shipping.innerHTML );

    itemPriceList.forEach(element => {
        totalPrice += element;    
    });

    grandTotal = totalPrice + shippingPrice;

    price.innerHTML = totalPrice;
    shipping.innerHTML = shippingPrice;
    total.innerHTML = grandTotal;

    /*
    console.log("Total price = "+totalPrice);
    console.log("Shipping price = "+shippingPrice);
    console.log("Grand price = "+grandTotal);
    */
}