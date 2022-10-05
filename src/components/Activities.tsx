import React from 'react'
import i_security from '../assets/images/icon-security.svg';
import i_access from '../assets/images/icon-access-anywhere.svg';
import i_collab from '../assets/images/icon-collaboration.svg';
import i_any from '../assets/images/icon-any-file.svg';

interface ActT {
  img: string,
  title: string,
  info: string
}

const acs: ActT[] = [
  {
    img: `${i_access}`,
    title: "Access your files, anywhere",
    info: "The ability to use smartphone, tablet, or computer to access your account means your files follow you everywhere."
  },
  {
    img: `${i_security}`,
    title: "Secuurity you can trust", 
    info: "2-factor authentication and user-controlled encryprion are just a acouple of the security features we allow to help secure your files."
  },
  {
    img: `${i_collab}`,
    title: "Real0time collaboraton",
    info: "Securely cgare files and folders with fruends, family and cooeagues for lice collaboratuin. No emauk attachments required.",
  },
  {
    img: `${i_any}`,
    title: "Store any type of file",
    info: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to securely stored and shared"
  }
]

const Act: React.FC<ActT> = (props) => {
  const { img, title, info } = props;
  return (
    <div className='flex flex-col items-center text-center text-white'>
      <img src={img} alt="" className='w-2/12 h-3/4' />
      <article className='mt-9'>
        <h2 className='font-bold text-lg tracking-wider'>{title}</h2>
        <p className='text-sm mt-1'>{info}</p>
      </article>
    </div>
  )
}


function Activities() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 mt-24 gap-y-16'>
      {
        acs.map( (a, i)=> {
          return (
            <Act img={a.img} title={a.title} info={a.info} key={i} />
          )
        })
      }
    </div>
  )
}

export default Activities