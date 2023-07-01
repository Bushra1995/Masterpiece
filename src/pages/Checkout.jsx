import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SummaryTable from "../components/UI/SummaryTable";


const Checkout = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [changeText1, setChangeText1] = useState("Gender");
    const [changeText2, setChangeText2] = useState("Age Group");


    const HandleText1 = (e) => {
        setChangeText1(e);
        setDropdown1(false);
    };

    const HandleText2 = (e) => {
        setChangeText2(e);
        setDropdown2(false);
    };

    return (

        <div className="overflow-y-hidden">
            <div className="flex-col justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 bg-gray-100 shadow mb-6 mt-6">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-col justify-center items-center lg:space-x-10 2xl:space-x-20 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className="row">
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                        </div>
                        <div className="mt-2">
                            <Link to="/" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                Back to Home
                            </Link>
                        </div>

                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">Complete Your Information</p>
                        </div>
                        <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Middle Name" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Third Name" />
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" />
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <p id="button1" className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                                        {changeText1}
                                    </p>
                                    <button onClick={() => setDropdown1(!dropdown1)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                        <svg id="close" className={` transform ${dropdown1 ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown1 ? "" : "hidden"}`}>
                                        <div className="flex flex-col  w-full">
                                            <p tabIndex={0} onClick={() => HandleText1("Female")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Female
                                            </p>
                                            <p tabIndex={0} onClick={() => HandleText1("Male")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Male
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative w-full">
                                    <p id="button1" className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full">
                                        {changeText2}
                                    </p>
                                    <button onClick={() => setDropdown2(!dropdown2)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0">
                                        <svg id="close" className={` transform ${dropdown2 ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown2 ? "" : "hidden"}`}>
                                        <div className="flex flex-col  w-full">
                                            <p tabIndex={0} onClick={() => HandleText2("Newborns")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Newborns
                                            </p>
                                            <p tabIndex={0} onClick={() => HandleText2("Children")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Children
                                            </p>
                                            <p tabIndex={0} onClick={() => HandleText2("Adults")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Adults
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
                                <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" />
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="w-full">
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Card Holder Name" />
                                </div>
                                <div className="w-full">
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Card Number" />
                                </div>
                            </div>
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="w-full">
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="CVC" />
                                </div>
                                <div className="w-full">
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="date" placeholder="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                    <button
                        className="mt-2 font-medium leading-4 py-3 px-4 text-white text-center text-decoration-none rounded"
                        style={{ backgroundColor: '#3AA6B9' }}
                    >
                        Submit
                    </button>
                </div>
            </div>
            {/* ------ Render Summary Table Here ------ */}
            <div className="w-3/4 mx-auto">
                <SummaryTable />
            </div>
            <Link to="#" className="flex justify-center items-center text-decoration-none">
                <button
                    className="mt-2 mb-4 font-medium leading-4 py-4 w-50 md:w-4/12 lg:w-50 text-white text-center text-decoration-none rounded"
                    style={{ backgroundColor: '#3AA6B9' }}
                >
                    Complete Payment
                </button>
            </Link>
        </div>

    );
}

export default Checkout