import { writable } from "svelte/store"
import type { User } from "./types"

export const userStore = writable<User>({
    id: 2410040,
    name: 'Joe Mozian',
    schedule: {}
})