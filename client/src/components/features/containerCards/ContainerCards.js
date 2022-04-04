import { useState, useEffect, Suspense, useContext } from 'react';
import { Card } from '../card/Card';
import { getEmployees } from '../../../services/service';
import { Employees } from '../../../context/employees';
import "../../styles/style.css";

export const ContainerCards = () => {
    const { employees, setEmployees } = useContext(Employees);

    const setDataToEmployees = async () => {
        const dataFromServer = await getEmployees();
        setEmployees(dataFromServer);
    }

    return (

        <>
            <button onClick={setDataToEmployees} className="container-cards-btn" type="button" data-modal-toggle="authentication-modal">
                Get employees
            </button>
            <Suspense fallback={(<p>load..</p>)}>
                <div className="grid grid-cols-3 gap-3 mt-4">
                    {employees?.data?.map(employee => {
                        return <Card key={employee.id} Name={employee.Name}
                            id={employee.id}
                            email={employee.email}
                            address={employee.address}

                        />
                    })}
                </div>
            </Suspense>
        </>

    )

}




