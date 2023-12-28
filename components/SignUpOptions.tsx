'use client'
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'

interface Props {
    setShowSignModal: React.Dispatch<React.SetStateAction<boolean>>
}
const SignUpOptions: React.FC<Props> = ({setShowSignModal}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handleGoogleSignIn() {
        signIn('google', { redirect: true, callbackUrl: "http://localhost:3000/", prompt: 'consent' })

    }
    function handleLinkedinSignIn() {
        signIn('linkedin', { redirect: true, callbackUrl: "http://localhost:3000/", prompt: 'consent' })
    }
    function handleMicrosoftSignIn() {
        signIn('azure-ad', { redirect: true, callbackUrl: "http://localhost:3000/", prompt: 'consent' })
    }
    return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
        <div className='bg-white p-6 rounded-lg w-80'>
            <div className='flex justify-end'>
                <button
                    type='button'
                    onClick={() => setShowSignModal(false)}
                    className='text-gray-500 hover:text-gray-700'
                >
                    X
                </button>
            </div>
            <form>
                <input
                    type='text'
                    placeholder='Username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='border-b-2 border-gray-300 mb-4 mt-2 focus:outline-none w-full py-2'
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='border-b-2 border-gray-300 mb-4 focus:outline-none w-full py-2'
                />
                <button
                    type='button'
                    onClick={() => console.log(`Sign up with Credentials ${username} ${password}`)}
                    className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none'
                >
                    Sign In
                </button>
            </form>
            <p className='mt-4 font-bold text-xl text-center'>---OR---</p>
            <div className='mt-4'>
                <button
                    type='button'
                    onClick={handleGoogleSignIn}
                    className='w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none'
                >
                    Sign up with Google
                </button>
                <button
                    type='button'
                    onClick={handleLinkedinSignIn}
                    className='w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 focus:outline-none mt-2'
                >
                    Sign up with LinkedIn
                </button>
                <button
                    type='button'
                    onClick={handleMicrosoftSignIn}
                    className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:outline-none mt-2'
                >
                    Sign up with Microsoft
                </button>
            </div>
        </div>
    </div>
    )
}


    export default SignUpOptions