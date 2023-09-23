<script>
	import Footer from "../../components/Layouts/Footer/Footer.svelte";
import Navbar from "../../components/Layouts/Navbar/Navbar.svelte";
	import Flex from "../../components/Modules/FlexAndGrid/Flex.svelte";
	import { cubeCss } from "../../utils/cubeCss/cubeCss";
</script>

<Navbar />
<main class="[ container ] [ margin-block-start-3 ]" data-type='full'>
    <slot />
</main>
<Footer />