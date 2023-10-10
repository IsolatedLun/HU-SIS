<script lang='ts'>
	import Schedule from "../../components/Layouts/Schedule/Schedule.svelte";
	import { userStore } from "../../stores/userStore/userStore";
</script>

<h2 class="[ fw-500 margin-block-end-2 ]">
    Welcome, 
    <span class="underline">{$userStore.id}</span> 
    <span class="clr-misc-text-muted">({Math.ceil(Math.random() * 100000)})</span>
</h2>

<Schedule />