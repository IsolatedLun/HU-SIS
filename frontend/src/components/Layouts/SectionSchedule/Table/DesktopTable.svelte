<script lang='ts'>
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import { capitalize } from "../../../../utils/general";
	import Table from "../../../Modules/Table/Table.svelte";
	import { filterSchedule } from "../funcs";
	import type { T_SectionCourseData, T_SectionScheduleQuery } from "../types";
	import ListColumn from "./ListColumn.svelte";

    export let scheduleData: T_SectionCourseData;
    export let query: T_SectionScheduleQuery;
</script>

<div data-desktop='true'>
    <Table cls={cubeCss('schedule-section__table', '', 'fs-300')}>
        <thead slot="thead">
            <tr>
                {#each Object.keys(scheduleData.courses[0]) as header}
                    <td class="[ fw-500 fs-350 ]">{capitalize(header)}</td>
                {/each}
            </tr>
        </thead>
    
        <tbody slot="tbody">
            {#each filterSchedule(scheduleData.courses, query) as course}
                <tr>
                    {#each Object.entries(course) as [key, value]}
                        {#if ['days', 'time', 'room'].includes(key)}
                            <ListColumn {value} />
                        {:else}
                            <td>{value}</td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
    </Table>
</div>