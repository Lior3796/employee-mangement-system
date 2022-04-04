import { createContext, useState, useContext, useEffect } from "react";
import { getEmployees } from "../services/service";
import { useIsMount } from "../hooks/useInMount";
import { filterBySearch } from "../utills/filterBySearch";

export const Employees = createContext([]);

export const EmployeesContext = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [value, setValue] = useState([]);
    const isMount = useIsMount();

    const setDataToEmployees = async () => {
        const dataFromServer = await getEmployees();
        const newData = filterBySearch(dataFromServer, value);
        setEmployees(newData);
    }

    useEffect(() => {
        if (!isMount) {
            setDataToEmployees();
        }
        return () => console.log("clean up")
    }, [value]);


    return (
        <Employees.Provider value={{ employees, setEmployees, value, setValue, filterBySearch }}>
            {children}
        </Employees.Provider>
    );
}
