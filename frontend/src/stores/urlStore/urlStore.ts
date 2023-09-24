import { writable } from "svelte/store";

export const urlStore = writable<Record<string, [string, string][]>>({
    "Setup": [
        ["Change Semester", ""],
        ["Change Password", ""],
        ["Change Language", ""]
    ],
    "Registration": [
        ["Schedule", ""],
        ["Prerequisites", ""],
        ["Register Courses", ""],
        ["Final Exam", ""]
    ],
    "Info": [
        ["Payment Slips", ""],
        ["Instructor Evaluation", ""],
        ["Grades", ""],
        ["Program of Study", ""]
    ]
})