<script>
	import { userStore } from '../../../../stores/userStore/userStore';
	import { cubeCss } from '../../../../utils/cubeCss/cubeCss';
	import Card from '../../../Modules/Card/Card.svelte';

	import Flex from '../../../Modules/FlexAndGrid/Flex.svelte';
</script>

<Flex 
    cls={cubeCss('', '', 'margin-block-start-3')} 
    justify="center" 
    gap={2} 
    wrapOnMobile={true}
>
	<Card>
		<p class="fw-500">Credits: {userStore.getTotalCredits()}</p>
	</Card>
	<Card>
		<p class="fw-500">Total Hours: {userStore.getTotalHours()}</p>
	</Card>
</Flex>
