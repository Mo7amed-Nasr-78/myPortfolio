import { heroCards } from '@/data';
import React from 'react';
import { motion } from 'framer-motion'

const FastCards = () => {
    return (
        <section className='container xl:py-24 lg:py-20'>
            <div className="w-full flex items-center jusitfy-between gap-12">
                {
                    heroCards.map(( { title, des, illustration }, idx ) => {
                        return (
                            <motion.div 
                                initial={{ opacity: 0, x: idx === 1? '100%': '-100%' }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'easeIn' } }}
                                key={idx} 
                                className='relative 2xl:h-72 xl:h-64 lg:h-52 flex sm:flex-row flex-col-reverse lg:gap-10 sm:gap-10 gap-4 items-center justify-between bg-gradient-to-br from-[#3498db30] to-[#1c517531] p-8 rounded-2xl'
                                >
                                <div className='w-[50%] flex flex-col items-center sm:items-start xl:text-secondaryColor'>
                                    <h2 className='xl:text-3xl lg:text-xl sm:text-2xl font-medium xl:mb-1 lg:mb-1 mb-2 capitalize'>{ title }</h2>
                                    <p className='xl:text-lg lg:text-sm md:text-lg font-light xl:mb-6 lg:mb-3 mb-4 sm:text-left text-center'>{ des }</p>
                                    <motion.button 
                                        whileHover={{ scale: 0.95, transition: { duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                                        className='flex items-center justify-center xl:w-44 lg:w-36 md:w-[230px] w-[200px] py-1 lg:px-5 md:px-3 rounded-lg text-primaryColor xl:text-lg lg:text-sm capitalize font-bold bg-accentColor hover:bg-[#0D9AF9]'
                                    >{ title }</motion.button>
                                </div>
                                <div className='relative w-[40%]'>
                                    <img src={ illustration } alt={title} className='w-full h-full object-cover obejct-center'/>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FastCards;