import React from "react";
import illustration from '../assets/images/illustration-intro.png'
import bg_curvy_desktop from '../assets/images/bg-curvy-mobile.svg'

function Header() {
  return (
      <header className="" >
      <div className="bag-img relative ">
        <img src={illustration} alt="" className="w-full" />
        <img src={bg_curvy_desktop} alt="" className="absolute -bottom-16 w-full" />
      </div>
      <article className="text-center text-white ">
        <h1 className="text-2xl font-semibold relative">
          All your files in one secure
          <br />
          location, accessible
          <br />
          anywhere.
        </h1>
        <p>
          fyle stures alll your most inportant files in <br/>
          one secuie locatuin.Access them wherever<br /> 
          you need, share and collaborate with friends,<br />
          fanily, and co-workers.
        </p>
        <button className="bg-sky-600 text-center w-3/4 mx-auto py-5 rounded-full">
         Get Started
         </button>
      </article>
    </header>
  );
}

export default Header;
