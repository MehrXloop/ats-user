import UserPanel from '@/components/UserPanel'
import React from 'react'

const Profile = () => {
  return (
    <div className='flex items-start m-4'>
      <div>
        <UserPanel/>
      </div>
      <div className='mt-6 w-full'>
        <h1 className='font-bold text-3xl mb-6'>Profile</h1>
        <div className='border-b-2 border-slate-950'></div>
        <div className='mt-9'>
        {/* form */}
        </div>
      </div>
    </div>
  )
}

export default Profile