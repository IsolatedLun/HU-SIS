<script lang='ts'>
	import { urlStore } from "../../../stores/urlStore/urlStore";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
</script>

<footer class="[ primary-footer ] [ margin-block-start-3 padding-3 fw-500 ]">
    <Flex align='center' justify='space-evenly' collapseOnMobile={true} gap={3}>
        <p>Copyright of <span class="clr-misc-text-muted">Joe Mozian</span></p>
        <Flex gap={5} justify='center' wrapOnMobile={true}>
            {#each Object.entries($urlStore) as footerSection}
                <Flex useColumn={true} alignCenterOnMobile={true}>
                    <p class="[ clr-misc-text-muted fw-500 fs-450 ]">
                        {footerSection[0]}
                    </p>
                    <Flex tag='ul' useColumn={true} alignCenterOnMobile={true}>
                        {#each footerSection[1] as footerLink}
                            <li>
                                <a href={footerLink[1]}>{footerLink[0]}</a>
                            </li>
                        {/each}
                    </Flex>
                </Flex>
            {/each}
        </Flex>
    </Flex>
</footer>