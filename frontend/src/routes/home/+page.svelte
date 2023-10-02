<script lang='ts'>
	import Navbar from "../../components/Layouts/Navbar/Navbar.svelte";
	import Schedule from "../../components/Layouts/Schedule/Schedule.svelte";
	import Card from "../../components/Modules/Card/Card.svelte";
	import Flex from "../../components/Modules/FlexAndGrid/Flex.svelte";
	import Table from "../../components/Modules/Table/Table.svelte";
	import { userStore } from "../../stores/userStore/userStore";
	import { cubeCss } from "../../utils/cubeCss/cubeCss";
	import { getTime } from "../../utils/general";
</script>

<h2 class="[ fw-500 margin-block-end-2 ]">
    Welcome, 
    <span class="underline">{$userStore.name}</span> 
    <span class="clr-misc-text-muted">(2410040)</span>
</h2>

<Schedule />