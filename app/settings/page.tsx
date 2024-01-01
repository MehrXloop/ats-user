import UserPanel from '@/components/UserPanel';
import React from 'react';

const Settings = () => {
  return (
    <div className='flex items-start m-4'>
      <div>
        <UserPanel />
      </div>
      <div className='mt-6 w-full'>
        <h1 className='font-bold text-xl mb-6'>Settings</h1>
        <div className='border-b-2 border-slate-950'></div>
        <div className='mt-9'>
          <h2 className='border-b border-gray-300 pb-2'>Account</h2>
          <div className='flex items-center mt-4'>
            <label className='mr-2' htmlFor='email'>
              Email
            </label>
            <input
              id='email'
              value='mehrunissa507@gmail.com'
              className='border border-gray-300 bg-gray-100 px-2 py-1 rounded-md outline-white'
              readOnly
            />
          </div>
          <div className='flex items-center mt-2'>
            <p className='text-gray-500 text-sm mr-2'>
              You can&apos;t change your email; it&apos;s used to sign in and to be contacted by employers
            </p>
          </div>
          <h2 className='border-b border-gray-300 pb-2 mt-4'>Personalization</h2>
          <div className='flex items-center m-4'>
            <input type='checkbox' id='checkbox1' className='mr-2' />
            <label htmlFor='checkbox1'>Make your profile visible to hiring team</label>
          </div>
          <div className='flex items-center m-4'>
            <input type='checkbox' id='checkbox2' className='mr-2' />
            <label htmlFor='checkbox2'>Receive job suggestions emails</label>
          </div>
          <div className='flex items-center m-4'>
            <input type='checkbox' id='checkbox3' className='mr-2' />
            <label htmlFor='checkbox3'>Do you want to delete your account?</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
