'use client'
import UserPanel from '@/components/UserPanel'
import Link from 'next/link'
import React from 'react'

const Applications = () => {

  return (
    <>
      <div className='flex items-start m-4'>
        <div>
          <UserPanel />
        </div>
        <div className='mt-6 w-full'>
          <h1 className='font-bold text-3xl mb-6'>Application</h1>
          <div className='border-b-2 border-slate-950'></div>
          <div className='mt-9'>
            {/* form */}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-[80%] mx-auto text-left font-light">
                <thead className="border-b font-medium text-xl dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">Job Post</th>
                    <th scope="col" className="px-6 py-4">Position</th>
                    <th scope="col" className="px-6 py-4">Apply Job</th>
                    <th scope="col" className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4">27-Nov-2023</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className='font-bold'>Sales Development Representative</span>
                      <br />
                      Lahore, Punjab, Pakistan
                      <br />
                      Full Time
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">29-Nov-2023</td>
                    <td className="whitespace-nowrap px-6 py-4">Submitted</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center flex-col mt-20'>
        <h1 className='font-bold text-4xl'>You&apos;re Applied For A Job</h1>
        <p className='text-center text-xl mt-2'>Here you will find all the jobs where you,ve applied and also check your job <br /> status apply for more jobs that interest you.</p>
        <Link href='/' className='mt-10 border-2 dark:border-neutral-500 p-2'>Find your dream jobs here</Link>
      </div>

    </>
  )
}

export default Applications