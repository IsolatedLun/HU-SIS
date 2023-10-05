<script lang='ts'>
	import Button from "../../Interactibles/Button/Button.svelte";
import Flex from "../../Modules/FlexAndGrid/Flex.svelte";


</script>

<div class="[ intro ] [ grid flex-grow-1 ]" data-collapse='true'> 
    <section class="[ intro__links ]  [ grid padding-block-3 place-items-center ]">
        <div class="[ margin-block-start-auto ]">
            <h2 class="[ text-align-center margin-block-end-1 ]">Connect</h2>
            <Flex gap={2}>
                <Button attachments={['capsule', 'hologram', 'mix']} to='./home'>Student</Button>
                <Button attachments={['capsule', 'hologram', 'mix']} to='./home'>Employee</Button>
            </Flex>
        </div>

        <Flex useColumn={true} align='center'>
            <p class="[ fw-500 margin-block-start-4 ]">
                Made by <span class="[ clr-misc-text-muted ]">Joe Mozian</span>
            </p>
            <a href="#" target="_blank">Source code</a>
        </Flex>
    </section>
    <section class="[ intro__text ]  [ grid place-items-center ]">
        <img class="[ intro__img ]" src="./haigazian.webp" alt="Haigazian">
        <div class="[ pos-absolute ] [ grid place-items-center text-align-center ]">
            <img class="[ uni-logo ]" src="https://www.haigazian.edu.lb/wp-content/uploads/2021/01/HU-LOGO.png" alt="Haigazian logo" />
            <h1 class="[ margin-block-1 ]">Haigazian University</h1>
            <p class="[ margin-inline-10 fw-500 ]">Use our modern Student Information System and find what you are looking for.</p>
        </div>
    </section>
</div>