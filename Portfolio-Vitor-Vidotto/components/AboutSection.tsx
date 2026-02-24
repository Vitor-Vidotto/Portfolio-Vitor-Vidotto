"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const SKILLS = [
    { category: "Frontend Development", items: "React, Next.js, Vue, Nuxt.js, Flutter, HTML, CSS, JavaScript" },
    { category: "Backend Development", items: "Node.js, Express, Django, Rust, REST API" },
    { category: "Mobile Development", items: "React Native, Flutter" },
    { category: "Database", items: "MySQL, MongoDB, Firebase" },
    { category: "Process Automation", items: "Python" },
    { category: "Software Development", items: "Tauri, Electron, .NET" },
    { category: "Virtual Environments & Games", items: "Unity and Unreal Engine" },
    { category: "Infrastructure & Support", items: "Installation, Configuration, Networks and Servers" },
    { category: "Operating System", items: "Linux" },
    { category: "DevOps", items: "Docker" },
]

const AboutSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section ref={ref} id="about-content" className="text-white w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                <div className="absolute -left-20 top-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -right-20 bottom-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-[400px] mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl rotate-6 opacity-30 blur-lg group-hover:blur-xl transition-all" />
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                                <Image
                                    src="/images/about-image.jpeg"
                                    alt="Vitor Vidotto"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <div className="text-left space-y-8">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-4xl text-white md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                            >
                                Who I Am
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify"
                            >
                                <p>
                                    I am a software developer with Fullstack, Mobile & Desktop experience.
                                    My journey is marked by a constant search for challenges that expand my skills.
                                </p>
                                <p>
                                    I transform ideas into innovative solutions. Whether creating high-performance websites,
                                    intuitive apps, or complex automations, my focus is always on adding real value to the project.
                                </p>
                            </motion.div>
                        </div>

                        {/* Skills List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
                                <span className="h-px w-8 bg-purple-400/50" />
                                Technical Skills
                            </h3>
                            <ul className="grid gap-3">
                                {SKILLS.map((skill, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.5 + (index * 0.05) }}
                                        className="text-sm md:text-base text-gray-400 border-l-2 border-white/10 pl-4 py-1 hover:border-purple-500/50 hover:bg-white/5 transition-colors rounded-r-lg"
                                    >
                                        <strong className="text-white block md:inline md:mr-2">{skill.category}:</strong>
                                        {skill.items}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
