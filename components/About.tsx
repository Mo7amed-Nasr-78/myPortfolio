import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { aboutTabs } from "@/data";

const About = () => {

	const [ activeTab, setActiveTab ] = useState<number>(0);

	return (
		<section
			id="about"
			className="min-h-screen w-full xl:mb-16 scroll-mt-10"
		>
			<div className="container relative">
				<div className="text-center sm:text-start mt-5 mb-16">
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
						who I am
					</motion.h2>
					<motion.h3
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: {
								delay: 0.5,
								duration: 0.5,
							},
						}}
						className="text-secondaryColor text-opacity-[0.8] mt-1 xl:text-xl text-sm font-extralight"
					>
						Blending creativity to bring ideas to life
					</motion.h3>
				</div>
				<div className="relative h-full w-full flex flex-col lg:flex-row items-center justify-between xl:gap-12 lg:gap-4 md:gap-16 gap-10">
					<motion.div
						initial={{ opacity: 0, x: "-100%" }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 0.8,
								type: "spring",
								stiffness: 150,
							},
						}}
						className="relative lg:w-1/2 md:w-[70%] sm:w-[80%]"
					>
						<img
							src="./about-img-2.svg"
							alt="aboutPhoto"
							className="w-full h-full obejct-cover object-center"
						/>
					</motion.div>

					<div className="flex items-center sm:items-start justify-center flex-col xl:w-1/2 lg:w-[58%]">
						<div className="w-full flex flex-col gap-6">
							<div className="flex items-center gap-0 relative before:content before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-primaryColor before:to-transparent">
								{
									aboutTabs.map(({ tab }, index) => {
										return (
											<h4 key={index} onClick={() => setActiveTab(index)} className={`${activeTab === index? "bg-primaryColor": "bg-transparent"} text-primaryText text-lg p-5 capitalize select-none cursor-pointer duration-300`}>
												{ tab }
											</h4>
										)
									})
								}
							</div>
							<div className="flex flex-col">
								{
									aboutTabs.map(({ title, desc, skills, cvPath }, index) => {
										return (
											activeTab === index && (
												<>
													<h3 className="w-3/4 text-2xl leading-9 text-primaryText capitalize mb-4">{ title }</h3>
													<p className="text-lg text-primaryText/75 font-extralight mb-8">{ desc }</p>
													<h3 className="w-3/4 text-2xl leading-9 text-primaryText capitalize mb-4">skills stack</h3>
													<div className="w-full flex gap-4 overflow-hidden overflow-x-auto scrollbar-hidden mb-12">
														{
															skills.map((skill, index) => {
																return (
																	<div key={`skill-icon-${index}`} className="min-w-20 min-h-20 flex items-center justify-center rounded-xl border border-primaryColor bg-transparent duration-300 hover:bg-primaryColor/10 hover:border-primaryColor/10">
																		<img src={skill.icon} alt={skill.alt} className="h-10" />
																	</div>
																)
															})
														}
													</div>
													<motion.button 
														initial={{ opacity: 0, y: '100px'}}
														animate={{ opacity: 1, y: 0, transition: { duration: 0.8, type: 'ease' } }}
														whileHover={{ scale: 1.05, transition: { duration: 0.5, type: 'spring' } }}
														className="relative w-44 h-12 p-[2px] rounded-lg capitalize overflow-hidden md:mr-6 mx-auto md:mx-0 before:absolute before:w-[250px] before:h-[250px] before:-top-[102px] before:-left-[17px] before:bg-gradient-to-r before:from-lightGold hover:before:from-secondaryColor hover:before:via-primaryColor before:to-cherryPie hover:before:to-primaryColor before:animate-spin"
														>
														<span className="absolute top-[2px] left-[2px] bg-bgColor rounded-lg" style={{ width: 'calc(100% - 4px)', height: 'calc(100% - 4px)' }}>
															<a
																// href="#contact"
																href={cvPath}
																download="MERN_developer"
																className="relative flex items-center justify-center w-full h-full text-secondaryColor text-lg font-normal z-10 duration-300 ease-in-out"
															>
																download CV
															</a>
														</span>
													</motion.button>
												</>
											)
										)
									})
								}
							</div>
						</div>
						


						{/* <motion.h2
							initial={{ opacity: 0, x: "100%" }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: {
									duration: 0.5,
									type: "ease",
								},
							}}
							className="relative text-center sm:text-start xl:text-5xl lg:text-5xl font-medium text-secondaryColor mb-4
                            before:absolute before:w-[250px] before:h-[3px] before:bg-gradient-to-r before:from-transparent before:via-accentColor before:to-transparent before:left-0 before:-bottom-1 before:rounded-full leading-normal
                            "
						>
							Hi there! <br /> I&apos;m{" "}
							<span className="text-accentColor">
								Mohamed Nasr
							</span>
							.
						</motion.h2>
						<motion.h3
							initial={{ opacity: 0, x: "100%" }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: {
									duration: 0.6,
									type: "ease",
								},
							}}
							className="lg:text-lg text-sm lg:tracking-wider md:tracking-wide font-normal text-secondaryColor mb-2 text-opacity-[0.8] text-center sm:text-start"
						>
							A front-end developer with a passion
							for creating beautiful, responsive
							websites and applications.
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, x: "100%" }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: {
									duration: 0.8,
									type: "ease",
								},
							}}
							className="text-center sm:text-start 2xl:text-lg lg:text-sm font-light text-secondaryColor text-opacity-[0.3] tracking-wider  lg:leading-normal"
						>
							With experience in HTML, CSS,
							JavaScript, TypeScript, SASS,
							Bootstrap, framer-motion, next.js and
							React, I have a broad range of skills
							that allow me to bring your ideas to
							life on the web. I believe that great
							design starts with a deep
							understanding of user needs and a
							commitment to accessibility and
							inclusivity. That&apos;s why I strive
							to create websites and applications
							that are not only visually stunning
							but also easy to use and accessible to
							all. Whether you&apos;re looking for a
							simple static site or a complex web
							application, I&apos;m here to help you
							achieve your goals. I&apos;m dedicated
							to delivering high-quality work on
							time and on budget, and I&apos;m
							always eager to learn and grow as a
							developer. I&apos;m based in egypt,
							and I&apos;m always open to new
							projects and collaborations. If
							you&apos;re interested in working
							together or just want to say hi, feel
							free to reach out through my contact
							page. I&apos;m looking forward to
							hearing from you!
						</motion.p> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
