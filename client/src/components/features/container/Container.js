import React from 'react'
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { ContainerCards } from '../containerCards/ContainerCards';
import { SearchBar } from '../searchBar/SearchBar';
export const Container = () => {
    return (
        <main >
            <Header />
            <SearchBar />
            <ContainerCards />
            <Footer />
        </main >
    )
}
