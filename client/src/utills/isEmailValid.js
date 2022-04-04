export const isEmailValid = (Name, email) => {
    const emailPattern = Name.replaceAll(" ", ".") + "@mycoolcompany.com";
    console.log("email pattern:", emailPattern.length, "userEmail:", email.length)
    if (emailPattern !== email) {
        return `Email not in the correct pattern`;

    }
}