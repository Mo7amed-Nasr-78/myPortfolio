import { heroCards } from '@/data';
import React from 'react';
import { motion } from 'framer-motion'

const FastCards = () => {
    return (
        <section>
            <div className="container pt-16  pb-10 flex items-center justify-between flex-col gap-10 lg:gap-0 lg:flex-row">
                {
                    heroCards.map(( { title, des, illustration }, idx ) => {
                        return (
                            <motion.div 
                                initial={{ opacity: 0, x: idx === 1? '100%': '-100%' }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'easeIn' } }}
                                key={idx} 
                                className='w-full lg:w-custom-50/0.5 xl:h-48 lg:h-44 md:h-56 sm:h-48 h-auto relative flex sm:flex-row flex-col-reverse lg:gap-5 sm:gap-10 gap-2 items-center justify-between bg-gradient-to-br from-[#3498db30] to-[#1c517531] p-5 rounded-2xl'
                                >
                                <div className='flex flex-col items-center sm:items-start xl:text-secondaryColor'>
                                    <h2 className='xl:text-2xl lg:text-xl sm:text-2xl font-medium xl:mb-1 lg:mb-1 mb-2 capitalize'>{ title }</h2>
                                    <p className='xl:text-sm lg:text-sm md:text-lg font-light xl:mb-6 lg:mb-3 mb-4 sm:text-left text-center'>{ des }</p>
                                    <motion.button 
                                        whileHover={{ scale: 0.95, transition: { duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                                        className='flex items-center justify-center xl:w-36 lg:w-32 md:w-[230px] w-[200px] lg:py-1 md:py-1 lg:px-5 md:px-3 rounded-lg text-primaryColor xl:text-sm lg:text-sm capitalize font-bold bg-accentColor hover:bg-[#0D9AF9]'
                                    >{ title }</motion.button>
                                </div>
                                <div className='relative xl:w-56 md:w-96 sm:w-80'>
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