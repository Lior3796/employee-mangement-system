import { useState } from 'react'

export const Form = ({ sendEmployeeForm, nameRef, emailRef, addressRef, idRef }) => {
    const [nameValue, setNameValue] = useState("");

    return (
        <form onSubmit={(e) => sendEmployeeForm(e)} className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add employee</h3>
            <div>
                <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input ref={nameRef} onChange={(e) => setNameValue(e.target.value.replace(RegExp(/[^A-Z a-z]/gi), ""))} value={nameValue} type="Name" name="Name" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
            </div>
            <div>
                <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input ref={addressRef} type="text" name="address" id="address" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
            </div>
            <div>
                <label for="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your ID</label>
                <input ref={idRef} type="text" pattern="[0-9]{9}" name="id" id="id" placeholder="123456789" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
            </div>
            <div className="flex justify-between">
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            </div>
        </form>
    )
}
