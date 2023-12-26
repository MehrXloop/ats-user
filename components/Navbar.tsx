'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
    const { data: session } = useSession()
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const goBack = () => {
        router.back();
    };

    function handleGoogleSignIn() {
        signIn('google', { redirect: true, callbackUrl: "http://localhost:3000/", prompt: 'consent' })

    }
    function handleLinkedinSignIn() {
        signIn('linkedin', { redirect: true, callbackUrl: "http://localhost:3000/", prompt: 'consent' })
    }
    function handleMicrosoftSignIn() {
        signIn('azure-ad', { redirect: true, callbackUrl: "http://localhost:3000/", prompt: 'consent' })
    }
    console.log(session?.user)
    const handleSignOut = async () => {
        await signOut({ redirect: true, callbackUrl: 'http://localhost:3000/' });
        localStorage.clear();
        setToggleDropdown(false);
    }

    return (
        <nav className='flex justify-between items-center m-6'>
            <div className='flex items-center gap-3'>
                <button onClick={goBack}>
                <span className='font-bold text-2xl'>&lsaquo;</span> 
                </button>
                <h1 className='font-bold text-xl'>Logo</h1>
            </div>
            {session && session?.user && session.user.image ? (
                <div className='relative'>
                    <div className='flex items-center gap-2 cursor-pointer' onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <Image
                            src={session.user.image}
                            height={37}
                            width={37}
                            className='rounded-full'
                            alt='profile'
                        />
                        <span>
                            {session.user.name}
                            {toggleDropdown ? ' \u2191' : ' \u2193'}
                        </span>
                    </div>

                    {toggleDropdown && (
                        <div className='absolute top-full right-0 mt-2 bg-white shadow-md w-full'>
                            <div className='p-2'>
                                <Link
                                    href='/profile'
                                    className='block py-2'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    href='/settings'
                                    className='block py-2'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Settings
                                </Link>
                                <Link
                                    href='/help'
                                    className='block py-2'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    help
                                </Link>
                                <button
                                    type='button'
                                    onClick={handleSignOut}
                                    className='block my-2 black_btn'
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className='flex'>
                    <button type='button' className='black_btn mr-6' onClick={() => setShowModal(true)}>
                        Login
                    </button>
                    <button type='button' className='outline_btn' onClick={() => setShowModal(true)}>
                        SignUp
                    </button>
                </div>
            )}


            {showModal && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg w-80'>
                        <div className='flex justify-end'>
                            <button
                                type='button'
                                onClick={() => setShowModal(false)}
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
            )}
        </nav>
    )
}

export default Navbar