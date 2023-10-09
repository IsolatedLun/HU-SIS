<script lang="ts">
	import type { T_Days } from '../../../stores/types';
	import { daysArray } from '../../../stores/types';
	import { cubeCss } from '../../../utils/cubeCss/cubeCss';
	import Button from '../../Interactibles/Button/Button.svelte';
	import Input from '../../Interactibles/Input/Input.svelte';
	import Flex from '../../Modules/FlexAndGrid/Flex.svelte';
	import type { T_SectionCourseData, T_SectionScheduleQuery } from './types';
	import data from './schedule.json';
	import Table from '../../Modules/Table/Table.svelte';
	import ListColumn from './Table/ListColumn.svelte';
	import { capitalize } from '../../../utils/general';
	import { filterSchedule } from './funcs';
	import DesktopTable from './Table/DesktopTable.svelte';
	import MobileTable from './Table/MobileTable.svelte';

	function addDay(day: T_Days) {
		query.days.includes(day)
			? (query.days = query.days.filter((x) => x !== day))
			: query.days.push(day);

		query = query;
	}

	function resetTime() {
		query.time = ['', ''];
	}

	let query: T_SectionScheduleQuery = {
		courseName: '',
		instructor: '',
		days: [],
		time: ['', '']
	};

	const scheduleData: T_SectionCourseData = data as any;
</script>

<div class="section-schedule">
	<Flex tag="header" useColumn={true} align="center" gap={3}>
		<Flex cls={cubeCss('', '', 'width-100')} gap={2} collapseOnMobile={true} justify="center">
			<Input
				bind:value={query.courseName}
				showLabel={true}
				label="Course"
				placeholder="Search course..."
				list={scheduleData.course_names}
			/>
			<Input
				bind:value={query.instructor}
				showLabel={true}
				label="Instructor"
				placeholder="Search instructor..."
				list={scheduleData.instructors}
			/>
		</Flex>
		<Flex
			cls={cubeCss('', '', 'width-100')}
			justify="space-between"
			collapseOnMobile={true}
			alignCenterOnMobile={true}
			gap={3}
		>
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
			<Flex align="center" gap={3}>
				<Button
					on:click={() => resetTime()}
					cls={cubeCss('width-100', '', '')}
					attachments={['small-pad', 'hologram', 'mix']}>
					Reset <span class="visually-hidden">time</span>
				</Button>
				<Flex align="center">
					<Input bind:value={query.time[0]} label="Start Time" type="time" />
					<p>-</p>
					<Input bind:value={query.time[1]} label="End Time" type="time" />
				</Flex>
			</Flex>
		</Flex>
	</Flex>
	<main class="[ schedule-section ] [ margin-block-2 ]">
		<h2 class="[ margin-block-end-1 ] [ fw-500 ]">Courses</h2>

		<DesktopTable {scheduleData} {query} />
		<MobileTable {scheduleData} {query} />
	</main>
</div>
