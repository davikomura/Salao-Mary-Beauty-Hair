import React, { useState } from "react";
import Navigation from "../../components/Common/Header/Navigation";
import Contacts from "../../components/Common/Footer/Contacts";

const HairCut = () => {
    return(
        <div class="font-[sans-serif] pt-16">
            <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div class="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                        <img src="https://readymadeui.com/images/coffee1.webp" alt="Product" class="w-4/5 rounded object-cover" />
                        <hr class="border-white border-2 my-6" />
                        <div class="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
                            <img src="https://readymadeui.com/images/coffee6.webp" alt="Product1" class="w-24 cursor-pointer" />
                            <img src="https://readymadeui.com/images/coffee3.webp" alt="Product2" class="w-24 cursor-pointer" />
                            <img src="https://readymadeui.com/images/coffee4.webp" alt="Product3" class="w-24 cursor-pointer" />
                            <img src="https://readymadeui.com/images/coffee5.webp" alt="Product4" class="w-24 cursor-pointer" />
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-extrabold text-gray-800">Hair Cut</h2>
                        <div class="mt-8">
                            <h3 class="text-lg font-bold text-gray-800">About the coffee</h3>
                            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                                <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                                <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                                <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HairCut;