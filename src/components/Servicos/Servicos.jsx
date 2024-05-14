import React from "react";
import servicosData from "../../data/data.json";
import Modal from "../Common/Modal/Modal";

const Servicos = () => {
    return (
        <section id="Servicos" className="pt-10 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 2xl:pb-24">
            <div className="text-center">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                    Nossos Serviços
                </h2>
            </div>
            <div className="text-center p-8 bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {servicosData.servicos.map((servico, index) => (
                        <div key={index} className="group cursor-pointer relative">
                            <img
                                src={servico.imagem}
                                alt={servico.nome}
                                className="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 top-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Modal servico={servico} />
                            </div>
                            <div className="mt-4">
                                <h5 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                    {servico.nome}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicos;
