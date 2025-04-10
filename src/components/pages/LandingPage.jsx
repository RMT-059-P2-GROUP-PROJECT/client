import { useNavigate } from 'react-router'
import hero from '../../assets/hero.svg'
import Navbar from '../Navbar'
import { useEffect } from 'react'


function LandingPage() {
    const navigate = useNavigate()
    return (
        <section className='h-full'>
            <Navbar />
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-20">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center  xl:py-0 py-12">
                    <div className="relative ms-4">
                        <img src={hero} className="w-full rounded-md" alt="Hero Image" />
                        <div className="absolute inset-0 -z-1 bg-linear-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
                    </div>

                    <div>
                        <h1 className="block text-2xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">Ringkas Obrolan Diskusi dalam<span className="text-blue-600"> Sekejap</span></h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Chatsum dapat memberikan ribuan ringkasan untuk diskusi-diskusi dari beragam bahasa di berbagai belahan dunia.</p>

                        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                            <button onClick={() => { navigate('/login') }} className={`py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none`}>
                                Mulai Sekarang
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                            <a onClick={() => { navigate('/about') }} className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                                Tentang Kami
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage