import { useState, useEffect, Suspense } from 'react';
import { Card } from '../card/Card';
import { getEmployees } from '../../../services/service';
import { UseEmployeeContext } from '../../../hooks/useEmployeeContext';

export const ContainerCards = () => {
    const [employees, setEmployees] = useState([]);

    const setDataToEmployees = async () => {
        const dataFromServer = await getEmployees();
        setEmployees(dataFromServer);
        console.log(dataFromServer)
    }
    useEffect(() => {
        setDataToEmployees();
        return () => console.log("finish to set data")
    }, [])




    return (
        <Suspense fallback={(<p>load..</p>)}>
            <div className="grid grid-cols-3 gap-3 mt-4">
                {employees?.data?.map((employee, key) => {
                    return <Card key={key} Name={employee.Name}
                        id={employee.id}
                        email={employee.email}
                        address={employee.address}

                    />
                })}
                <span className="underline">{employees.count}</span>
            </div>
        </Suspense>
    )

}




