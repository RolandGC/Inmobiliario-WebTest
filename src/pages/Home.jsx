import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const options = [
    { value: 'all', label: 'Todos' },
    { value: 'department', label: 'Departamento' },
    { value: 'office', label: 'Oficina' },
    { value: 'house', label: 'Casa' },
    { value: 'lot', label: 'Lote' },
    { value: 'rental', label: 'Alquiler' }
];
const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const [inputValue, setInputValue] = useState('');
    const [inputValue1] = useState('');
    const [inputValue2] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <main>
            <div className="container  w-screen h-screen mx-auto p-2 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(./src/assets/fotoFam1.jpeg)` }}>
                <h1 className="text-4xl font-black text-blue-900 text-center">Pazhogar</h1>
                <div className=" rounded-md border-0 mt-5 font-bold w-full py-2 bg-black/50 uppercase text-gray-300 text-center text-lg">
                    <span>
                        Te acompañamos en cada paso...
                    </span>
                    <div>
                        <div className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7">
                            <label htmlFor="price" className="text-center block text-sm font-medium leading-6 text-gray-300">
                                Encuentra tu camino a casa
                            </label>


                            <div className='flex' >
                                <div className="relative inline-block text-left w-1/3 p-4 border-none border-gray-300 rounded-lg mr-4">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border-none border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                            id="options-menu"
                                            aria-haspopup="true"
                                            aria-expanded="true"
                                            onClick={toggleDropdown}
                                        >
                                            {selectedOption.label}
                                            <svg
                                                className="-mr-1 ml-2 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {isOpen && (
                                        <div
                                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        >
                                            <div className="py-1" role="none">
                                                {options.map((option) => (
                                                    <a
                                                        href="#"
                                                        className={`${option.value === selectedOption.value
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                            } block px-4 py-2 text-sm`}
                                                        role="menuitem"
                                                        key={option.value}
                                                        onClick={() => selectOption(option)}
                                                    >
                                                        {option.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="w-1/3 p-4 border-none border-gray-300 rounded-lg mr-4">
                                    <div className="flex justify-between items-center bg-white rounded-md overflow-hidden shadow">
                                        <input
                                            type="text"
                                            className="flex-grow px-4 py-2 border-none focus:ring-0 w-1/3 p-4 border border-gray-300 rounded-lg mr-4"
                                            placeholder="Ingresa Departamento, Provinvia, Distrito..."
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className=" w-1/3 p-4 border-none border-gray-300 rounded-lg mr-4">
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-orange-500 text-white hover:bg-blue-900 focus:outline-none"
                                        >
                                            Buscar
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="relative mt-2 rounded-md shadow-sm">
                                    <div>

                                    </div>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="0.00"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                        <label htmlFor="currency" className="sr-only">
                                            Currency
                                        </label>
                                        <select id="currency" name="currency"
                                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                            <option> S/.</option>
                                            <option>US$</option>

                                        </select>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="flex content-center ">
                            <div className="w-1/3 p-4 border-none border-gray-300 rounded-lg mr-4 ">
                                <div className="relative inset-y-0 right-0 flex items-center bg-white">
                                    <label htmlFor="currency" className="sr-only">
                                        Currency
                                    </label>
                                    <select id="currency" name="currency"
                                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    >
                                        <option>S/.</option>
                                        <option>US$</option>

                                    </select>
                                </div>
                            </div>
                            <div className="w-1/3 p-4 border-none border-gray-300 rounded-lg mr-4">
                                <div className="flex justify-between items-center bg-white rounded-md overflow-hidden shadow">
                                    <input
                                        type="text"
                                        className="flex-grow px-4 py-2 border-none focus:ring-0 w-1/3 p-4 border border-gray-300 rounded-lg mr-4"
                                        placeholder="Precio desde"
                                        value={inputValue1}
                                    // onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="w-1/3 p-4 border-none border-gray-300 rounded-lg mr-4">
                                <div className="flex justify-between items-center bg-white rounded-md overflow-hidden shadow">
                                    <input
                                        type="text"
                                        className="flex-grow px-4 py-2 border-none focus:ring-0 w-1/3 p-4 border border-gray-300 rounded-lg mr-4"
                                        placeholder="Precio hasta"
                                        value={inputValue2}
                                    // onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" flex relative text-left w-1/3 p-4 border-none">
                            <span>
                                - Retirar precio
                            </span>
                        </div>
                    </div>
                </div>
            </div>




            <div className=" container mx-auto p-2 bg-cover">
                <section>
                    <h2>Contenido principal</h2>
                    <p>Nuestras tendencias</p>
                </section>
                <div>
                    <article>
                        <figure>
                            <img src="./src/assets/dep1.jpg" alt="" />
                        </figure>
                    </article>
                </div>
                <div>
                    <article>
                        <figure>
                            <img src="./src/assets/dep2.jpeg" alt="" />
                        </figure>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Home