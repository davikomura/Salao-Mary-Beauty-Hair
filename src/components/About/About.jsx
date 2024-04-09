import React, { useState } from "react";
import logo from "../../assets/logo_salao.jpg"

const About = () => {
    return(
        <section id="About" class="pt-10 overflow-hidden bg-black dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 class="text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl lg:text-5xl">
                            Sobre Nós
                        </h2>
                        <p class="max-w-lg mt-3 text-xl leading-relaxed text-white dark:text-gray-300 md:mt-8">
                            Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    <div class="relative">
                        <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                        <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About