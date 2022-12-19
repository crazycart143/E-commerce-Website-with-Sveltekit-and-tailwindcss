<script>
    let product = {
        name: 't-shirt',
        quantity: 0
    };

    function increment() {
        product.quantity += 1;
    }
</script>

{#if product.quantity > 10}
<div class="bg-green-400 p-1">The product is in stock</div>
{:else if product.quantity === 0}
<div class="bg-red-400 p-1">The item is out of stock!</div>
{:else}
<div class="bg-yellow-400 p-1">Only a few items left!</div>
{/if}
<h1>Current {product.name} Quantity : {product.quantity}</h1>
<button on:click="{increment}">Increment</button>