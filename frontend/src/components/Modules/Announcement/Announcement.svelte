<script lang='ts'>
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Card from "../Card/Card.svelte";
	import Flex from "../FlexAndGrid/Flex.svelte";
    import type { T_Announcement } from "./types";

    export let ann: T_Announcement;
</script>

<div class="announcement">
    <header class="margin-block-end-1">
        <img class="[ announcement__img ] [ border-radius-bevelled ]" src={ann.thumbnail} alt="" />
    </header>

    <Card>
        <Flex tag='main' useColumn={true}>
            <h2 class="[ fw-500 fs-400 ]">
                {ann.title} <span class="clr-misc-text-muted fs-300">- {ann.date_created}</span>
            </h2>
        </Flex>
        <a class="[ display-block margin-block-start-2 ]" href={ann.link} target="_blank">
            Continue reading
        </a>
    </Card>
</div>
