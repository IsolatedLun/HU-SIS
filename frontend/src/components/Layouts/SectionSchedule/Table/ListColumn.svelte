<script lang='ts'>
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import Button from "../../../Interactibles/Button/Button.svelte";
	import DropDown from "../../../Modules/DropDown/DropDown.svelte";
	import Flex from "../../../Modules/FlexAndGrid/Flex.svelte";

    export let value: ([string] | [string, string][]);
</script>

{#if Array.isArray(value[0]) || value.length >= 2}
<td>
    <DropDown>
        <div slot='element'>
            <Button variant='neutral' attachments={['hologram', 'small-pad', 'mix']}>
                <p class="fs-300">{value[0]}</p>
            </Button>
        </div>
        <Flex tag='ul' useColumn={true}>
            {#each value as days}
                <li class="width-100">
                    <Button 
                        variant='neutral' 
                        attachments={['hologram', 'small-pad', 'mix']}
                        cls={cubeCss('', '', 'width-100')}
                        >
                        {days}
                    </Button>
                </li>
            {/each}
        </Flex>
    </DropDown>
</td>
{:else}
    <td>{value}</td>
{/if}