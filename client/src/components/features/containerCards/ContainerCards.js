import { useState, useEffect, Suspense, useContext } from 'react';
import { Card } from '../card/Card';
import { getEmployees } from '../../../services/service';
import { Employees } from '../../../context/employees';
import { UseEmployeeContext } from '../../../hooks/useEmployeeContext';

export const ContainerCards = () => {
    const { employees, setEmployees } = useContext(Employees);

    const setDataToEmployees = async () => {
        const dataFromServer = await getEmployees();
        setEmployees(dataFromServer);
    }


    return (

        <>
            <button onClick={() => setDataToEmployees()} className="inline m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                get employees
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




