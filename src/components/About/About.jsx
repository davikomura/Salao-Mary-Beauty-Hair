import React, { useState } from "react";
import logo from "../../assets/logo_salao.jpg"
import dona from "../../assets/img_dona2.png"

const About = () => {
    return(
        <section id="About" className="pt-10 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl lg:text-5xl">
                            Sobre Nós
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-white dark:text-gray-300 md:mt-8">
                        No Mary Beauty Hair, estamos dedicados a realçar a sua beleza com elegância e sofisticação. Com 13 anos de experiência no mercado, nosso salão é especializado em oferecer serviços de alta qualidade, sempre priorizando o cuidado e a satisfação dos nossos clientes. Localizados em São Luís, proporcionamos um ambiente acolhedor e moderno, onde você pode relaxar enquanto recebe um atendimento personalizado e profissional.

Seja para transformar o visual ou para manter a sua beleza, estamos aqui para garantir que você saia do nosso salão se sentindo ainda mais confiante e deslumbrante. Agende o seu horário e experimente o que há de melhor em cuidados de beleza.
                        </p>
                    </div>

                    <div className="relative bg-rose-300 rounded-full p-4">
                        {/* <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" /> */}

                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={dona} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About