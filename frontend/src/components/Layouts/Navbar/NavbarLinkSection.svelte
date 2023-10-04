<script lang='ts'>
	import { urlStore } from "../../../stores/urlStore/urlStore";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Button from "../../Interactibles/Button/Button.svelte";
	import DropDown from "../../Modules/DropDown/DropDown.svelte";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
</script>

<Flex gap={0}>
    {#each Object.entries($urlStore) as urlSection, i}
        <DropDown>
            <div slot='element'>
                <Button
                    variant="neutral"
                    attachments={[
                        'mix', 'flat', 'border-none', 'huge-pad', 
                        i === 0 
                        ? 'border-bevel-left' 
                        : i === Object.keys($urlStore).length - 1
                        ? 'border-bevel-right'
                        : ''
                    ]}
                >
                    {urlSection[0]}
                </Button>
            </div>
            <ul class="[ flex flex-direction-column gap-1 align-items-center ]">
                {#each urlSection[1] as url}
                    <li class="width-100">
                        <Button 
                            to={url[1]}
                            variant='neutral' 
                            attachments={['hologram', 'mix', 'border-none']}
                            cls={cubeCss('', '', 'width-100 fs-350 fw-500 text-align-center')}
                        >
                            {url[0]}
                        </Button>
                    </li>
                {/each}
            </ul>
        </DropDown>
    {/each}
</Flex>