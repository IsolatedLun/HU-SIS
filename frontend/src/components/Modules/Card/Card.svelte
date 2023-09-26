<script lang="ts">
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import type { CardVariants } from "./types";

	export let cls = cubeCss('', '', '');
    export let variant: CardVariants = 'neutral';
    export let padding: number = 1;

	const _class = cls.extend(
        'card',
    '',
        `padding-${padding}`
    )
</script>

<div data-variant={variant} class={_class.toString()}>
	<slot />
</div>