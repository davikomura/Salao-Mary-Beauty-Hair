import React, { useState } from "react";
import cabelo from "../../assets/img.jpg"

const Home = () => {
    return (
        <div id="Home" class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div class="absolute inset-0">
                <img src={cabelo} alt="Background Image" class="object-cover object-center w-full h-full" />
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 class="text-7xl font-gistesy leading-tight mb-4">
                    <span class="text-white">Mary </span>
                    <span class="text-red-600">Beauty </span>
                    <span class="text-white">Hair</span>
                </h1>
                <p class="text-lg text-gray-300 mb-8">Centro de Beleza e Bem estar</p>
                <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 
                py-2 px-6 rounded-full text-lg font-semibold transition duration-300 
                ease-in-out transform hover:scale-105 hover:shadow-lg">Agende Já</a>
            </div>
        </div>
    )
}

export default Home