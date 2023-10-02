<script>
	import { userStore } from "../../../../stores/userStore/userStore";
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import Card from "../../../Modules/Card/Card.svelte";


	import Flex from "../../../Modules/FlexAndGrid/Flex.svelte";

</script>

<Flex justify='center' gap={2} wrapOnMobile={true}>
    <Card cls={cubeCss('', '', 'width-max-content margin-block-start-3')}>
        <p class="fw-500">Credits: {userStore.getTotalCredits()}</p>
    </Card>
    <Card cls={cubeCss('', '', 'width-max-content margin-block-start-3')}>
        <p class="fw-500">Total Hours: {userStore.getTotalHours()}</p>
    </Card>
</Flex>