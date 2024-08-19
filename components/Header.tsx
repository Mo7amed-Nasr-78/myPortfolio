"use client";

import React, { useEffect, useState } from "react";
import NavList from "@/components/NavList";
import { motion } from "framer-motion";
import { MdOpacity } from "react-icons/md";

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
            className={`fixed top-0 right-0 left-0 z-30 flex items-center justify-center duration-200 ease-in-out ${scrollY > 0? 'bg-primaryColor': 'bg-transparent'}`}
        >
            <div className={`container h-full relative flex items-center justify-between py-1 ${scrollY > 0? 'before:bg-gradient-to-r': 'before:bg-none'} before:absolute xl:before:w-custom-100/8 sm:before:w-custom-100/2 before:w-custom-100/1 before:h-[1px] before:rounded-full before:from-secondaryColor before:via-accentColor before:to-secondaryColor xl:before:left-16 sm:before:left-4 before:left-2 before:-bottom-[1px] before:duration-1000 before:ease-in-out`}>
                <div>
                    <motion.svg
                        height="40px"
                        width="40px"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        variants={svgVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <motion.path
                            d="M19.8439 16.4678C19.4014 16.039 19.4482 15.316 19.9422 14.9478L38.4024 1.19056C39.0621 0.698986 40 1.16975 40 1.99239L40 33.6385C40 34.5218 38.9385 34.9713 38.3041 34.3566L19.8439 16.4678Z"
                            className="fill-accentColor"
                            variants={pathVariants}
                        />
                        <motion.path
                            d="M2 2L38 38"
                            className=" stroke-accentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            variants={pathVariants}
                        />
                        <motion.path
                            d="M19.9395 26.0607L2.00012 8.00001"
                            className="stroke-accentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            variants={pathVariants}
                        />
                        <motion.path
                            d="M2 38L2 8"
                            className="stroke-accentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            variants={pathVariants}
                        />
                    </motion.svg>
                </div>
                <NavList />
            </div>
        </motion.header>
    );
};

export default Header;
