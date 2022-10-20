export const dateCreatedAt = (date) => {
    const newDate = new Date();
    const currDate = newDate.getDate();
    const currMonth = newDate.getMonth() + 1;
    const currYear = newDate.getFullYear();
    const currTime = newDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    return `${currDate}/${currMonth}/${currYear} ${currTime}`;
};
