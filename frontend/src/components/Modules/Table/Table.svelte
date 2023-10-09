<script lang='ts'>
    import { cubeCss } from "../../../utils/cubeCss/cubeCss";

    export let cls = cubeCss('', '', '');
    export let caption: string = '';

    const _class = cls.extend(
        'table',
        '',
        'width-100 text-align-center border-radius-bevelled'
    )
</script>

<div class="[ table-container ] [ width-100 ]">
    <table class="{_class.toString()}">
        {#if caption}
            <caption class="visually-hidden">{caption}</caption>
        {/if}
        <slot name='thead' />
        <slot name='tbody' />
    </table>
</div>