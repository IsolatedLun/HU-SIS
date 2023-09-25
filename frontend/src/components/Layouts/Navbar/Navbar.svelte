<script lang="ts">
	import { urlStore } from '../../../stores/urlStore/urlStore';
	import Button from '../../Interactibles/Button/Button.svelte';
	import DropDown from '../../Modules/DropDown/DropDown.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import Icon from '../../Modules/Icon/Icon.svelte';
	import { ICON_BARS, ICON_POWER, ICON_TIMES } from '../../icons';
	import NavbarLinkSection from './NavbarLinkSection.svelte';

	let showMobileNavbar = false;
</script>

<nav class="[ primary-navbar ] [ margin-block-2 padding-inline-4 ]">
	<Flex align="center">
		<a href="https://www.haigazian.edu.lb/" target="_blank">
			<Flex align="center" justify="start" gap={2}>
				<img class="uni-logo" src="./haigazian_logo.png" alt="Haigazial logo" />
			</Flex>
		</a>
		<div data-desktop='true'>
			<Flex align="center" justify="center" gap={3}>
				<NavbarLinkSection />
				
				<Button to='./' variant="error" attachments={['hologram', 'mix']}>
					<span>Logout</span>
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

<nav class="[ mobile-navbar ] [ pos-fixed padding-1 ]" data-show={showMobileNavbar}>
	<Flex align='center' justify="space-between">
		<img class="mobile-navbar__uni-logo" src="./haigazian_logo.png" alt="Haigazial logo" />
		<Button on:click={() => showMobileNavbar = !showMobileNavbar} variant='error' attachments={['hologram', 'mix']}>
			<Icon ariaLabel='Close navigation'>{ICON_TIMES}</Icon>
		</Button>
	</Flex>
</nav>