<script lang='ts'>
	import Navbar from "../../components/Layouts/Navbar/Navbar.svelte";
	import Card from "../../components/Modules/Card/Card.svelte";
	import Flex from "../../components/Modules/FlexAndGrid/Flex.svelte";
	import Table from "../../components/Modules/Table/Table.svelte";
	import { userStore } from "../../stores/userStore/userStore";
	import { cubeCss } from "../../utils/cubeCss/cubeCss";
	import { getTime } from "../../utils/general";
</script>

<h2 class="fw-500">
    Welcome, 
    <span class="underline">{$userStore.name}</span> 
    <span class="clr-misc-text-muted">(2410040)</span>
</h2>

<section>
    <h3 class="[ margin-block-1 fw-500 ]">Your schedule</h3>

    <Table>
        <thead slot='thead'>
            <tr class="fs-450">
                <th class="fw-500">Course</th>
                <th class="fw-500">Credits</th>
                <th class="fw-500">Section</th>
                <th class="fw-500">Location</th>
                <th class="fw-500">Time</th>
                <th class="fw-500">Days</th>
            </tr>
        </thead>
        <tbody slot='tbody'>
            {#each Object.entries(userStore.getSchedule()) as [courseName, courseData]}
                <tr>
                    <td>{courseName}</td>
                    <td>{courseData["credits"]}</td>
                    <td>{courseData["section"]}</td>
                    <td>{courseData["location"]}</td>
                    <td>{getTime(courseData["time"][0])} - {getTime(courseData["time"][1])}</td>
                    <td>{courseData["days"]}</td>
                </tr>
            {/each}
        </tbody>
    </Table>
    <Flex justify='center' gap={2}>
        <Card cls={cubeCss('', '', 'width-max-content margin-block-start-3')}>
            <p class="fw-500">Credits: {userStore.getTotalCredits()}</p>
        </Card>
        <Card cls={cubeCss('', '', 'width-max-content margin-block-start-3')}>
            <p class="fw-500">Total Hours: {userStore.getTotalHours()}</p>
        </Card>
    </Flex>
</section>