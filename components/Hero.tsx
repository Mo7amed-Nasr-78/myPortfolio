import React, { useEffect, useState } from "react";
import { socialIcons } from "@/data";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";


const Hero = () => {

    const landingBtns = [
        { id: 1, title: "hire me", link: "#contact" },
        { id: 2, title: "my works", link: "#projects" },
    ];

    const [ jobTitle, setJobTitle ] = useState<string>();

    useEffect(() => {

        function jobTitlesLoad() {
            setTimeout(() => {
                setJobTitle('developer');
            }, 0);
            setTimeout(() => {
                setJobTitle('designer');
            }, 5000);
            setTimeout(() => {
                setJobTitle('freelancer');
            }, 10000);
            setTimeout(() => {
                setJobTitle('creator');
            }, 15000);
        }

        jobTitlesLoad();
        setInterval(jobTitlesLoad, 20000);
    }, []);

    // bg-[url(/Hero_Shadow.svg)]
    // md:bg-md-size xl:bg-contain bg-no-repeat lg:bg-[90%] md:bg-top
    // bg-gradient-to-br from-accentColor via-cherryPie to-lightGold 

    return (
        <section id='home' className="relative min-h-screen w-screen overflow-hidden xl:pb-10 bg-transparent flex items-center justify-center md:flex-col before:absolute before:left-0 before:-bottom-10 before:w-full before:h-28 before:bg-gradient-to-b before:from-transparent before:to-primaryColor">
            <div className="absolute lg:top-[50%] top-[20%] z-[2] lg:translate-y-[-55%] translate-y-[-20%] xl:-right-6 lg:-right-[60px] md:-right-[-50%] md:translate-x-[50%] lg:translate-x-[-50%] w-72 h-72 rounded-full blur-[90px] animate-shadowAnimate opacity-40"></div>
            <div className="container relative flex flex-col md:justify-center lg:flex-row-reverse items-center lg:justify-between mb-16 lg:mb-0 ">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9}}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 1,duration: 0.5, type: 'spring', damping: 6, mass: 0.5 } }}
                    className="relative md:w-[600px] lg:w-[1200px] xl:w-[1200px] lg:mt-10 md:mt-14 mt-16 select-none z-[3]"
                    >
                    <img
                        src="./Hero_Photo_2.svg"
                        alt="Hero_Image"
                        className="w-full h-full object-center object-cover"
                    />
                </motion.div>

                <div className="w-full text-center md:text-left">
                    <motion.h1 
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0, transition: { type: 'ease', dration: 0.3 }}}
                        className="capitalize text-3xl sm:text-5xl lg:text-5xl xl:text-6xl sm:font-semibold font-bold mb-2"
                        >
                        Hello, i&apos;m <br /> {" "}
                        <span className="bg-clip-text bg-gradient-to-r from-secondaryColor to-richMaroom text-transparent">
                            mohamed nasr
                        </span>
                    </motion.h1>
                    <motion.h2 
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0, transition: { type: 'ease', duration: 0.5 } }}
                        className="capitalize text-xl font-semibold z-[1]">
                        front end{" "}
                        <span className="relative px-1 text-darkMintGreen">
                            { jobTitle }
                            <motion.span 
                                className="absolute top-0 left-0 w-full h-full border-l-2 border-l-accentColor bg-primaryColor animate-backForth"
                                >
                            </motion.span>
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0, transition: { type: 'ease', duration: 0.6 } }}
                        className="first-letter:capitalize mt-2 mb-4 xl:text-lg lg:text-sm md:text-xs text-[16px] tracking-wide text-secondaryColor font-light"
                        >
                        Take a look at my work and let&apos;s discuss <br /> how
                        we can make your vision a reality.
                    </motion.p>
                    <div className="flex items-center gap-3">
                        <motion.button 
                            initial={{ opacity: 0, x: '-100%'}}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, type: 'ease' } }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.5, type: 'spring' } }}
                            className="relative w-36 h-9 p-[2px] rounded-lg capitalize overflow-hidden md:mr-6 mx-auto md:mx-0 before:absolute before:w-[250px] before:h-[250px] before:-top-[102px] before:-left-[17px] before:bg-gradient-to-r before:from-lightGold hover:before:from-secondaryColor hover:before:via-primaryColor before:to-cherryPie hover:before:to-accentColor before:animate-spin"
                            >
                            <span className="absolute top-[2px] left-[2px] bg-primaryColor rounded-lg" style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)' }}>
                                <a
                                    href="#contact"
                                    className="relative flex items-center justify-center w-full h-full text-secondaryColor text-sm font-light z-10 duration-300 ease-in-out"
                                >
                                    hire me
                                </a>
                            </span>
                        </motion.button>
                        <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1, duration: 0.5, type: 'ease' } }}
                            className="hidden md:block capitalize group"
                        >
                            <span>
                                <a
                                    href='#projects'
                                    className="flex items-center justify-center text-secondaryColor group-hover:text-accentColor group-hover:underline text-sm font-light duration-300 ease-in-out"
                                >
                                    my works{" "}
                                    {<MdArrowOutward className="ms-1 group-hover:animate-pulse" />}
                                </a>
                            </span>
                        </motion.button>
                    </div>
                </div>

                <div className="absolute flex items-center lg:gap-2 md:gap-10 xl:bottom-2 xl:left-16 lg:left-4 left-[50%] translate-x-[-50%] md:translate-x-0 lg:bottom-0 md:bottom-8 -bottom-12 md:left-[90%]">
                    <div className="flex items-center lg:gap-3 gap-4 md:flex-col lg:flex-row">
                        {socialIcons.map(({ id, title, icon, link }) => {
                            return (
                                <motion.div 
                                    key={id} 
                                    initial={{ opacity: 0, y: 200, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: id / 4, type: 'spring' } }}
                                    className="w-7 h-7 flex items-center justify-center border-[1px] border-accentColor hover:animate-bounce hover:-translate-y-1 duration-300 ease-in-out rounded-full cursor-pointer"
                                    >
                                    <a href={link}>
                                        <img
                                            src={icon}
                                            alt={title}
                                            className="w-4 h-4"
                                        />
                                    </a>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
