<script>
    import '../app.css';
	import Header from "../components/Header.svelte"
	import Footer from "../components/Footer.svelte"
	import MobileMenu from '../components/MobileMenu.svelte';
	
	
</script>
	


<Header></Header>


<main>
	<MobileMenu></MobileMenu>
<slot></slot>
</main>

<Footer></Footer>