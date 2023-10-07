import { writable } from "svelte/store";
import type { Store_Url } from "./types";

export const urlStore = writable<Store_Url>({
    // "Setup": [
    //     ["Change Semester", "suii"],
    //     ["Change Password", ""],
    //     ["Change Language", ""]
    // ],
    "Registration": [
        ["Section Schedule", "/home/section"],
    ],
    "Info": [
        ["Announcements", "/home/announcements"],
        ["Schedule", "/home"],
        ["Payment Slips", ""],
        // ["Instructor Evaluation", ""],
        // ["Grades", ""],
        // ["Program of Study", ""]
    ]
})