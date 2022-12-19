<script>
    
    import GridTile from "../components/Gridtile.svelte"
    let products = [
        {name: 'Cup', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2utyMc4UOmJxz0PR0yYu35dg4t9gLYOHoL4duPSH1xVyFYIHUNWmbm7VBfFFRyxWkqw&usqp=CAU', price: 15},
        {name: 'Quarter Zip', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2utyMc4UOmJxz0PR0yYu35dg4t9gLYOHoL4duPSH1xVyFYIHUNWmbm7VBfFFRyxWkqw&usqp=CAU', price: 20},
        {name: 'Sticker', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2utyMc4UOmJxz0PR0yYu35dg4t9gLYOHoL4duPSH1xVyFYIHUNWmbm7VBfFFRyxWkqw&usqp=CAU',   price: 10},
]
function updateCost() {
    products[0].price = "50";
}
</script>
<button class="btn" on:click="{updateCost}">Change cup price</button>
{#each products as product (product.name)}
<GridTile {product}></GridTile>  <!-- if it is the same name like product = {product}, it can be short hand to just {product}  -->

{/each}