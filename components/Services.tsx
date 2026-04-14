import { servicesCards } from "@/data";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <section id="services" className="min-h-screen py-6 scroll-mt-16">
            <div className="container">
                <div className="text-center sm:text-start mt-5 mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, x: '-100%' }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', damping: 7, mass: 0.6 } }}
                        className="md:text-6xl text-4xl mb-2 w-fit font-normal bg-clip-text bg-gradient-to-r from-primaryText to-primaryColor text-transparent capitalize mx-auto sm:mx-0"
                    >
                        services
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
                        className="text-secondaryText text-opacity-[0.8] mt-1 xl:text-xl text-lg font-extralight"
                    >
                        Transforming Your Vision into Reality
                    </motion.h3>
                </div>

                <div className="grid grid-cols-12 gap-4 md:my-16 my-10">
                    {servicesCards.map(
                        ({ title, des, icon }, idx) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: `${(idx + 1) * 100}px` }}
                                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5, type: 'ease' } }}
                                    key={idx}
                                    className={`col-span-4 ${idx === 0? "bg-primaryText border border-primaryColor/25": "bg-primaryText/5"} rounded-3xl xl:px-6 xl:py-10 lg:p-5 p-6`}
                                >
                                    <div className={`${idx === 0? "bg-primaryColor" : "bg-primaryColor/10"} relative w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                                        <img
                                            src={icon}
                                            alt={title}
                                            className="h-9 object-cover object-center"
                                        />
                                    </div>
                                    <div className="flex items-start justify-between flex-col w-full">
                                        <motion.h3 
                                            className={`${idx === 0? "text-neutralColor" : "text-primaryText"} xl:text-3xl lg:text-2xl md:text-3xl font-semibold capitalize mb-2`}
                                        >
                                            {title}
                                        </motion.h3>
                                        <p className={`${idx === 0? "text-neutralColor/75 font-normal" : "text-primaryText/75 font-extralight"} w-full xl:text-lg lg:text-sm lg:leading-6 md:text-lg xl:tracking-wider md:tracking-wide tracking-widest`}>
                                            {des}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
