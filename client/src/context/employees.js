import { createContext, useState, useContext, useEffect } from "react";
import { getEmployees } from "../services/service";

export const Employees = createContext([]);

export const EmployeesContext = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    const setDataToEmployees = async () => {
        const dataFromServer = await getEmployees();

        setEmployees(dataFromServer);
    }
    useEffect(() => {
        setDataToEmployees();
        return () => console.log("clean up")
    }, [])
    return (
        <Employees.Provider value={{ employees, setEmployees }}>
            {children}
        </Employees.Provider>
    );
}
