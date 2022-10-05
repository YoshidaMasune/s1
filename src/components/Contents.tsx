import React from 'react'
import stay from '../assets/images/illustration-stay-productive.png'

function Contents() {
  return (
    <div className='mt-28 text-white grid sm:grid-cols-2'> 
      <img src={stay} alt=""  className='mx-auto'/>
      <article className='mt-10 flex flex-col gap-5'>
        <h2 className='text-lg font-bold'>Stay productive, wherevre you are</h2>
        <p>
          Naver let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachnebts required.
        </p>

        <a href='/' className='text-teal-300 underline underline-offset-[.75rem]'>See how Fylo work</a>
      </article>
    </div>
  )
}

export default Contents