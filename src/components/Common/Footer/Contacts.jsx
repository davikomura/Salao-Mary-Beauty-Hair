import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import MasterCard from '../../../assets/mc_symbol.svg';
import visa from '../../../assets/visa-10.svg';

const Contacts = () => {
    const iconSize = 24;

    return (
        <section id="Contacts" className="pt-10 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="text-center p-8 bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mb-28">
                    <div className="group relative sm:ml-8">
                        <h2 className="text-lg font-bold md:text-left sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">
                            Conecte-se conosco!
                        </h2>
                        <div className="flex justify-center sm:justify-start mt-4 mb-4">
                            <a href="https://www.facebook.com/SalaoMaryBeauty"
                                target="_blank"
                                className="text-blue-500 mr-6 hover:text-blue-700 transition-colors duration-300"><FaFacebook size={iconSize} /></a>
                            <a href="#" className="text-green-500 mr-6 hover:text-green-700 transition-colors duration-300"><FaWhatsapp size={iconSize} /></a>
                            <a href="https://www.instagram.com/salaomaryslz/"
                                target="_blank"
                                className="text-pink-500 hover:text-pink-700 transition-colors duration-300"><FaInstagram size={iconSize} /></a>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-bold md:text-left sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">
                                Formas de Pagamento
                            </h2>
                            <div className="flex justify-center sm:justify-start mt-4 mb-4">
                                <p className="text-pix-color mr-6">
                                    <FaPix size={iconSize} />
                                </p>
                                <p className="mr-6 mt-2">
                                    <img src={MasterCard} alt="MasterCard" width={iconSize} height={iconSize} />
                                </p>
                                <p className="mt-2.5">
                                    <img src={visa} alt="Visa" width={iconSize} height={iconSize} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-white sm:ml-8">
                        <h2 className="text-center font-bold md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">Email</h2>
                        <p className="mb-6 text-center md:text-left">maryoliver.mo63@gmail.com</p>
                        <h2 className="text-center font-bold md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">Endereço</h2>
                        <p className="text-center md:text-left">R. Fé Em Deus, 610 - Quadra 113 - Jardim São Cristovão, São Luís - MA, 65055-190</p>
                    </div>
                    <div className="text-left text-white sm:ml-8">
                        <h2 className="text-center font-bold md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4">Horários de Funcionamento </h2>
                        <p className="text-center md:text-left mb-2">Segunda-Feira : Fechado</p>
                        <p className="text-center md:text-left mb-2">Terça-Feira : 08:00 – 19:00</p>
                        <p className="text-center md:text-left mb-2">Quarta-Feira : 08:00 – 19:00</p>
                        <p className="text-center md:text-left mb-2">Quinta-Feira : 08:00 – 19:00</p>
                        <p className="text-center md:text-left mb-2">Sexta-Feira : 08:00 – 19:00</p>
                        <p className="text-center md:text-left mb-2">Sábado : 08:30 – 19:00</p>
                        <p className="text-center md:text-left">Domingo : Fechado</p>
                    </div>
                </div>
                <hr className="my-4 border-gray-600" />
                <div className="text-center text-gray-600 py-4">
                    © {new Date().getFullYear()} Mary Beauty Hair. All Rights Reserved. Design by Davi Komura.
                </div>
            </div>
        </section>
    )
}

export default Contacts;
