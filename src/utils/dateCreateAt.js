export const dateCreatedAt = (date) => {
    const newDate = new Date(date);
    const currDate = newDate.getDate().padStart(2, "0");
    const currMonth = (newDate.getMonth() + 1).padStart(2, "0");
    const currYear = newDate.getFullYear();
    const currTime = newDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return `${currDate}/${currMonth}/${currYear} ${currTime}`;
};
