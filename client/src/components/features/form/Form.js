import { useState } from 'react'
import "../../styles/style.css";

export const Form = ({ sendEmployeeForm, nameRef, emailRef, addressRef, idRef }) => {
    const [nameValue, setNameValue] = useState("");

    return (
        <form onSubmit={(e) => sendEmployeeForm(e)} className="form-container" action="#">
            <h3 className="form-headline">Add employee</h3>
            <div>
                <label for="Name" className="form-label">Your Name</label>
                <input ref={nameRef} onChange={(e) => setNameValue(e.target.value.replace(RegExp(/[^A-Z a-z]/gi), ""))} value={nameValue} type="Name" name="Name" id="Name" className="form-input" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label for="email" className="form-label">Your email</label>
                <input ref={emailRef} type="email" name="email" id="email" className="form-input" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label for="address" className="form-label">Your address</label>
                <input ref={addressRef} type="text" name="address" id="address" placeholder="st Vizman" className="form-input " required="" />
            </div>
            <div>
                <label for="id" className="form-label">Your ID</label>
                <input ref={idRef} type="text" pattern="[0-9]{9}" name="id" id="id" placeholder="123456789" className="form-input " required="" />
            </div>
            <div className="flex justify-between">
                <button type="submit" className="form-submit-btn">Save Employee</button>
            </div>
        </form>
    )
}
