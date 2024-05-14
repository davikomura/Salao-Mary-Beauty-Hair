import React from 'react'

export const Agenda = () => {
  return (
    <div className="bg-black flex">
      <form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto px-6 my-6 mt-36">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="relative flex items-center">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Nome</label>
            <input type="text" placeholder="Enter first name"
              className="px-2 pt-5 pb-2 bg-black w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Sobrenome</label>
            <input type="text" placeholder="Enter last name"
              className="px-2 pt-5 pb-2 bg-black w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div className="relative flex items-center">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Número de Telefone</label>
            <input type="number" placeholder="Enter phone no."
              className="px-2 pt-5 pb-2 bg-black w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
            <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
              <path
                d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                data-original="#000000"></path>
            </svg>
          </div>
          {/* <div className="relative flex items-center">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Serviço</label>
            <input type="text" placeholder="Selecione um Serviço"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
          </div> */}
          <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] text-white absolute top-[-10px] left-0 font-semibold">Email</label>
            <input type="email" placeholder="Enter email"
              className="px-2 pt-5 pb-2 bg-black w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"></path>
              </g>
            </svg>
          </div>
          {/* <div className="relative flex items-center sm:col-span-2">
            <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Password</label>
            <input type="password" autocomplete="new-password" placeholder="Enter password"
              className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"></path>
            </svg>
          </div> */}
        </div>
        <button type="button"
          className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-yellow-400 text-black hover:bg-yellow-500">Agendar</button>
      </form>
    </div>
  )
}
