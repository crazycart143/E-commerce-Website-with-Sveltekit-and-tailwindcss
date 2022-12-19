<script>
     function handleClick(String) {
        alert(String);
    }
</script>

<!-- self and once is a modifier -->
<!-- use self to only trigger event on the specified div and not the child div -->
<!-- use once to only trigger the event once -->

<button class="btn" on:click|self|once="{() => {handleClick('Green div has been clicked!')}}">Click me</button> 
<div class="bg-green-500 " on:click|self="{() => {handleClick('Green div has been clicked!')}}">  You can click the green
    <div class="bg-red-400">You can't click the red</div>
</div>