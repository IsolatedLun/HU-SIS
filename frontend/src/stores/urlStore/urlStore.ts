import { writable } from "svelte/store";
import type { Store_Url } from "./types";

export const urlStore = writable<Store_Url>({
    "Setup": [
        ["Change Semester", ""],
        ["Change Password", ""],
        ["Change Language", ""]
    ],
    "Registration": [
        ["Prerequisites", ""],
        ["Register Courses", ""],
        ["Final Exam", ""]
    ],
    "Info": [
        ["Schedule", ""],
        ["Payment Slips", ""],
        ["Instructor Evaluation", ""],
        ["Grades", ""],
        ["Program of Study", ""]
    ]
})