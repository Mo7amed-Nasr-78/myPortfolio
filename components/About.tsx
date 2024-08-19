import React from "react";
import { delay, motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full xl:mb-16 scroll-mt-10">
            <div className="container relative">
                <div 
                    className="mt-10 md:mt-16 mt- mb-16 text-center sm:text-start"
                >
                    <motion.h2 
                        initial={{ opacity: 0, x: '-100%' }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', damping: 7, mass: 0.6 } }}
                        className="md:text-5xl text-4xl mb-2 w-fit font-normal bg-clip-text bg-gradient-to-r from-secondaryColor to-accentColor text-transparent capitalize mx-auto sm:mx-0"
                    >
                        who I am
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
                        className="text-secondaryColor text-opacity-[0.8] mt-1 xl:text-lg text-sm font-extralight"
                    >
                        Blending creativity and technology to bring ideas to
                        life
                    </motion.h3>
                </div>
                <div className="relative h-full w-full flex flex-col lg:flex-row items-center justify-between xl:gap-10 lg:gap-4 md:gap-16 gap-10">
                    <motion.div 
                        initial={{ opacity: 0, x: '-100%' }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring', stiffness: 150 }}}
                        className="relative xl:w-[40%] lg:w-[40%] md:w-[70%] sm:w-[80%]"
                    >
                        <img src="./about_photo.svg" alt="aboutPhoto" className="w-full h-full obejct-cover object-center"/>
                    </motion.div>
                    <div className="flex items-center sm:items-start justify-center flex-col xl:w-[60%] lg:w-[58%]">
                        <motion.h2 
                            initial={{ opacity: 0, x: '100%' }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: 'ease' } }}
                            className="relative text-center sm:text-start xl:text-3xl lg:text-2xl md:text-3xl text-2xl font-semibold text-secondaryColor mb-3
                        before:absolute before:w-[250px] before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-accentColor before:to-transparent before:left-0 before:-bottom-1 before:rounded-full
                        ">Hi there! I&apos;m <span className="text-accentColor">Mohamed Nasr</span>.
                        </motion.h2>
                        <motion.h3 
                            initial={{ opacity: 0, x: '100%' }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, type: 'ease' } }}
                            className="xl:text-sm lg:text-xs text-sm lg:tracking-wider md:tracking-wide font-normal text-secondaryColor mb-2 text-opacity-[0.8] text-center sm:text-start"
                        >
                            A front-end developer with a passion for creating beautiful, responsive websites and applications.
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, x: '100%' }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, type: 'ease' } }}
                            className="text-center sm:text-start lg:text-xs md:text-[18px] text-[16px] font-light text-secondaryColor text-opacity-[0.3] xl:leading-5 lg:leading-[28px] leading-6 xl:tracking-widest lg:tracking-wide tracking-wider"
                        >
                            With experience in HTML, CSS, JavaScript, TypeScript, SASS, Bootstrap, framer-motion, next.js and React, I have a broad range of skills that allow me to bring your ideas to life on the web. I believe that great design starts with a deep understanding of user needs and a commitment to accessibility and inclusivity. That&apos;s why I strive to create websites and applications that are not only visually stunning but also easy to use and accessible to all. Whether you&apos;re looking for a simple static site or a complex web application, I&apos;m here to help you achieve your goals. I&apos;m dedicated to delivering high-quality work on time and on budget, and I&apos;m always eager to learn and grow as a developer. I&apos;m based in egypt, and I&apos;m always open to new projects and collaborations. If you&apos;re interested in working together or just want to say hi, feel free to reach out through my contact page. I&apos;m looking forward to hearing from you!
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
