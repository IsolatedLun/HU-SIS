<script>
	import { cubeCss } from "../../../utils/cubeCss/cubeCss";
	import Flex from "../../Modules/FlexAndGrid/Flex.svelte";

</script>

<footer class="[ primary-footer ] [ margin-block-start-auto padding-3 fw-500 ]">
    <Flex align='center' justify='space-evenly' collapseOnMobile={true}>
        <p>Copyright of <span class="clr-misc-text-muted">Joe Mozian</span></p>
        <Flex gap={3} cls={cubeCss('', '', 'flex-wrap')}>
            <Flex useColumn={true}>
                <p class="[ clr-misc-text-muted fw-500 fs-450 ]">Setup</p>
                <ul>
                    <li>
                        <a href="">Change Semester</a>
                    </li>
                    <li>
                        <a href="">Change Language</a>
                    </li>
                    <li>
                        <a href="">Change Password</a>
                    </li>
                </ul>
            </Flex>
            <Flex useColumn={true}>
                <p class="[ clr-misc-text-muted fw-500 fs-450 ]">Registration</p>
                <ul>
                    <li>
                        <a href="">Schedule</a>
                    </li>
                    <li>
                        <a href="">Prerequisites</a>
                    </li>
                    <li>
                        <a href="">Register Courses</a>
                    </li>
                    <li>
                        <a href="">Final Exam</a>
                    </li>
                </ul>
            </Flex>
            <Flex useColumn={true}>
                <p class="[ clr-misc-text-muted fw-500 fs-450 ]">Info</p>
                <ul>
                    <li>
                        <a href="">Schedule</a>
                    </li>
                    <li>
                        <a href="">Payment Slips</a>
                    </li>
                    <li>
                        <a href="">Instructor Evaluation</a>
                    </li>
                    <li>
                        <a href="">Grades</a>
                    </li>
                    <li>
                        <a href="">Program Of Study</a>
                    </li>
                </ul>
            </Flex>
        </Flex>
    </Flex>
</footer>