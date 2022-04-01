export const isValidValue = (e) => {
    const value = e.target.value;
    return value.replace(RegExp(/[^A-Z a-z] [^0-9]/gi), "");
}