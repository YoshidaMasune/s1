import React from 'react'

function GetEary() {
  return (
    <div className='bg-slate-800 px-4 mt-24 py-6 rounded-lg text-white md:w-3/5 md:mx-auto'>
      <header className='text-center '>
         <h2 className='text-lg font-semibold'>Get early access today</h2>
         <p className='mt-4 text-sm'>it only talk a minute to sign up and our free starter tier is extremely generous. if you have any wuestions, our support team would be happy to heflp you.</p>
      </header>
      <section className='mt-8'>
         <input type="email" placeholder='email@gmail.com' className=' text-gray-500 rounded-full w-full px-6 py-3 focus:outline-none' />
         <button className='w-full rounded-full text-center py-3 mt-6 bg-cyan-400' >
            Get Started For Free
         </button>
      </section>
    </div>
  )
}

export default GetEary