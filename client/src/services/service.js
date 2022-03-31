
export const getEmployees = async () => {
    try {
        const response = await fetch("http://localhost:5000/employee");
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error)



    }

}