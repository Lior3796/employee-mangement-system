import { useState, useEffect } from 'react'
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { ContainerCards } from '../containerCards/ContainerCards';
import { SearchBar } from '../searchBar/SearchBar';
import { Modal } from "../modal/Modal";
import { getEmployees } from '../../../services/service';
import { EmployeesContext } from '../../../context/employees';


export const Container = () => {

    return (
        <EmployeesContext>
            <main className="container text-center" >
                <Header />
                <SearchBar />
                <Modal />
                <ContainerCards />
                <Footer />
            </main>
        </EmployeesContext>
    )
}
