export function getTime(date: Date) {
    return `${date.getHours()}:${date.getMinutes() === 0 ? '00' : date.getMinutes()}`
}

export function capitalize(text: string) {
    return text.slice(0, 1).toUpperCase() + text.slice(1)
}

export function convertTimeFormatToDate(x: string) {
    const date = new Date();
    const [hours, minutes] = x.split(':').map(Number);

    date.setHours(hours, minutes);
    return date;
}

export function isSubStr(text: string, substr: string) {
    return text.toLowerCase().indexOf(substr.toLowerCase()) > -1;
}