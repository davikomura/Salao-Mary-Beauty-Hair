import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contacts = () => {
    const iconSize = 36; // Tamanho dos ícones

    return(
        <section id="Contacts" className="pt-10 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="text-center p-8 bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mb-28">
                    <div className="group cursor-pointer relative">
                        <h2 className="font-gistesy text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">
                            <span className="text-white">Mary </span>
                            <span className="text-red-600">Beauty </span>
                            <span className="text-white">Hair</span>
                        </h2>
                        <div className="flex justify-center mt-4">
                            <a href="https://www.facebook.com/SalaoMaryBeauty" 
                            target="_blank" 
                            className="text-blue-500 mr-6 hover:text-blue-700 transition-colors duration-300"><FaFacebook size={iconSize} /></a>
                            <a href="#" className="text-green-500 mr-6 hover:text-green-700 transition-colors duration-300"><FaWhatsapp size={iconSize} /></a>
                            <a href="https://www.instagram.com/salaomaryslz/" 
                            target="_blank" 
                            className="text-pink-500 hover:text-pink-700 transition-colors duration-300"><FaInstagram size={iconSize} /></a>
                        </div>
                    </div>
                    <div className="text-left text-white ml-8">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">Email</h2>
                        <p className="mb-6">info@example.com</p>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">Address</h2>
                        <p>425 6th Ave, New York, NY 10046, United States</p>
                    </div>
                    <div className="text-left text-white ml-10">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">Business Hours</h2>
                        <p className="mb-2">Monday – Closed</p>
                        <p className="mb-2">Tuesday : 11.00 – 09.00</p>
                        <p className="mb-2">Wednesday : 11.00 – 09.00</p>
                        <p className="mb-2">Thursday : 11.00 – 09.00</p>
                        <p className="mb-2">Friday : 11.00 – 09.00</p>
                        <p className="mb-2">Saturday : 11.00 – 09.00</p>
                        <p>Sunday : 11.00 – 09.00</p>
                    </div>
                </div>
                <hr className="my-4 border-gray-600"/>
                <div className="text-center text-gray-600 py-4">
                    © {new Date().getFullYear()} Mary Beauty Hair. All Rights Reserved. Design by Davi Komura.
                </div>
            </div>
        </section>
    )
}

export default Contacts;