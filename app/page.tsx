"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FastCards from "@/components/FastCards";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const scrollHandle = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", scrollHandle);

        return () => {
            window.removeEventListener("scroll", scrollHandle);
        };
    }, [scrollY]);

    return (
        <main className="relative flex items-center justify-center flex-col overflow-hidden bg-primaryColor">
            <div className="max-w-7xl w-full">
                <Header scrollY={scrollY} />
                <Hero />
                <FastCards />
                <About />
                <Services />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
