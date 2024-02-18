export const numberToString = (number: number, digits: number) => {
    const numberString = number.toString();
    const difference = digits - numberString.length;
    if (difference > 0) {
        return `${"0".repeat(difference)}${numberString}`;
    }
    return numberString;
};
