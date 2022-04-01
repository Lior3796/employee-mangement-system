
export const getEmployees = async () => {
    try {
        const response = await fetch("http://localhost:5000/employee");
        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const createEmployee = async (newEmployee) => {
    try {
        const response = await fetch("http://localhost:5000/employee", {
            body: JSON.stringify(newEmployee),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const result = await response.json();
        return result;

    } catch (error) {
        return error;
    }
}

export const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/employee/deleteUser/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        console.log(result)
        return result;

    } catch (error) {
        return error;
    }
}