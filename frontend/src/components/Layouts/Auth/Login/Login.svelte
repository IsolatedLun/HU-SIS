<script lang="ts">
	import Button from '../../../../components/Interactibles/Button/Button.svelte';
	import Input from '../../../../components/Interactibles/Input/Input.svelte';
	import Flex from '../../../../components/Modules/FlexAndGrid/Flex.svelte';
	import { HU_LOGO } from '../../../../components/consts';
	import { userStore } from '../../../../stores/userStore/userStore';
	import { cubeCss } from '../../../../utils/cubeCss/cubeCss';

    function handleSubmit() {
        if(username) {
            userStore.setUser(username, password);
        }
    }
    
	let username: string = 'Anonymous';
	let password: string = '';
</script>

<div class="[ login-form-container ] [ grid place-items-center height-100vh ]">
	<div>
		<Flex
			cls={cubeCss('', '', 'width-100 margin-block-end-2')}
			align="center"
			justify="center"
			useColumn={true}
            gap={2}
		>
			<img class="login-form-container__uni-logo" src={HU_LOGO} alt="Haigazian logo" />
			<h2>Login</h2>
		</Flex>
		<form on:submit={handleSubmit}>
			<Flex useColumn={true} gap={2}>
				<Input
					bind:value={username}
					showLabel={true}
					label="Username"
					placeholder="Enter username"
				/>
				<Input
					bind:value={password}
					showLabel={true}
					label="Password"
					placeholder="Enter password"
				/>

				<Flex cls={cubeCss('', '', 'width-100 margin-block-start-2')} justify="space-between">
					<Button isSubmit={true} to='/home' on:click={handleSubmit}>Login</Button>
					<Button variant="error" to="/">Cancel</Button>
				</Flex>

				<p class="clr-misc-text-muted">
					<i>You can enter any values you want.</i>
				</p>
			</Flex>
		</form>
	</div>
</div>
