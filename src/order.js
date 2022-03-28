let deliveryOrders = [];

function  takeOrder (order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
} else {
  console.log(deliveryOrders)
}
}




function refundOrder (orderNumbers, deliveryOrders) {
  for (let i = 0; i < deliveryOrders.length; i++) {
    let currentOrderNumber = deliveryOrders[i];
    let listedOrderNumber = currentOrderNumber.orderNumber;
    if (listedOrderNumber == orderNumbers) {
      deliveryOrders = deliveryOrders.splice([i], 1)

      console.log("true")
    } else {
      console.log("false")
    }
  }
}


function listItems (orders) {
  let itemArray = [];
  let stringText
  for (let i = 0; i < orders.length; i++) {
  itemArray.push(orders[i].item);
  }
stringText = itemArray.join(', ');
return (stringText);
}

function listItemName (order) {
  return order.item
}

function searchOrder (order, itemName) {
  for (let i = 0; i < order.length; i++) {
  if (order[i].item == itemName) {
  console.log("true")
  return true;
} else {
  console.log("false");
  return false;
}
}
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}


//deliveryOrders.splice(what needs to be spliced)   deliveryOrders.splice(deliveryOrders.orderNumber[(order)])

//deliveryORders.splice()
