import { useState } from 'react';
import { deleteEmployee } from '../../../services/service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/style.css";

export const Card = ({ Name, id, address, email }) => {
    const [showModal, setShowModal] = useState(false);

    const deleteUserFromDb = async (id) => {
        try {
            const data = await deleteEmployee(id);
            toast(data.message, {
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
            });
            setTimeout(() => window.location = window.href, 5000)
        } catch (err) {
            toast(err);
        }



    }
    return (
        <div className="card-container">
            <div className="p-5">
                <a href="#">
                    <h5 className="card-name">{Name}</h5>
                </a>
                <p className="card-details">{address}</p>
                <p className="card-details">{email}</p>

                <button onClick={() => { setShowModal(e => !e) }} href="#" className="card-btn">
                    delete
                </button>
            </div>
            {
                showModal && (
                    <>
                        <div id="popup-modal" tabindex="-1" className="delete-modal-container" aria-hidden="true">
                            <div className="delete-modal">

                                <div className="delete-icon-btn">

                                    <div className="svg-block">
                                        <button onClick={() => { setShowModal(e => !e) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>

                                    <div className="p-6 pt-0 text-center">
                                        <svg className="modal-btn-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this Employee?</h3>
                                        <button onClick={() => deleteUserFromDb(id)} data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Yes, I'm sure
                                        </button>
                                        <button data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
            <ToastContainer />

        </div>




    )
}


