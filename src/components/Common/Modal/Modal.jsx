import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ serviceData }) => {
    const iconSize = 30;
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Ver
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font-semibold">Informações do Serviço</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <p className="text-black mt-2">
                                            <IoCloseCircle size={iconSize} />
                                        </p>
                                    </button>
                                </div>
                                {/* <div className="relative p-6 flex-auto">
                                    <h1>{serviceData.nome}</h1>
                                </div> */}
                                <div className="p-4 md:p-5 space-y-4">
                                    <h2 className="text-base md:text-center sm:text-xl md:text-2xl lg:text-3xl text-black mb-4">
                                        {serviceData.nome}
                                    </h2>
                                    <p className="text-base leading-relaxed text-black dark:text-gray-400">
                                        {serviceData.descricao}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Fechar
                                    </button>
                                    <button
                                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 
                                        py-2 px-6 rounded-full text-lg font-semibold transition duration-300 
                                        ease-in-out transform hover:scale-105 hover:shadow-lg"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Agendar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default Modal;
