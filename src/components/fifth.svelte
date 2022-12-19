<script>
    let products = [
        {name: 't-shirt', quantity: 10},
        {name: 'mug', quantity: 30},
        {name: 'sticker', quantity:8},
        {name: 'sweatshirt', quantity:12},
]
function addProduct() {
    let cup = {name: 'cup', quantity: 4};
    products = [cup, ...products]
}
</script>

<button on:click="{addProduct}">Add product</button>
{#each products as product, i (product.name)} <!-- must give a unique key like product.name so that when you click check box on t-shirt, it remains checked on tshirt regardless if cup is added  -->
<h1>{product.name}</h1>
<input type="checkbox">
<div>{i}</div>
{/each}