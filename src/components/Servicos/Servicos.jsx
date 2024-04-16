import React, { useState } from "react";
import hair_cut from "../../assets/hair-cut.jpg"
import hair_styling from "../../assets/hair-styling.jpg"
import makeup from "../../assets/makeup.jpg"
import hair_color from "../../assets/hair-color.jpg"
import pedicure from "../../assets/pedicure.jpg"
import sobrancelha from "../../assets/sobrancelha.jpg"
import tratamentos_capilares from "../../assets/tratamentos-capilares.jpg"

const Servicos = () => {
    return(
        <section id="Servicos" class="pt-10 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
            
            <div class="text-center">
                <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                    Nossos Serviços
                </h2>
            </div>
            
            <div class="text-center p-8 bg-black">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        
                    <div class="group cursor-pointer relative">
                        <img
                        src={hair_cut}
                        alt="Image 1"
                        class="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Hair Cut
                            </h5>
                        </div>
                    </div>
                    
                    <div class="group cursor-pointer relative">
                        <img
                        src={hair_styling}
                        alt="Image 1"
                        class="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Hair Styling
                            </h5>
                        </div>
                    </div>
                    
                    <div class="group cursor-pointer relative">
                        <img
                        src={hair_color}
                        alt="Image 1"
                        class="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Hair Color
                            </h5>
                        </div>
                    </div>
                    
                    <div class="group cursor-pointer relative">
                        <img
                        src={makeup}
                        alt="Image 1"
                        class="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Makeup
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    <div class="group cursor-pointer relative">
                        <img
                        src={pedicure}
                        alt="Image 1"
                        class="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Pedicure
                            </h5>
                        </div>
                    </div>
                    
                    <div class="group cursor-pointer relative">
                        <img
                        src={sobrancelha}
                        alt="Image 1"
                        class="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Design de sobrancelhas
                            </h5>
                        </div>
                    </div>
                    
                    <div class="group cursor-pointer relative">
                        <img
                        src={tratamentos_capilares}
                        alt="Image 1"
                        class="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Tratamentos capilares (hidratação, reconstrução, etc.)
                            </h5>
                        </div>
                    </div>
                    
                    <div class="group cursor-pointer relative">
                        <img
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Image 1"
                        class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button class="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                        <div class="mt-4">
                            <h5 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-white">
                                Simple integration
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Servicos