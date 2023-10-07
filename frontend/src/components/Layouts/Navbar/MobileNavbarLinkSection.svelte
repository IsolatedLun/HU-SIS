<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { UrlTuple } from '../../../stores/urlStore/types';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';
	import Button from '../../Interactibles/Button/Button.svelte';
	import Card from '../../Modules/Card/Card.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import Icon from '../../Modules/Icon/Icon.svelte';
	import { ICON_CARET_DOWN } from '../../icons';
	import { slide } from 'svelte/transition';

	export let expand = false;
	export let section: [string, UrlTuple[]];

	const dispatch = createEventDispatcher();
</script>

<Button
	on:click={() => (expand = !expand)}
	cls={cubeCss('', '', 'width-100')}
	variant="neutral"
	attachments={['mix']}
>
	<Flex cls={cubeCss('', '', 'width-100')} align="center" justify="space-between">
		<p class="fs-450">{section[0]}</p>
		<Icon>{ICON_CARET_DOWN}</Icon>
	</Flex>
</Button>

{#if expand}
	<div class="width-100" transition:slide>
		<Card padding={1}>
			<ul class="width-100">
				<Flex cls={cubeCss('', '', 'width-100')} useColumn={true}>
					{#each section[1] as [text, url]}
						<li class="width-100">
							<Button
								on:click={() => dispatch('urlChange')}
								cls={cubeCss('', '', 'text-align-center width-100')}
								variant="neutral"
								attachments={['mix']}
								to={url}>{text}</Button
							>
						</li>
					{/each}
				</Flex>
			</ul>
		</Card>
	</div>
{/if}
