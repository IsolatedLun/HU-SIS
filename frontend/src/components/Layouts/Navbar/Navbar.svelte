<script lang="ts">
	import { onMount } from 'svelte';
	import { urlStore } from '../../../stores/urlStore/urlStore';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';
	import Button from '../../Interactibles/Button/Button.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import Icon from '../../Modules/Icon/Icon.svelte';
	import { ICON_BARS, ICON_POWER, ICON_TIMES } from '../../icons';
	import MobileNavbarLinkSection from './MobileNavbarLinkSection.svelte';
	import NavbarLinkSection from './NavbarLinkSection.svelte';

	let showMobileNavbar = false;
</script>

<nav class="[ primary-navbar ] [ margin-block-2 padding-inline-4 ]">
	<Flex align="center">
		<a href="/home">
			<Flex align="center" justify="start" gap={2}>
				<img class="uni-logo" src="https://www.haigazian.edu.lb/wp-content/uploads/2021/01/HU-LOGO.png" alt="Haigazial logo" />
			</Flex>
		</a>
		<div data-desktop='true'>
			<Flex align="center" justify="center" gap={3}>
				<NavbarLinkSection />
				
				<Button to='/' variant="error" attachments={['hologram', 'mix']}>
					<span>Log out</span>
					<Icon>{ICON_POWER}</Icon>
				</Button>
			</Flex>
		</div>

		<div data-mobile='true'>
			<Button on:click={() => showMobileNavbar = !showMobileNavbar} variant='neutral' attachments={['mix']}>
				<Icon ariaLabel='Open navigation'>{ICON_BARS}</Icon>
			</Button>
		</div>
	</Flex>
</nav>

<nav class="[ mobile-navbar ] [ pos-fixed padding-2 ]" data-show={showMobileNavbar}>
	<Flex align='center' justify="space-between">
		<img class="mobile-navbar__uni-logo" src="https://www.haigazian.edu.lb/wp-content/uploads/2021/01/HU-LOGO.png" alt="Haigazial logo" />
		<Button on:click={() => showMobileNavbar = !showMobileNavbar} variant='error' attachments={['hologram', 'mix']}>
			<Icon ariaLabel='Close navigation'>{ICON_TIMES}</Icon>
		</Button>
	</Flex>

	<Flex cls={cubeCss('', '', 'margin-block-start-5')} useColumn={true} align='center'>
		{#each Object.entries($urlStore) as section}
			<MobileNavbarLinkSection {section} on:urlChange={() => showMobileNavbar = false} />
		{/each}
	</Flex>

	<Button to='/' cls={cubeCss('', '', 'margin-block-start-3')} variant="error" attachments={['hologram', 'mix']}>
		<Flex cls={cubeCss('', '', 'width-100')} align='center' justify='center'>
			<span>Log out</span>
			<Icon>{ICON_POWER}</Icon>
		</Flex>
	</Button>
</nav>