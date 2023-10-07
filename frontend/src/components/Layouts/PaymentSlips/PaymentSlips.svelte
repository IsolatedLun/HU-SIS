<script>

	import { userStore } from "../../../stores/userStore/userStore";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
	import PaymentSlip from "../../Modules/PaymentSlip/PaymentSlip.svelte";

</script>

<Flex useColumn={true} gap={3}>
    {#each $userStore.payments as slip}
        <PaymentSlip {slip} />
    {/each}
</Flex>