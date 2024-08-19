import { inputFields, socialIcons } from "@/data";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen scroll-mt-10">
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
                        className="md:text-5xl text-4xl mb-2 w-fit font-normal bg-clip-text bg-gradient-to-r from-secondaryColor to-accentColor text-transparent capitalize mx-auto sm:mx-0"
                    >
                        contact
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 0.5, duration: 0.5 },
                        }}
                        className="text-secondaryColor text-opacity-[0.8] mt-1 md:text-lg text-sm font-extralight"
                    >
                        I’m Here to Answer Your Questions
                    </motion.h3>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-5 md:pt-16 pt-12 pb-24">
                    <div className="lg:w-[50%] w-full flex flex-col justify-between xl:gap-10 md:gap-8 gap-5">
                        <div className="flex items-start flex-col gap-1">
                            <motion.h3
                                initial={{ opacity: 0, x: "-100%" }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5, type: "ease" },
                                }}
                                className="xl:text-3xl md:text-4xl text-2xl capitalize lg:mb-1 mb-2 text-secondaryColor"
                            >
                                Let&apos;s Talk
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.5,
                                        type: "ease",
                                    },
                                }}
                                className="md:w-full text-sm md:tracking-wider text-secondaryColor text-opacity-50 tracking-wide"
                            >
                                Feel free to reach out with any questions or
                                project ideas. I&apos;m excited to hear from you
                                and explore how we can work together to create
                                something amazing. Let&apos;s connect!
                            </motion.p>
                        </div>
                        <div className="flex items-start flex-col gap-1 md:hidden lg:flex">
                            <motion.h3
                                initial={{ opacity: 0, x: "-100%" }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5, type: "ease" },
                                }}
                                className="xl:text-2xl text-2xl capitalize text-secondaryColor"
                            >
                                E-mail
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.5,
                                        type: "ease",
                                    },
                                }}
                                className="xl:w-80 w-full text-sm text-secondaryColor text-opacity-50"
                            >
                                mohamed.ibrahim.nasr2020@gmail.com
                            </motion.p>
                        </div>
                        <div className="flex items-start flex-col gap-4 md:hidden lg:flex">
                            <motion.h3
                                initial={{ opacity: 0, x: "-100%" }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5, type: "ease" },
                                }}
                                className="xl:text-2xl text-2xl capitalize text-secondaryColor"
                            >
                                social media
                            </motion.h3>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.5,
                                        duration: 0.5,
                                        type: "ease",
                                    },
                                }}
                                className="flex items-center xl:gap-4 lg:gap-3 gap-4 xl:pl-1 lg:pl-0 md:hidden lg:flex"
                            >
                                {socialIcons.map(
                                    ({ id, title, link, icon }) => {
                                        return (
                                            <div key={id} className="w-5 h-5">
                                                <a href={link}>
                                                    <img
                                                        src={icon}
                                                        alt={title}
                                                        className="w-full h-full"
                                                    />
                                                </a>
                                            </div>
                                        );
                                    }
                                )}
                            </motion.div>
                        </div>
                    </div>
                    <motion.form
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: 'ease' } }}
                        className="lg:w-[50%] w-full flex flex-col gap-4"
                    >
                        {inputFields.map(({ id, title, type, holder }) => {
                            return (
                                <>
                                    {id != 3 && (
                                        <div
                                            key={id}
                                            className="flex flex-col gap-1"
                                        >
                                            <label
                                                htmlFor={title}
                                                className={
                                                    id === 4
                                                        ? "hidden"
                                                        : "capitalize text-lg text-secondaryColor"
                                                }
                                            >
                                                {" "}
                                                {title}:{" "}
                                            </label>
                                            <motion.input
                                                type={type}
                                                placeholder={holder}
                                                className={`w-full h-10 pl-2 rounded-lg border-1 border-solid border-secondaryColor focus:outline-2 focus:outline focus:outline-accentColor ${
                                                    id === 4
                                                        ? "bg-accentColor text-primaryColor text-lg font-semibold cursor-pointer"
                                                        : "bg-[#514848] xl:text-sm text-normal"
                                                }`}
                                                whileHover={{ scale: id === 4? 0.95: 1, backgroundColor: id === 4? '#0D9AF9': '', transition: { duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                                            />
                                        </div>
                                    )}
                                    {id === 3 && (
                                        <div className="flex flex-col gap-1">
                                            <label
                                                htmlFor={title}
                                                className="capitalize text-secondaryColor text-sm font-normal mb-1"
                                            >
                                                {title}
                                            </label>
                                            <textarea
                                                name={title}
                                                id={title}
                                                placeholder={holder}
                                                className="w-full h-28 pl-2 rounded-lg bg-[#514848] focus:outline-2 focus:outline focus:outline-accentColor p-1 text-sm"
                                            ></textarea>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </motion.form>
                </div>
                <div className="relative w-full h-56 flex items-center justify-between rounded-2xl bg-gradient-to-br from-[#26526f] via-primaryColor to-[#26526f] lg:mb-16 mb-10 overflow-hidden">
                    <div className="flex flex-col lg:items-start items-center lg:text-start justify-between xl:[60%] lg:w-[55%] md:w-full h-full p-7 capitalize">
                        <motion.h4 
                            initial={{ opacity: 0, x: "-100%" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5, type: "ease" },
                            }}
                            className="text-secondaryColor xl:text-lg md:text-xl text-lg font-normal">
                            are you ready
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, x: "-100%" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.2, duration: 0.5, type: "ease" },
                            }}
                            className="text-secondaryColor lg:text-3xl md:text-3xl text-2xl text-center lg:text-start font-semibold lg:-mt-5">
                            to discuss your vision to bring in reality
                        </motion.h2>
                        <motion.button 
                            initial={{ opacity: 0, y: '100%' }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, type: "ease" }
                            }}
                            whileHover={{ scale: 0.95, backgroundColor: '#0D9AF9',transition: { duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                            className="w-40 h-8 bg-accentColor text-primaryColor xl:text-lg lg:text-lg font-medium rounded-lg capitalize">
                            sure
                        </motion.button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.5, type: "ease" },
                        }}
                        className="absolute top-0 right-0 h-full hidden lg:block"
                    >
                        <img src="./billboard_photo.svg" alt="photo" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
