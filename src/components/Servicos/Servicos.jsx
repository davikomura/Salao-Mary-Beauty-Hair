import React, { useState } from "react";
import hair_cut from "../../assets/hair-cut.jpg"
import nails from "../../assets/nails.jpg"
import hair_color from "../../assets/hair-color.jpg"
import sobrancelha from "../../assets/sobrancelha.jpg"
import tratamento_capilar from "../../assets/tratamento-capilar.jpg"
import alisamento from "../../assets/alisamento.jpg"
import penteados from "../../assets/penteados.jpg"
import { Link } from "react-router-dom";
import Modal from "../Common/Modal/Modal";

const Servicos = () => {
    const servicos = [
        { nome: "Corte de Cabelo", imagem: hair_cut, descricao: "Desfrute de uma transformação de estilo com os nossos serviços de corte de cabelo. Nossos talentosos estilistas estão aqui para realçar a sua beleza natural e trazer à vida o visual dos seus sonhos. Com técnicas modernas e produtos de alta qualidade, garantimos um corte personalizado que se adapta perfeitamente ao seu estilo e tipo de cabelo. Do clássico ao moderno, do curto ao longo, estamos preparados para criar o look perfeito que combina com você. Agende hoje mesmo e experimente a arte da transformação capilar em mãos habilidosas e criativas." },
        { nome: "Unhas", imagem: nails, descricao: "Descubra a arte de cuidar das suas mãos e pés em nosso serviço especializado de unhas. Nossa equipe dedicada de manicures e pedicures oferece uma experiência relaxante e rejuvenescedora, enquanto transforma suas unhas em verdadeiras obras de arte. Com uma variedade de cores vibrantes, técnicas de aplicação impecáveis e produtos de alta qualidade, garantimos resultados deslumbrantes que elevam a sua beleza. De manicures clássicas a designs criativos, estamos aqui para satisfazer todas as suas necessidades de cuidados com as unhas. Mime-se com uma sessão de cuidados com as unhas e saia sentindo-se confiante e radiante. Agende hoje mesmo e descubra o poder de unhas bem cuidadas." },
        { nome: "Coloração de Cabelo", imagem: hair_color, descricao: "Transforme o seu visual com os nossos serviços de coloração de cabelo. Nossos coloristas experientes estão aqui para ajudar você a encontrar a cor perfeita que realça a sua beleza única. Com uma variedade de tonalidades e técnicas de coloração, oferecemos desde mudanças sutis até transformações ousadas. Utilizamos produtos de alta qualidade para garantir resultados duradouros e um cabelo saudável e brilhante. Nossa equipe está sempre atualizada com as tendências mais recentes em coloração, garantindo que você saia do salão com um visual atualizado e cheio de estilo. Agende hoje mesmo e dê vida à sua cor de cabelo dos sonhos." },
        { nome: "Sobrancelha", imagem: sobrancelha, descricao: "Realce a beleza dos seus olhos com os nossos serviços de design de sobrancelha. Nossa equipe especializada em design de sobrancelha está aqui para criar uma moldura perfeita para o seu rosto, realçando a sua expressão natural. Utilizando técnicas precisas e produtos de alta qualidade, garantimos sobrancelhas impecáveis que complementam a sua beleza única. Do design clássico à correção de falhas, estamos aqui para atender às suas necessidades específicas. Agende hoje mesmo e descubra como sobrancelhas bem cuidadas podem transformar o seu visual." },
        { nome: "Tratamento Capilar", imagem: tratamento_capilar, descricao: "Mime o seu cabelo com os nossos luxuosos tratamentos capilares. Nossa equipe de especialistas está aqui para revitalizar e restaurar a saúde e a beleza dos seus fios. Utilizando produtos de alta qualidade e técnicas avançadas, oferecemos uma variedade de tratamentos que nutrem, hidratam e fortalecem o seu cabelo. Seja para reparar danos, controlar o frizz ou simplesmente revitalizar o brilho, estamos aqui para cuidar do seu cabelo da raiz às pontas. Agende hoje mesmo e experimente a indulgência de um tratamento capilar feito sob medida para as suas necessidades." },
        { nome: "Alisamento", imagem: alisamento, descricao: "Desfrute de cabelos lisos e sedosos com os nossos serviços de alisamento. Nossa equipe de especialistas utiliza técnicas avançadas e produtos de alta qualidade para garantir resultados suaves e duradouros. Seja para reduzir o volume, controlar o frizz ou obter um cabelo mais gerenciável, estamos aqui para transformar o seu visual. Com um compromisso com a saúde do seu cabelo, garantimos um alisamento seguro e eficaz que realça a sua beleza natural. Agende hoje mesmo e descubra o poder de um cabelo liso e radiante." },
        { nome: "Penteados", imagem: penteados, descricao: "Descubra a arte da transformação capilar com os nossos serviços de penteados. Nossa equipe de hairstylists talentosos está aqui para criar looks deslumbrantes que realçam a sua beleza única. Seja para uma ocasião especial ou apenas para um visual diferente, oferecemos uma variedade de penteados, desde os mais clássicos e elegantes até os mais modernos e ousados. Com técnicas habilidosas e produtos de alta qualidade, garantimos um penteado que se adapta perfeitamente ao seu estilo e personalidade. Agende hoje mesmo e experimente a magia de um penteado feito por especialistas que entendem a arte da beleza capilar." },
    ];

    const [servicoSelecionado, setServicoSelecionado] = useState(null);

    return (
        <section id="Servicos" className="pt-10 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 2xl:pb-24">

            <div className="text-center">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                    Nossos Serviços
                </h2>
            </div>

            <div className="text-center p-8 bg-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {servicos.map((servico, index) => (
                        <div key={index} className="group cursor-pointer relative">
                            <img
                                src={servico.imagem}
                                alt={`Imagem ${index}`}
                                className="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 top-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Modal serviceData={servico} />
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
    )
}

export default Servicos
