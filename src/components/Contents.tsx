import React from 'react'
import stay from '../assets/images/illustration-stay-productive.png'

function Contents() {
  return (
    <div className='mt-10 text-white'> 
      <img src={stay} alt=""  className='mx-auto'/>
      <article>
        <h2 className='text-xl font-bold'>Stay productive, wherevre you are</h2>
        <p>
          Naver let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachnebts required.
        </p>

        <a href='/'>See how Fylo work</a>
      </article>
    </div>
  )
}

export default Contents