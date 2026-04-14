import { navItems, socialIcons } from '@/data';
import React from 'react';
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className='w-full p-8'>
            <div className='w-full bg-[#0D0D0D] p-12 rounded-3xl'>
                <div className="container flex flex-col items-center m-0 mx-auto">

                    <motion.img 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', damping: 6 } }}
                        src="./Large_Logo.svg" alt="logo" className='lg:mb-8 mb-4'
                    />

                    <div className='flex items-center lg:gap-8 md:gap-5 gap-3 mb-5'>
                        {
                            socialIcons.map(({ id, title, icon: Icon, link }) => {
                                return (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1, transition: { duration: id, type: 'spring' } }}
                                        key={id} className='relative w-12 h-12 flex items-center justify-center text-2xl border border-secondaryColor hover:border-primaryColor hover:bg-primaryColor hover:text-white hover:-translate-y-1 transition duration-200 ease-in-out rounded-full cursor-pointer'
                                    >
                                        <Icon />
                                    </motion.div>
                                )
                            })
                        }
                    </div>

                    <div className='flex items-center justify-center lg:gap-8 md:gap-6 gap-4 flex-wrap'>
                        {
                            navItems.map(({ title, link }, idx) => {
                                return (
                                    <motion.a
                                        initial={{ scale: 1 }}
                                        whileHover={{ color: '#3498DB', scale: 1.1, transition: { duration: 0.5, type: 'spring' } }}
                                        href={link} key={idx} 
                                        className='capitalize text-secondaryColor text-xl font-light underline'> { title } 
                                    </motion.a>
                                )
                            })
                        }
                    </div>

                    <span className='w-full h-[2px] rounded-full bg-primaryColor my-9'></span>

                    <div className='flex items-center flex-col sm:flex-row xl:gap-3 gap-2'>
                        <MdEmail className='text-primaryColor text-3xl'/>
                        <span className='text-secondaryColor text-lg tracking-wide'>mohamed.ibrahim.nasr2020@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;