<script lang="ts">
	import Button from '../../Interactibles/Button/Button.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import Icon from '../../Modules/Icon/Icon.svelte';
	import { ICON_CARET_RIGHT, ICON_POWER } from '../../icons';
</script>

<nav class="[ primary-navbar ] [ margin-block-2 padding-inline-4 ]">
	<Flex align="center">
		<a href="https://www.haigazian.edu.lb/" target="_blank">
			<Flex align="center" justify="start" gap={2}>
				<img class="uni-logo" src="./haigazian_logo.png" alt="Haigazial logo" />
				<h1>HU</h1>
			</Flex>
		</a>
		<Flex align="center" justify="center" gap={3}>
			<Flex justify="center" gap={0}>
				<Button
					variant="neutral"
					attachments={['hologram', 'mix', 'flat', 'border-none', 'huge-pad', 'border-bevel-left']}
				>
					<Flex align="end">Setup</Flex>
				</Button>
				<Button
					variant="neutral"
					attachments={['hologram', 'mix', 'flat', 'border-none', 'huge-pad']}
				>
					<Flex align="end">Registration</Flex>
				</Button>
				<Button
					variant="neutral"
					attachments={['hologram', 'mix', 'flat', 'border-none', 'huge-pad', 'border-bevel-right']}
				>
					<Flex align="end">Student Info</Flex>
				</Button>
			</Flex>

			<Button variant="error" attachments={['hologram', 'mix']}>
				<span>Logout</span>
				<Icon>{ICON_POWER}</Icon>
			</Button>
		</Flex>
	</Flex>
</nav>
