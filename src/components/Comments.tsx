import React from 'react'
import p1 from '../assets/images/profile-1.jpg'
import p2 from '../assets/images/profile-2.jpg'
import p3 from '../assets/images/profile-3.jpg'
import q from '../assets/images/bg-quotes.png'

interface Profile {
  img: string,
  name: string,
}

const Comm: Array<Profile> = [
  {
    img: `${p1}`,
    name: "Satish Patel",
  },
  {
    img: `${p2}`,
    name: "Satish Patel",
  },
  {
    img: `${p3}`,
    name: "Satish Patel",
  }
]

const Com:React.FC<Profile> = (props) => {
  const { img, name } = props;
  return (
    <div className='text-white bg-gray-800 px-4 py-9 rounded-lg '>
      <div className="info">
        <p className='text-[12px]'>
          Fulo has impoced our team producticirt by an order of magnityde, Sice making the swich our team has become a we;;=oild collaboration machine.
        </p>
      </div>

      <article className='flex gap-4 items-center mt-4'>
        <img src={img} alt="" className='w-[15%] rounded-full h-full' />
        <section className=''>
          <h4 className='text-sm'>{name}</h4>
          <p className='text-[10px] text-gray-400'>Founder & CEO, Huddle</p>
        </section>
      </article>
    </div>
  )
}

const rere = (Comm: Array<Profile>) => {
  return (
    Comm.map( (p, i) => {
      return (
        <Com img={p.img} name={p.name} key={i} />
      )
    })
  )
}

function Comments() {
  return (
    <div className='mt-24 px-2'>
      <img src={q} alt="" className="w-1/12 ml-3" />
      <div className='flex flex-col md:flex-row gap-5' >
      {rere(Comm)}
      </div>
    </div>
  )
}

export default Comments