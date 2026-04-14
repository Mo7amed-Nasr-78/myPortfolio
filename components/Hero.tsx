import React, { useEffect, useState } from "react";
import { socialIcons } from "@/data";
import { motion } from "framer-motion";
import { 
    PiArrowUpRight
} 
from "react-icons/pi";

const Hero = () => {

    const [ jobTitle, setJobTitle ] = useState<string>('Developer');

    // useEffect(() => {

    //     function jobTitlesLoad() {
    //         setTimeout(() => {
    //             setJobTitle('developer');
    //         }, 0);
    //         setTimeout(() => {
    //             setJobTitle('designer');
    //         }, 5000);
    //         setTimeout(() => {
    //             setJobTitle('freelancer');
    //         }, 10000);
    //         setTimeout(() => {
    //             setJobTitle('creator');
    //         }, 15000);
    //     }

    //     jobTitlesLoad();
    //     setInterval(jobTitlesLoad, 20000);
    // }, []);

    return (
        <section id='home' className="relative min-h-screen w-full overflow-hidden flex items-center justify-center before:absolute before:left-0 before:-bottom-10 before:w-full before:h-28 before:bg-gradient-to-b before:from-transparent before:to-bgColor">
            <div className="absolute lg:top-[50%] top-[20%] z-[2] lg:translate-y-[-50%] translate-y-[-20%] xl:right-24 lg:-right-[60px] md:-right-[-50%] md:translate-x-[50%] lg:translate-x-[-50%] w-80 h-80 rounded-full blur-[90px] animate-shadowAnimate opacity-50"></div>
            <div className="container relative wfull h-full flex lg:flex-row flex-col-reverse items-center justify-between mt-10">
                
                <div className="w-[50%] text-center md:text-left">
                    <motion.h1 
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0, transition: { type: 'ease', dration: 0.3 }}}
                        className="capitalize 2xl:text-7xl sm:text-6xl sm:leading-[70px] text-3xl sm:font-bold font-bold mb-2"
                        >
                            Hello, i&apos;m <br /> {" "}
                            <span className="bg-clip-text bg-gradient-to-r from-primaryText to-richMaroom text-transparent">
                                mohamed nasr
                            </span>
                    </motion.h1>
                    <motion.h2 
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0, transition: { type: 'ease', duration: 0.5 } }}
                        className="capitalize text-3xl font-semibold z-[1] mb-3">
                        full stack{" "}
                        <span className="relative text-darkMintGreen">
                            {/* { jobTitle } */}
                            Developer
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0, transition: { type: 'ease', duration: 0.6 } }}
                        className="first-letter:capitalize 2xl:mb-14 mb-10 xl:text-xl lg:text-lg md:text-sm text-[16px] tracking-wider text-primaryText font-extralight"
                        >
                        Take a look at my work and let&apos;s discuss <br /> how
                        we can make your vision a reality.
                    </motion.p>
                    <div className="flex items-center mb-20">
                        <motion.button 
                            initial={{ opacity: 0, x: '-100%'}}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, type: 'ease' } }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.5, type: 'spring' } }}
                            className="relative w-44 h-12 p-[2px] rounded-lg capitalize overflow-hidden md:mr-6 mx-auto md:mx-0 before:absolute before:w-[250px] before:h-[250px] before:-top-[102px] before:-left-[17px] before:bg-gradient-to-r before:from-lightGold hover:before:from-secondaryColor hover:before:via-primaryColor before:to-cherryPie hover:before:to-primaryColor before:animate-spin"
                            >
                            <span className="absolute top-[2px] left-[2px] bg-bgColor rounded-lg" style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)' }}>
                                <a
                                    href="#contact"
                                    className="relative flex items-center justify-center w-full h-full text-secondaryColor text-lg font-normal z-10 duration-300 ease-in-out"
                                >
                                    hire me
                                </a>
                            </span>
                        </motion.button>
                        <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1, duration: 0.5, type: 'ease' } }}
                            className="hidden md:flex w-12 h-12 items-center justify-center border border-primaryColor text-primaryColor rounded-full capitalize duration-300 hover:bg-primaryColor hover:text-primaryText"
                        >
                            <PiArrowUpRight className="text-2xl group-hover:animate-pulse" />
                        </motion.button>
                    </div>
                    <div className="flex items-center gap-4">
                        {socialIcons.map(({ id, title, icon: Icon, link }) => {
                            return (
                                <a href={link} key={id} target="_blanck">
                                    <motion.div 
                                        initial={{ opacity: 1, scale: 1, y: 200 }}
                                        animate={{ opacity: 1, y: 0, transition: { duration: id / 4, type: 'spring' } }}
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut' }}}
                                        className="xl:w-14 xl:h-14 lg:w-12 lg:h-12 flex items-center justify-center border border-secondaryColor hover:border-primaryColor hover:bg-primaryColor hover:text-white rounded-full cursor-pointer"
                                        >
                                            <Icon className="text-2xl"/>
                                    </motion.div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9}}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 1,duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                    className="relative xl:w-[45%] lg:w-6/12 lg:-mt-2 md:mt-14 mt-12 select-none z-[3]"
                    >
                    <img
                        src="./main_4.png"
                        alt="Hero_Image"
                        className="w-full h-full object-center object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
