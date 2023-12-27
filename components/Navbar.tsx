'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SignUpOptions from './SignUpOptions'


const Navbar = () => {
    const { data: session } = useSession()
    const router = useRouter();

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [showSignModal, setShowSignModal] = useState(false);


    const goBack = () => {
        router.back();
    };

    const handleSignOut = async () => {
        await signOut({ redirect: true, callbackUrl: 'http://localhost:3000/' });
        localStorage.clear();
        setToggleDropdown(false);
    }
    console.log(session?.user)
    return (
        <nav className='flex justify-between items-center m-6'>
            <div className='flex items-center gap-3'>
                <button onClick={goBack}>
                    <span className='font-bold text-2xl'>&lsaquo;</span>
                </button>
                <h1 className='font-bold text-xl'>Logo</h1>
            </div>
            {session?.user ? (
                <div className='relative'>
                    <div className='flex items-center gap-2 cursor-pointer' onClick={() => setToggleDropdown(!toggleDropdown)}>
                        {session?.user?.image == null ? (
                            <Image
                                src='/avatar.png'
                                height={37}
                                width={37}
                                className='rounded-full'
                                alt='profile'
                            />
                        ) : (
                            <Image
                                src={session.user.image}
                                height={37}
                                width={37}
                                className='rounded-full'
                                alt='profile'
                            />
                        )}
                        <span>
                            {session.user.name}
                            {toggleDropdown ? ' \u2191' : ' \u2193'}
                        </span>
                    </div>

                    {toggleDropdown && (
                        <div className='absolute top-full right-0 mt-2 bg-white shadow-md w-full z-10'>
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
                    <button type='button' className='black_btn mr-6' onClick={() => setShowSignModal(true)}>
                        Login
                    </button>
                    <button type='button' className='outline_btn' onClick={() => setShowSignModal(true)}>
                        SignUp
                    </button>
                </div>
            )}

            {showSignModal && <SignUpOptions setShowSignModal={setShowSignModal} />}
        </nav>
    )
}

export default Navbar