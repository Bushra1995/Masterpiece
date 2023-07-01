import React from "react";
import '../../Css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BsTelephoneForwardFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
// import '../Css/navbar.css';

const SocialNav = () => {

    return (
<>
<div className="header-top theme-bg">
<div className="container">
    <div className="row">
        <div className="col-md-8 mb-2">
            <div className="header-top-left">
                <ul>
                    <li>
                        <a href="tel:+962786795067">
                            <BsTelephoneForwardFill className="icons" /> +962786795067
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-md-4">
            <div className="header-top-right d-none d-md-block">
                <ul>
                    <li>
                        <a href="https://github.com/Bushra1995">
                            <BsGithub className="icons"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:bushra95ga@gmail.com">
                            <TfiEmail className="icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bushra-abu-rahmeh-686b38165">
                            <BsLinkedin className="icons"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
</>
    )
}

export default SocialNav




// -------------------------- use this as nav -------------------------


// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// const LaboratoryProfile = () => {
//     const [isOpen, setIsOpen] = useState(false);
    
//     return (
//         <>

// <div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
//   <div x-data="{ isOpen: false }" className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
//     <div className="flex flex-row items-center justify-between lg:justify-start">
//       <a href="/" className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl">
//         <span className="lg:text-lg uppercase focus:ring-0">
//           windstatic
//         </span>
//       </a>
//       <button onClick={() => isOpen = !isOpen} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
//         <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//           <path className="{ 'hidden': isOpen, 'inline-flex': !isOpen }" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           <path className="{ 'hidden': !isOpen, 'inline-flex': isOpen }" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//         </svg>
//       </button>
//     </div>
//     <nav className="{ 'flex': isOpen, 'hidden': !isOpen } flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
//       <a href="#" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto">
//         About
//       </a>
//       <a href="#" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600">
//         Contact
//       </a>
//       <a href="#" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600">
//         Documentation
//       </a>

//       <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
//         <button className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" fdprocessedid="9lhwxc">
//           Sign in
//         </button>
//         <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black" fdprocessedid="vrf41">
//           Sign up
//         </button>
//       </div>
//     </nav>
//   </div>
// </div>


//         </>
//     )
// }

// export default LaboratoryProfile