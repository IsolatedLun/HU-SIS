<script lang='ts'>
	import type { T_Days } from "../../../stores/types";
    import { daysArray } from "../../../stores/types";
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Button from "../../Interactibles/Button/Button.svelte";
	import Input from "../../Interactibles/Input/Input.svelte";
    import Flex from "../../Modules/FlexAndGrid/Flex.svelte";
	import type { T_SectionScheduleQuery } from "./types";

    function addDay(day: T_Days) {
        if(query.days.includes(day)) {
            query.days = query.days.filter(x => x !== day)
        }
        else {
            query.days.push(day)
        }

        query = query;
    }

    let query: T_SectionScheduleQuery = {
        courseName: '',
        instructor: '',
        faculty: '',
        department: '',
        days: [],
        time: [null, null]
    }
</script>

<div class="section-schedule">
    <Flex tag='header' useColumn={true} align='center' gap={3}>
        <Flex cls={cubeCss('', '', 'width-100')} gap={2} collapseOnMobile={true} justify='center'>
            <Input bind:value={query.courseName} showLabel={true} label='Course' placeholder='Search course...' />
            <Input bind:value={query.department} showLabel={true} label='Department' placeholder='Search department...' />
            <Input bind:value={query.instructor} showLabel={true} label='Instructor' placeholder='Search instructor...' />
        </Flex>
        <Flex cls={cubeCss('', '', 'width-100')} justify='space-between'>
            <Flex>
                {#each daysArray as day}
                    <Button
                        on:click={() => addDay(day)} 
                        selected={query.days.includes(day)} 
                        attachments={['tiny-pad', 'hologram', 'mix']}
                    >
                        {day}
                    </Button>
                {/each}
            </Flex>
            <Flex align='center'>
                <Input bind:value={query.time[0]} label='Start Time' type='time' />
                <p>-</p>
                <Input bind:value={query.time[1]} label='End Time' type='time' />
            </Flex>
        </Flex>
    </Flex>
    <main class="margin-block-2">
        <h2>Courses</h2>
    </main>
</div>