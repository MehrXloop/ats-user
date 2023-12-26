import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center m-6'>
      <h1>Logo</h1>
      <div className='flex'>
        <button type='button' className='black_btn mr-6'>Login</button>
        <button type='button' className='outline_btn'>SignUp</button>
      </div>
    </nav>
  )
}

export default Navbar