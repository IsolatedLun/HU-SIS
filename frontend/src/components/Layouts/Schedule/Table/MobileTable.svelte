<script>
	import { userStore } from "../../../../stores/userStore/userStore";
	import { cubeCss } from "../../../../utils/cubeCss/cubeCss";
	import { getTime } from "../../../../utils/general";
	import Flex from "../../../Modules/FlexAndGrid/Flex.svelte";
	import Table from "../../../Modules/Table/Table.svelte";
	import TableInfo from "./TableInfo.svelte";
</script>

<div data-mobile='true'>
    <Flex cls={cubeCss('', '', 'width-100')} useColumn={true} gap={3}>
        {#each Object.entries(userStore.getSchedule()) as [courseName, courseData]}
            <Table>
                <tbody slot='tbody'>
                    <tr>
                        <td class="fw-500">Course</td>
                        <td>{courseName}</td>
                    </tr>
                    <tr>
                        <td class="fw-500">Credits</td>
                        <td>{courseData["credits"]}</td>
                    </tr>
                    <tr>
                        <td class="fw-500">Section</td>
                        <td>{courseData["section"]}</td>
                    </tr>
                    <tr>
                        <td class="fw-500">Location</td>
                        <td>{courseData["location"]}</td>
                    </tr>
                    <tr>
                        <td class="fw-500">Time</td>
                        <td>
                            {getTime(courseData["time"][0])} 
                            - 
                            {getTime(courseData["time"][1])}
                        </td>
                    </tr>
                    <tr>
                        <td class="fw-500">Days</td>
                        <td>{courseData["days"]}</td>
                    </tr>
                </tbody>
            </Table>
        {/each}
    </Flex>

    <TableInfo />
</div>