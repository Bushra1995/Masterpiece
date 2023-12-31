import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

function Inputs() {
    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user_id;
        console.log(userId);

        // Function to fetch payment data from the server
        const fetchPaymentData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/payment/getpayment"
                    // "http://localhost:4000/checkout/getcheckout"  make this work instead of the above line
                    // to make a GET rquest from checkout collection to retrive the reserved tests and the patients info and view it in the lab profile
                    // modify the below fields to suit the requested data
                );
                const filteredData = response.data.filter(
                    (dataItem) => dataItem.user_id === userId
                );

                setPaymentData(filteredData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPaymentData();
    }, []);

    console.log(paymentData);
    return (
        <>
            <div className="w-full sm:px-6 flex flex-wrap items-center justify-center text-center">
                <div className="w-75 bg-white shadow px-2 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <h1 className="text-3xl text-center text-black">Test Reservations</h1>
                    <br />
                    <hr />
                    <br />
                    <table className="w-full whitespace-nowrap">
                        <thead className="bg-gray-100">
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-center">
                                    <div className="relative flex justify-center items-center h-full">
                                        <div className="dark:bg-gray-800">
                                            <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">
                                                Patient ID
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="font-normal text-center">
                                    <div className="relative flex justify-center items-center h-full">
                                        <div className="dark:bg-gray-800">
                                            <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">
                                                Test Name
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="font-normal text-center">
                                    <div className="relative flex justify-center items-center h-full">
                                        <div className="dark:bg-gray-800">
                                            <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">
                                                Patient Name
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="font-normal text-center">
                                    <div className="relative flex justify-center items-center h-full">
                                        <div className="dark:bg-gray-800">
                                            <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-xl leading-3 tracking-normal font-normal">
                                                Patient Phone Number
                                            </p>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {/* change this table body to match the above field infos */}
                            {paymentData.map((dataItem) => (
                                <tr
                                    className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100"
                                    key={dataItem._id}
                                >
                                    <td className="pl-4 cursor-pointer">
                                        <div className="flex items-center justify-center">
                                            <div className="pl-4">
                                                <p className="font-medium">Engineering Management</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-12">
                                        <p className="text-sm font-medium leading-none text-gray-800 text-center">
                                            $ {dataItem.amountOfDonation}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center"></div>
        </>
    );
}

export default Inputs;
