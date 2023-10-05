<script lang='ts'>
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import { capitalize } from "../../../../utils/general";
	import Flex from "../../../Modules/FlexAndGrid/Flex.svelte";
	import Table from "../../../Modules/Table/Table.svelte";
	import { filterSchedule } from "../funcs";
	import type { T_SectionCourseData, T_SectionScheduleQuery } from "../types";
	import ListColumn from "./ListColumn.svelte";

    export let scheduleData: T_SectionCourseData;
    export let query: T_SectionScheduleQuery;

    let headers: string[] = Object.keys(scheduleData.courses[0]).map(x => capitalize(x));
</script>

<div data-mobile='true'>
    <Flex useColumn={true} gap={3}>
        {#each filterSchedule(scheduleData.courses, query) as course}
            <Table cls={cubeCss('schedule-section__table-mobile', '', 'fs-300')}>
                <tbody slot="tbody">
                    {#each Object.entries(course) as [key, value], i}
                        <tr>
                            <td>{headers[i]}</td>
                            {#if ['days', 'time', 'room'].includes(key)}
                                <ListColumn {value} />
                            {:else}
                                <td>{value}</td>
                            {/if}
                        </tr>
                    {/each}
                </tbody>
            </Table>
        {/each}
    </Flex>
</div>