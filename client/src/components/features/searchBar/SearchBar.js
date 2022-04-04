import { useEffect, useContext, useState } from "react";
import { isValidValue } from "../../../utills/isValueValid";
import { Employees } from "../../../context/employees";
export const SearchBar = () => {
    const { value, setValue } = useContext(Employees);

    const checkValidation = (e) => {
        const newValue = isValidValue(e);
        setValue(newValue);
    }

    return (

        <div className="searchbar-container">
            <div className="searchbar">
                <div className="input-group-container input-group">
                    <input name="username" onChange={(e) => checkValidation(e)} value={value} type="search" className="form-control search-input first-line:" placeholder="Search" />
                </div>
            </div>

        </div>


    )
}
