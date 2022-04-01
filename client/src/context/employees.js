import { createContext, useState, useContext, useEffect } from "react";
import { getEmployees } from "../services/service";

export const Employees = createContext([]);

export const EmployeesContext = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [value, setValue] = useState([]);


    const setDataToEmployees = async () => {
        const dataFromServer = await getEmployees();
        filterBySearch(dataFromServer)

    }

    const filterBySearch = (dataFromServer) => {
        if (!value.length) {
            setEmployees(dataFromServer);
            return;
        }

        let { data } = dataFromServer;
        let field = value[0].match("[0-9]") ? "id" : "Name";
        if (field === "Name") {
            data = data?.filter(item => item.Name.toLowerCase().startsWith(value.toLowerCase()));
        } else {
            data = data?.filter(item => {
                const id = item.id.toString();
                return id.startsWith(value)
            });
        }
        const result = { ...dataFromServer, data };
        setEmployees(result);

    }

    useEffect(() => {
        setDataToEmployees();
        return () => console.log("clean up")
    }, [value])

    return (
        <Employees.Provider value={{ employees, setEmployees, value, setValue, filterBySearch }}>
            {children}
        </Employees.Provider>
    );
}
