import React, { useState } from "react";
import { projectCards } from "@/data";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen scroll-mt-8">
            <div className="container">
                <div className="text-center sm:text-start">
                    <motion.h2
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.5,
                                type: "spring",
                                damping: 7,
                                mass: 0.6,
                            },
                        }}
                        className="md:text-5xl md:mb-2 w-fit font-normal text-4xl bg-clip-text bg-gradient-to-r from-secondaryColor to-accentColor text-transparent capitalize mx-auto sm:mx-0"
                    >
                        Projects
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 0.5, duration: 0.5 },
                        }}
                        className="text-secondaryColor text-opacity-[0.8] mt-1 md:text-lg font-extralight"
                    >
                        A Collection of Innovative and Impactful Projects
                    </motion.h3>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-col-1 xl:gap-6 lg:gap-3 gap-10 py-16">
                    {projectCards.map(
                        ({
                            id,
                            title,
                            des,
                            gitIcon,
                            whatsIcon,
                            img,
                            link,
                            rep,
                        }) => {
                            return (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: id % 2 == 0 ? "100%" : "-100%",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                            type: "ease",
                                        },
                                    }}
                                    key={id}
                                    className="relative group bg-[#2A2A2A] sm:rounded-3xl rounded-xl xl:p-4 lg:p-3 md:p-4 p-2 overflow-hidden"
                                >
                                    <div className="absolute w-full h-full sm:flex hidden items-center justify-center left-0 bottom-[-100%] group-hover:bottom-0 bg-gradient-to-br from-[#1e1e1ebd] to-[#515151cf] cursor-pointer duration-500 ease-in-out">
                                        <motion.a 
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.1, transition: { duration: 1, type: 'spring' } }}
                                            href={link} 
                                            target="_blank"
                                        >
                                            <div
                                                className="w-14 h-14 flex items-center justify-center bg-accentColor bg-opacity-[0.5] hover:bg-opacity-100 rounded-full"
                                            >
                                                <MdArrowOutward className="text-secondaryColor text-2xl" />
                                            </div>
                                        </motion.a>
                                        <a href={rep} target="_blank">
                                            <img
                                                src={gitIcon}
                                                alt={title}
                                                className="w-8 h-8 absolute right-5 bottom-5"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-full h-full">
                                        <img
                                            src={img}
                                            alt={title}
                                            className="rounded-lg"
                                        />
                                        <h2 className="sm:hidden text-lg font-normal capitalize my-2">
                                            {" "}
                                            {title}{" "}
                                        </h2>
                                        <p className="sm:hidden text-sm font-light text-secondaryColor text-opacity-75 tracking-wide mb-4 first-letter:capitalize">
                                            {" "}
                                            {des}{" "}
                                        </p>
                                        <div className="sm:hidden flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <a href={rep}>
                                                    <img
                                                        src={gitIcon}
                                                        alt={title}
                                                        className="w-6 h-6 object-cover object-center"
                                                    />
                                                </a>
                                                <img
                                                    src={whatsIcon}
                                                    alt={title}
                                                    className="w-6 h-6 object-cover object-center"
                                                />
                                            </div>
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center p-1 bg-accentColor bg-opacity-5 hover:bg-accentColor duration-300 ease-in-out">
                                                <MdArrowOutward />
                                            </div>
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

export default Projects;
