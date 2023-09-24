<script lang="ts">
	import { urlStore } from '../../../stores/urlStore/urlStore';
	import Button from '../../Interactibles/Button/Button.svelte';
	import DropDown from '../../Modules/DropDown/DropDown.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import Icon from '../../Modules/Icon/Icon.svelte';
	import { ICON_POWER } from '../../icons';
	import NavbarLinkSection from './NavbarLinkSection.svelte';
</script>

<nav class="[ primary-navbar ] [ margin-block-2 padding-inline-4 ]">
	<Flex align="center">
		<a href="https://www.haigazian.edu.lb/" target="_blank">
			<Flex align="center" justify="start" gap={2}>
				<img class="uni-logo" src="./haigazian_logo.png" alt="Haigazial logo" />
				<h1>HU</h1>
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
	</Flex>
</nav>
