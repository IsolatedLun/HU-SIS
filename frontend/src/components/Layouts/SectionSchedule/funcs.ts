import { convertTimeFormatToDate, isSubStr } from "../../../utils/general";
import type { T_SectionCourse, T_SectionScheduleQuery } from "./types";

// TODO
// Optimize filtering by putting all of the logic in a single filter loop
export function filterSchedule(courses: T_SectionCourse[], query: T_SectionScheduleQuery) {
    courses = courses
    .filter(course => isSubStr(course.course, query.courseName))
    .filter(course => isSubStr(course.instructor, query.instructor))
    .filter(course => {
        const from1 = query.time[0] ? convertTimeFormatToDate(query.time[0]) : null;
        const till1 = query.time[1] ? convertTimeFormatToDate(query.time[1]) : null;

        for(let i = 0; i < course.time.length; i++) {
            if(course.time[i] === 'TBA')
                return false;
            
            const [start, end] = course.time[i].split(' - ')
            const from2 = convertTimeFormatToDate(start);
            const till2 = convertTimeFormatToDate(end);

            if (from1 && till1) {
                return from1 > from2 && till1 > till2;
            }

            else if(from1) {
                return from1 > from2;
            }

            else if(till1) {
                return till1 > till2;
            }

            return true;
        }
    })

    if(query.days.length > 0)
        courses = courses.filter(course => {
            for(let i = 0; i < query.days.length; i++) {
                if(Array.isArray(course.days[0])) {
                    for(let j = 0; j < course.days.length; j++) {
                        if(course.days[j].includes(query.days[i]))
                            return true;
                    }
                }
                
                else if(course.days.includes(query.days[i]))
                    return true;
            }

            return false;
        })

    return courses;
}