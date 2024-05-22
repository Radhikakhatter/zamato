let totalprice = 0;
const cartItemList = document.getElemetByID('cart-item');
function addtocart(itemName,itemPrice){
const li =document.createElement(li);
li.textcontent = '${itemName}-$${itemPrice}';
	 cartItemList.appenchild(li);

	totalPrice += itemPrice;
	document.getElementById('total').textContent = 'Total: $${totalPrice.tofixed(2)}';
}
function placeOrder(){
	alert('your order has been placed.Total amount: $${totalPrice.toFixed(2)}');
	// you can add further processing here,like seding the order to a server
}