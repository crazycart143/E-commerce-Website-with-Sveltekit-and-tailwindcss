<script>
	import '../app.css';
	import Header from "../components/Header.svelte"
	import Footer from "../components/Footer.svelte"
	import First from "../components/first.svelte"
	import Second from "../components/second.svelte"
	import Third from "../components/third.svelte"
	import Fourth from "../components/fourth.svelte"
	import Fifth from "../components/fifth.svelte"
	import Sixth from "../components/sixth.svelte"
	
</script>
	


<Header></Header>

<main>
<slot></slot>
</main>

<Footer></Footer>