import { socialIcons } from "@/data";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen scroll-mt-24">
            <div className="container">

                <div className="text-center sm:text-start mb-16">
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
                        className="md:text-6xl text-4xl mb-2 w-fit font-normal bg-clip-text bg-gradient-to-r from-primaryText to-primaryColor text-transparent capitalize mx-auto sm:mx-0"
                    >
                        contact
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { delay: 0.5, duration: 0.5 },
                        }}
                        className="text-secondaryColor text-opacity-[0.8] mt-1 xl:text-xl text-lg font-extralight"
                    >
                        I’m Here to Answer Your Questions
                    </motion.h3>
                </div>

                <div className="flex lg:flex-row flex-col items-start justify-between mb-28">
                    <div className="lg:w-[50%] w-full flex flex-col justify-between xl:gap-10 md:gap-8 gap-5">
                        <div className="flex items-start flex-col gap-1">
                            <motion.h3
                                initial={{ opacity: 0, x: "-100%" }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5, type: "ease" },
                                }}
                                className="xl:text-4xl text-2xl capitalize text-primaryText mb-2"
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
                                className="w-[80%] text-lg text-primaryText/75 font-extralight tracking-wider"
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
                                className="xl:text-3xl text-2xl capitalize text-primaryText"
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
                                className="xl:w-80 w-full text-lg font-light text-primaryText/75 tracking-wider"
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
                                className="xl:text-3xl text-2xl capitalize text-primaryText"
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
                                    ({ id, title, link, icon: Icon }) => {
                                        return (
                                            <motion.div key={id} 
                                                initial={{ opacity: 1, scale: 1 }}
                                                whileHover={{ scale: 1.1, transition: { ease: 'easeInOut' }}}
                                                className="w-11 h-11 flex items-center justify-center rounded-full  border border-white hover:border-accentColor hover:bg-accentColor hover:text-white cursor-pointer"
                                            >
                                                <a href={link}>
                                                    <Icon className="text-2xl"/>
                                                </a>
                                            </motion.div>
                                        );
                                    }
                                )}
                            </motion.div>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, type: 'ease' } }}
                        className="lg:w-[50%] w-full flex flex-col gap-5"
                    >
                        <label
                            htmlFor="name"
                            className="flex flex-col gap-2"
                        >
                            <span className="capitalize text-xl text-secondaryColor tracking-wider">name</span>
                            <motion.input
                                type="text"
                                placeholder="Enter your full name"
                                id="name"
                                className={`w-full h-14 pl-4 rounded-2xl border-1 border-solid border-primaryText focus:outline-2 focus:outline focus:outline-primaryColor placeholder:text-base placeholder:font-extralight bg-primaryColor/10`}
                                // whileHover={{ scale: id === 4? 0.95: 1, backgroundColor: id === 4? '#0D9AF9': '', transition: { duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                            />
                        </label>
                        <label
                            htmlFor="email"
                            className="flex flex-col gap-2"
                        >
                            <span className="capitalize text-xl text-secondaryColor tracking-wider">email</span>
                            <motion.input
                                type="email"
                                placeholder="Enter your email"
                                id="email"
                                className={`w-full h-14 pl-4 rounded-2xl border-1 border-solid border-primaryText focus:outline-2 focus:outline focus:outline-primaryColor placeholder:text-base placeholder:font-extralight bg-primaryColor/10`}
                                // whileHover={{ scale: id === 4? 0.95: 1, backgroundColor: id === 4? '#0D9AF9': '', transition: { duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                            />
                        </label>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="notes"
                                className="capitalize text-secondaryColor text-xl font-normal mb-2"
                            >
                                feel free to tell us what’s your vision
                            </label>
                            <textarea
                                name="notes"
                                id="notes"
                                placeholder="Write Your Message Down Here"
                                className="w-full h-32 p-3 rounded-2xl bg-primaryColor/10 focus:outline-2 focus:outline focus:outline-primaryColor text-xl placeholder:text-lg placeholder:font-extralight"
                            ></textarea>
                        </div>
                    </motion.form>
                </div>

                {/* <div className="relative w-full h-80 flex items-center justify-between rounded-2xl bg-gradient-to-br from-[#26526f] via-primaryColor to-[#26526f] mb-28 overflow-hidden">
                    <div className="w-[50%] flex flex-col lg:items-start items-center justify-between p-8 capitalize">
                        <motion.h4 
                            initial={{ opacity: 0, x: "-100%" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5, type: "ease" },
                            }}
                            className="text-secondaryColor text-xl font-light mb-4">
                            are you ready
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, x: "-100%" }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.2, duration: 0.5, type: "ease" },
                            }}
                            className="2xl:w-[80%] xl:w-full text-secondaryColor lg:text-4xl md:text-3xl text-2xl font-normal leading-[40px] mb-8">
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
                            className="w-52 h-10 bg-accentColor text-primaryColor text-xl font-medium rounded-lg capitalize">
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
                </div> */}
            </div>
        </section>
    );
};

export default Contact;
