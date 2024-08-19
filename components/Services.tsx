import { servicesCards } from "@/data";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <section id="services" className="min-h-screen py-10">
            <div className="container">
                <div className="text-center sm:text-start">
                    <motion.h2 
                        initial={{ opacity: 0, x: '-100%' }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', damping: 7, mass: 0.6 } }}
                        className="md:text-5xl text-4xl mb-2 w-fit font-normal bg-clip-text bg-gradient-to-r from-secondaryColor to-accentColor text-transparent capitalize mx-auto sm:mx-0"
                    >
                        services
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
                        className="text-secondaryColor text-opacity-[0.8] mt-1 xl:text-lg text-sm font-extralight"
                    >
                        Transforming Your Vision into Reality with Expert
                        Development
                    </motion.h3>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-4 xl:gap-6 lg:gap-4 gap-10 md:my-16 my-10">
                    {servicesCards.map(
                        ({ title, subtitle, des, icon }, idx) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 == 0? '-100%': '100%' }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'ease' } }}
                                    key={idx}
                                    className="bg-gradient-to-br from-[#06242B] from-50% to-[#193f49] to-100% rounded-3xl xl:p-5 lg:p-3 md:p-4 p-4"
                                >
                                    <div className="relative flex flex-col md:flex-row items-start justify-between xl:gap-4 lg:gap-3">
                                        <div className="relative xl:w-[10%] md:mb-0 mb-1">
                                            <img
                                                src={icon}
                                                alt={title}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="flex items-start justify-between flex-col w-full">
                                            <motion.h3 
                                                
                                                className="text-secondaryColor xl:text-2xl md:text-xl text-xl font-medium capitalize mb-1"
                                            >
                                                {title}
                                            </motion.h3>
                                            <motion.h4 
                                                className="text-secondaryColor text-opacity-[0.75] lg:text-xs text-sm font-normal capitalize mb-2 line-clamp-2 tracking-wide"
                                            >
                                                {subtitle}
                                            </motion.h4>
                                            <p className="text-secondaryColor text-opacity-40 w-full lg:text-xs md:text-sm text-[18px] text-light xl:tracking-widest md:tracking-wide tracking-widest lg:leading-[30px] leading-6">
                                                {des}
                                            </p>
                                        </div>
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
