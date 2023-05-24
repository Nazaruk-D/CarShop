export const getFutureDate = (months: number) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const futureMonth = (currentMonth + months) % 12;
    const futureYear = currentYear + Math.floor((currentMonth + months) / 12);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[futureMonth];

    return `${monthName} ${futureYear}`;
}