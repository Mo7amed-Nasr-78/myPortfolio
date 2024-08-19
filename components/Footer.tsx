import { navItems, socialIcons } from '@/data';
import React from 'react';
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className='min-h-[50vh] bg-gradient-to-t from-[#050a0c] to-[#1E1E1E] lg:py-10 py-10'>
            <div className="container flex flex-col items-center">
                <motion.img 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', damping: 6 } }}
                    src="./Large_Logo.svg" alt="logo" className='lg:mb-6 mb-4'
                />
                <div className='flex items-center lg:gap-8 md:gap-5 gap-3 lg:mb-3 mb-3'>
                    {
                        socialIcons.map(({ id, title, icon, link }) => {
                            return (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, transition: { duration: id, type: 'spring' } }}
                                    key={id} className='relative w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-accentColor hover:-translate-y-1 duration-300 ease-in-out cursor-pointer'
                                >
                                    <img src={icon} alt={title} className='w-4 h-4 object-cover object-center'/>
                                </motion.div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center lg:gap-5 md:gap-4 gap-3'>
                    {
                        navItems.map(({ title, link }, idx) => {
                            return (
                                <motion.a
                                    initial={{ scale: 1 }}
                                    whileHover={{ color: '#3498DB', scale: 1.1, transition: { duration: 0.5, type: 'spring' } }}
                                    href={link} key={idx} 
                                    className='capitalize text-secondaryColor lg:text-lg font-light underline'> { title } 
                                </motion.a>
                            )
                        })
                    }
                </div>
                <span className='w-full h-[2px] rounded-full bg-accentColor my-5'></span>
                <div className='flex items-center xl:gap-3 gap-2'>
                    <MdEmail className='text-accentColor xl:w-6 xl:h-6'/>
                    <span className='text-secondaryColor xl:text-sm text-xs tracking-wide'>mohamed.ibrahim.nasr2020@gmail.com</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;