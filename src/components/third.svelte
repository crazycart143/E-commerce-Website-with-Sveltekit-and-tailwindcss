<script>
      let searchedValue = '';
        let checked = false;

</script>

<!-- use bind:value to update value in real time -->

<h3>Searched: {searchedValue}</h3>
<input bind:value={searchedValue} type="text" id="myText">
<h3>
    Checked: {checked}
</h3>
<input bind:checked type="checkbox" >