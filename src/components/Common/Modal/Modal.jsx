import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ servico, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    const iconSize = 30;

    const handleModalClose = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <>
            <button
                className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                type="button"
                onClick={() => setShowModal(true)}
            >
                View
            </button>
            {showModal ? (
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                    <div className="bg-rose-100 rounded-lg p-8 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-3xl font-semibold">Informações do Serviço</h3>
                            <button className="text-gray-500" onClick={handleModalClose}>
                                <IoCloseCircle size={iconSize} />
                            </button>
                        </div>
                        {/* <div className="p-4 md:p-5 space-y-4">
                            <h2 className="text-base md:text-center sm:text-xl md:text-2xl lg:text-3xl text-black mb-4">
                                {serviceData.nome}
                            </h2>
                            <p className="text-base leading-relaxed text-black dark:text-gray-400">
                                {serviceData.descricao}
                            </p>
                        </div> */}
                        <div className="p-4 md:p-5 space-y-4">
                            <h2 className="text-base md:text-center sm:text-xl md:text-2xl lg:text-3xl text-black mb-4">
                                {servico.nome}
                            </h2>
                            <p className="text-base text-left leading-relaxed text-black dark:text-gray-400">
                                {servico.descricao}
                            </p>
                        </div>
                        {/* <img src={servico.imagem} alt={servico.nome} className="w-full mb-4" /> */}
                        {/* <p className="text-gray-800">{servico.descricao}</p> */}
                        <div className="flex justify-end mt-6">
                            <button
                                className="text-red-500 font-bold uppercase mr-4"
                                onClick={handleModalClose}
                            >
                                Fechar
                            </button>
                            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                <Link to='/Agendamento'>Agendar</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
