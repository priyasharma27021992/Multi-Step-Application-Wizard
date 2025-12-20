export const formatDate = (date?: Date) => {
    const offset =  date?.getTimezoneOffset() ?? 0;
    const event = date ? new Date(date.getTime() - (offset*60*1000)) : new Date();
    return event.toISOString().split('T')[0];
}