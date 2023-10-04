<script lang='ts'>
    import { cubeCss } from "../../../utils/cubeCss/cubeCss";


    export let cls = cubeCss('', '', '');
    export let containerCls = cubeCss('', '', '');

    const _cls = cls.extend(
        'dropdown-list',
        '',
        'width-max-content pos-absolute padding-1'
    )
    const _containerCls = containerCls.extend('dropdown-container', '', 'pos-relative')
</script>

<div class={_containerCls.toString()}>
    <slot name='element' />
    <div class={_cls.toString()}>
        <slot />
    </div>
</div>