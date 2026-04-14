import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { aboutTabs } from "@/data";

const About = () => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const skillContainerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const skillItemVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			id="about"
			className="min-h-screen w-full xl:mb-16 scroll-mt-24"
		>
			<div className="container relative overflow-hidden">
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

				<div className="relative h-full w-full flex flex-col lg:flex-row items-start justify-between xl:gap-12 lg:gap-4 md:gap-16 gap-10">
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
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{
									opacity: 1,
									transition: {
										delay: 1,
										type: "ease",
									},
								}}
								className="flex items-center gap-0 relative before:content before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-primaryColor before:to-transparent"
							>
								{aboutTabs.map(
									({ tab }, index) => {
										return (
											<h4
												key={
													index
												}
												onClick={() =>
													setActiveTab(
														index,
													)
												}
												className={`${activeTab === index ? "bg-primaryColor" : "bg-transparent"} text-primaryText text-lg p-5 capitalize select-none cursor-pointer duration-300`}
											>
												{tab}
											</h4>
										);
									},
								)}
							</motion.div>
							<div className="flex flex-col">
								{aboutTabs.map(
									(
										{
											title,
											desc,
											skills,
											cvPath,
										},
										index,
									) => {
										return (
											activeTab ===
												index && (
												<>
													<motion.h3
														initial={{
															opacity: 0,
															x: "100%",
														}}
														whileInView={{
															opacity: 1,
															x: 0,
															transition:
																{
																	duration: 0.8,
																	type: "ease",
																},
														}}
														className="w-3/4 text-2xl leading-9 text-primaryText capitalize mb-4"
													>
														{
															title
														}
													</motion.h3>
													<motion.p
														initial={{
															opacity: 0,
															x: "100%",
														}}
														whileInView={{
															opacity: 1,
															x: 0,
															transition:
																{
																	duration: 0.8,
																	type: "ease",
																	delay: 0.2,
																},
														}}
														className="text-lg text-primaryText/75 font-extralight mb-8"
													>
														{
															desc
														}
													</motion.p>
													<motion.h3
														initial={{
															opacity: 0,
															x: "100%",
														}}
														whileInView={{
															opacity: 1,
															x: 0,
															transition:
																{
																	duration: 0.8,
																	type: "ease",
																},
														}}
														className="w-3/4 text-2xl leading-9 text-primaryText capitalize mb-4"
													>
														skills
														stack
													</motion.h3>
													<motion.div
														variants={
															skillContainerVariants
														}
														initial="hidden"
														whileInView="visible"
														className="w-full mb-12 overflow-hidden"
													>
														<motion.div
															animate={{ x: [0, "-50%"] }}
															transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
															className="w-full flex gap-4 scrollbar-hidden"
														>
															{skills.map(
																(
																	skill,
																	index,
																) => {
																	return (
																		<motion.div
																			key={`skill-icon-${index}`}
																			variants={
																				skillItemVariants
																			}
																			className="min-w-20 min-h-20 flex items-center justify-center rounded-xl border border-primaryColor bg-transparent duration-300 hover:bg-primaryColor/10 hover:border-primaryColor/10"
																		>
																			<img
																				src={
																					skill.icon
																				}
																				alt={
																					skill.alt
																				}
																				className="h-10"
																			/>
																		</motion.div>
																	);
																},
															)}
														</motion.div>
													</motion.div>
													<motion.button
														initial={{
															opacity: 0,
															x: "100%",
														}}
														animate={{
															opacity: 1,
															x: 0,
															transition:
																{
																	duration: 0.8,
																	type: "ease",
																},
														}}
														whileHover={{
															scale: 1.05,
															transition:
																{
																	duration: 0.5,
																	type: "spring",
																},
														}}
														className="relative w-44 h-12 p-[2px] rounded-lg capitalize overflow-hidden md:mr-6 mx-auto md:mx-0 before:absolute before:w-[250px] before:h-[250px] before:-top-[102px] before:-left-[17px] before:bg-gradient-to-r before:from-lightGold hover:before:from-secondaryColor hover:before:via-primaryColor before:to-cherryPie hover:before:to-primaryColor before:animate-spin"
													>
														<span
															className="absolute top-[2px] left-[2px] bg-bgColor rounded-lg"
															style={{
																width: "calc(100% - 4px)",
																height: "calc(100% - 4px)",
															}}
														>
															<a
																// href="#contact"
																href={
																	cvPath
																}
																download="MERN_developer"
																className="relative flex items-center justify-center w-full h-full text-secondaryColor text-lg font-normal z-10 duration-300 ease-in-out"
															>
																download
																CV
															</a>
														</span>
													</motion.button>
												</>
											)
										);
									},
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
