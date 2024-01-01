import React from 'react'

const Thankyou = () => {
    return (
        <div className="w-[80%] mx-auto my-8 p-8 bg-white shadow-lg rounded-lg text-center">
            <h1 className="text-3xl font-bold mb-4">Thank You for Applying!</h1>
            <p className="text-gray-700 mb-4">
                Thank you for applying to XLoop. An email has been sent to the provided email address confirming
                the receipt of your job application.
            </p>
            <p className="text-gray-700 mb-4">
                You can view the status of your application in your dashboard.
            </p>
        </div>
    )
}

export default Thankyou