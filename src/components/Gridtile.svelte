<script>
    // if no products, this is the default value
    export let product = {
        name: 'No Product',
        price: '0',
        src: 'https://bagbazaars.com/assets/img/no-product-found.png'
    }
    console.log(product);
</script>

<div class="text-white bg-indigo-600 w-full h-full overflow-hidden">
<button class="relative w-full h-full flex items-center justify-center">
    <img class="max-h-full" src="{product.src}" alt="{product.name}">
    <div class="bg-black text-2xl font-medium p-3">{product.name}</div>
    <div class="text-sm bg-black p-3 w-fit">${product.price} USD</div>
</button>

</div>