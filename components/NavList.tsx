import { navItems } from "@/data";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {  
    PiEnvelopeLight,
    PiListLight
} 
from "react-icons/pi";

const NavList = () => {
    const [visible, setVisible] = useState(false);

    const clickHandle = () => {
        if (!visible) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        function resizeHandle() {
            setVisible(false);
        }

        window.addEventListener("resize", resizeHandle);

        return () => {
            window.removeEventListener("resize", resizeHandle);
        };
    }, []);

    return (
        <nav className="h-16 flex items-center">
            <ul
                className={`${
                    visible
                        ? "absolute flex flex-col flex-start gap-1 sm:w-custom-100/2 w-custom-100/1 top-full sm:right-4 right-2 bg-gradient-to-br from-[#0e2f46] to-primaryColor border-b-[3px] border-accentColor rounded-br-sm rounded-bl-sm"
                        : "h-22 hidden lg:flex items-center justify-center relative"
                }`}
            >
                <div className="w-full h-9 flex items-center justify-between lg:hidden border-b border-accentColor pb-1">
                    <div className="flex items-center gap-1">
                        <div className="relaive w-7 h-7 rounded-full overflow-hidden">
                            <img
                                src="./menu_image.png"
                                alt="menu_image"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xs text-accentColor font-bold capitalize">
                                mohamed nasr
                            </h3>
                            <h4 className="text-[10px] font-semibold capitalize tracking-wider">
                                web develeoper
                            </h4>
                        </div>
                    </div>
                    <a href="#about" className="sm:block hidden">
                        <div className="w-7 h-7 flex items-center justify-center group rounded-full bg-[#4169E1] bg-opacity-[0.3] cursor-pointer">
                            {/* <IoPersonCircle className="w-5 h-5 text-secondaryColor group-hover:text-accentColor" /> */}
                        </div>
                    </a>
                </div>
                {navItems.map(({ title, link }, idx) => {
                    return (
                        <motion.li
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: visible ? 1 : 1.1,
                                transition: { duration: 0.5, type: "spring" },
                            }}
                            key={idx}
                            className={`overflow-hidden group ${
                                visible ? "h-7 w-full" : "relative h-full mx-4"
                            } `}
                        >
                            <motion.a
                                href={link}
                                className={`flex items-center w-full h-8 capitalize font-light text-xl text-secondaryColor ${
                                    visible
                                        ? "before:hidden justify-between group-hover:pl-1 group-hover:text-[28px] group-hover:font-semibold duration-100"
                                        : "block"
                                } before:w-full before:h-[2px] before:absolute before:bottom-0 before:-left-full before:bg-accentColor before:transition-[0.6s] hover:before:left-0 before:rounded-full`}
                                whileHover={{ color: "#3498DB" }}
                            >
                                {title}
                                {/* <IoArrowForward className="text-sm text-secondaryColor text-opacity-75 group-hover:text-opacity-100 group-hover:animate-bounceX lg:hidden" /> */}
                            </motion.a>
                        </motion.li>
                    );
                })}
            </ul>
            <span className="hidden lg:inline-block h-[65%] w-0.5 rounded-full bg-primaryText/50 ml-2 mr-5"></span>
            <div className="flex items-center gap-2">
                <div className="h-12 w-12 flex items-center justify-center rounded-full duration-300 bg-primaryColor/25 hover:bg-primaryColor cursor-pointer hover:scale-95">
                    <a href="mailto:mohamed.ibrahim.nasr2020@gmail.com">
                        <PiEnvelopeLight className="text-primaryText text-2xl" />
                    </a>
                </div>
                <div className="lg:hidden h-12 w-12 flex items-center justify-center rounded-full duration-300 bg-primaryColor/25 hover:bg-primaryColor cursor-pointer hover:scale-95">
                    <PiListLight
                        className="text-primaryText text-2xl"
                        onClick={clickHandle}
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavList;
