<script>
	import { userStore } from "../../../../stores/userStore/userStore";
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import { getTime } from "../../../../utils/general";
	import Card from "../../../Modules/Card/Card.svelte";
	import Flex from "../../../Modules/FlexAndGrid/Flex.svelte";
	import Table from "../../../Modules/Table/Table.svelte";
	import TableInfo from "./TableInfo.svelte";
</script>

<div data-desktop='true'>
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
                    <td>
                        {getTime(courseData["time"][0])} 
                        - 
                        {getTime(courseData["time"][1])}
                    </td>
                    <td>{courseData["days"]}</td>
                </tr>
            {/each}
        </tbody>

        <TableInfo />
    </Table>
</div>