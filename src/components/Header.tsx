import React from "react";
import illustration from '../assets/images/illustration-intro.png'
import bg_curvy_desktop from '../assets/images/bg-curvy-mobile.svg'

function Header() {
  return (
      <header className="" >
      <div className="bag-img relative bg-slate-800">
        <img src={illustration} alt="" className="w-4/5 mx-auto relative top-6 z-20" />
        <img src={bg_curvy_desktop} alt="" className="absolute  w-full  bg-slate-800" />
      </div>
      <article className="text-center text-white relative mt-10 px-10">
        <h1 className="text-2xl font-semibold">
          All your files in one secure
          <br />
          location, accessible
          <br />
          anywhere.
        </h1>
        <p className="mt-2">
          fyle stures alll your most inportant files in <br/>
          one secuie locatuin.Access them wherever<br /> 
          you need, share and collaborate with friends,<br />
          fanily, and co-workers.
        </p>
        <button className="bg-cyan-400 text-center w-3/4 mx-auto py-4 rounded-full mt-10">
          Get Started
        </button>
      </article>
    </header>
  );
}

export default Header;
