"use client";
import React from "react";
import NavList from "@/components/NavList";
import { motion } from "framer-motion";

interface props {
    scrollY: number
}

const svgVariants =  {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            type: 'ease'
        }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1.5,
            type: 'ease'
        }
    }
}


const Header = ({ scrollY }: props) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: '-100px' }}
            animate={{ opacity: 1, y: '0px', transition: { duration: 0.5, type: 'keyframes' } }}
            className={`fixed top-0 left-0 right-0 z-30 duration-100 ease-in-out ${scrollY > 0? 'bg-bgColor pt-2': 'bg-transparent py-4'}`}
        >
            <div className="container w-full">
                <div className={`relative w-full flex items-center justify-between ${scrollY > 0? 'before:bg-gradient-to-r': 'before:bg-none'} before:absolute before:w-full before:h-[1px] before:rounded-full before:from-primaryColor before:via-primaryColor before:to-primaryText before:left-0 before:-bottom-0 before:duration-1000 before:ease-in-out`}>
                    <a href="#home">
                        <motion.svg
                                height="45px"
                                width="45px"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                variants={svgVariants}
                                initial='hidden'
                                animate='visible'
                            >
                                <motion.path
                                    d="M19.8439 16.4678C19.4014 16.039 19.4482 15.316 19.9422 14.9478L38.4024 1.19056C39.0621 0.698986 40 1.16975 40 1.99239L40 33.6385C40 34.5218 38.9385 34.9713 38.3041 34.3566L19.8439 16.4678Z"
                                    className="fill-primaryColor"
                                    variants={pathVariants}
                                />
                                <motion.path
                                    d="M2 2L38 38"
                                    className=" stroke-primaryColor"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    variants={pathVariants}
                                />
                                <motion.path
                                    d="M19.9395 26.0607L2.00012 8.00001"
                                    className="stroke-primaryColor"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    variants={pathVariants}
                                />
                                <motion.path
                                    d="M2 38L2 8"
                                    className="stroke-primaryColor"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    variants={pathVariants}
                                />
                        </motion.svg>
                    </a>
                    <NavList/>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
