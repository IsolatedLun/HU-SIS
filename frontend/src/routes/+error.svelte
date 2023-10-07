<script>
	import { onMount } from "svelte";
	import Button from "../components/Interactibles/Button/Button.svelte";

    onMount(() => {
        if(document.referrer)
            lastUrl = document.referrer === window.location.href ? '/home' : document.referrer;
    })

    let lastUrl = '/home';
</script>
<div class="[ grid place-items-center margin-block-5 ]">
    <h1 class="fw-500 margin-block-end-1">Sorry. The page does not exist yet!</h1>
    {#key lastUrl}
        <Button variant='error' to={lastUrl} attachments={['hologram', 'mix']}>Go back</Button>
    {/key}
</div>