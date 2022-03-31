import { useState, useEffect } from 'react'
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { ContainerCards } from '../containerCards/ContainerCards';
import { SearchBar } from '../searchBar/SearchBar';
import { Form } from '../form/Form';
import { getEmployees } from '../../../services/service';
import { EmployeesContext } from '../../../context/employees';


export const Container = () => {

    return (
        <EmployeesContext>
            <main className="container max-h-1000" >
                <Header />
                <SearchBar />
                <ContainerCards />
                <Footer />
            </main>
        </EmployeesContext>
    )
}
