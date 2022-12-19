<script>

 let quantity = 0;
 function addToCart() {
     inventory = [...inventory, quantity + 1]
     quantity = ++quantity
};
 let inventory = [];
 $: remaining = 10 - quantity; // put $: to make variable reactive and change when button is clicked
 let price = 5;
 $: totalCost = quantity * price;
 function increasePrice() {
     price = price+2;
 }
 $: if (remaining === 0) {
     alert(`Oh no! you have ${remaining} inventory left!`)
 }
let user = {name: 'Keanu'};


</script>

<h1>Your shopping cart has {quantity} items.</h1>
<button class="btn bg-amber-600 border-none" on:click={addToCart}>Add to cart</button>
<h2>{inventory}</h2>
<h3>{user.name}</h3>
<div>Remaining inventory: {remaining}</div>
<button class="btn" on:click={increasePrice}>Increase Price</button>
<div>Item price {price}</div>
<div>Total cost {totalCost}</div>