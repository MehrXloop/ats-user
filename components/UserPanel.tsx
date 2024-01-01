'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const UserPanel = () => {
    const { data: session } = useSession()
    const pathname = usePathname()

    return (
        <div className='user_card p-5 shadow-xl'>
            <div className='flex items-center justify-center flex-col gap-2'>
                <div>
                    {session?.user?.image &&
                        <Image
                            src={session?.user?.image}
                            height={37}
                            width={37}
                            className='rounded-full'
                            alt='profile'
                        />}
                </div>
                <h1 className='font-bold text-xl'>{session?.user?.name}</h1>
            </div>
            <div className='flex justify-center flex-col mt-6 items-center'>
                <Link
                    href='/profile'
                    className={`block py-2 text-xl ${pathname === '/profile' ? 'border-b-2 border-slate-950' : ''}`}
                >
                    Profile
                </Link>
                <Link
                    href='/application'
                    className={`block py-2 text-xl ${pathname === '/application' ? 'border-b-2 border-slate-950' : ''}`}
                >
                    Application
                </Link>
                <Link
                    href='/settings'
                    className={`block py-2 text-xl ${pathname === '/settings' ? 'border-b-2 border-slate-950' : ''}`}
                >
                    Settings
                </Link>
            </div>
        </div>
    )
}

export default UserPanel