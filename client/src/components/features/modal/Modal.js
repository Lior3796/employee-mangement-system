import { useState, useRef, useEffect } from "react";
import { createEmployee } from "../../../services/service";
import { isEmailValid } from "../../../utills/isEmailValid";
import { Form } from "../form/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/style.css";

export const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const nameRef = useRef("");
    const idRef = useRef("");
    const emailRef = useRef("");
    const addressRef = useRef("");



    const sendEmployeeForm = async (e) => {
        e.preventDefault();

        const Name = nameRef.current.value;
        const id = idRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;

        if (!address || !email || !id || !Name) {
            toast(`form must be valid`);
            return;
        }

        const message = isEmailValid(Name, email);
        if (message) {
            toast(message);
            return;
        }



        try {
            const data = await createEmployee({ Name, id, email, address })
            toast(data.message, {
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
            });
            setTimeout(() => window.location = window.href, 5000)

        } catch (err) {
            toast(err.message);
        }


    }



    return (
        <>
            <button onClick={() => setShowModal(e => !e)} className="modal-btn" type="button" data-modal-toggle="authentication-modal">
                Add employee
            </button>
            {showModal && <div tabindex="-1" aria-hidden="true" className="fixed top-0 right-50 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
                <div className="modal-container-form">

                    <div className="svg-container">
                        <div className="svg">
                            <button onClick={() => setShowModal(e => !e)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <Form {...{ addressRef, sendEmployeeForm, nameRef, emailRef, idRef }} />
                    </div>
                </div>
            </div>

            }
            <ToastContainer />

        </>
    )
}