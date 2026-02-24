"use client"
import React, { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

const projectsData = [
    {
        id: 6,
        title: "ListaMestra Software",
        description: "File control software with automations and control functions. In production as the main tool for two companies.",
        image: "/images/projects/7.png",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/Vitor-Vidotto/ListaMestra",
        previewUrl: "https://github.com/Vitor-Vidotto/ListaMestra",
    },
    {
        id: 4,
        title: "Administrative Prototype",
        description: "Application for a fictional company with an administrative panel and client area.",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/AutomatizaLabs/AutomatizaLabs",
        previewUrl: "https://automatiza-labs-three.vercel.app/",
    },
    {
        id: 1,
        title: "FavMovies App",
        description: "Mobile application for listing and movie details.",
        image: "/images/projects/1.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/Vitor-Vidotto/FavMovies",
        previewUrl: "https://github.com/Vitor-Vidotto/FavMovies",
    },
    {
        id: 7,
        title: "EasyCD Software",
        description: "Cooldown control for gaming teams with overlay and real-time connection.",
        image: "/images/projects/9.png",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/Vitor-Vidotto/easy-cd",
        previewUrl: "https://github.com/Vitor-Vidotto/easy-cd",
    },
    {
        id: 8,
        title: "Guild Hub",
        description: "Site for a gaming guild with member information and combat compositions.",
        image: "/images/projects/8.png",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/Vitor-Vidotto/Helldivers",
        previewUrl: "https://helldivers.vercel.app/",
    },
    {
        id: 2,
        title: "Backup Controller C#",
        description: "Monitoring and sending files via FTP for backup and log generation.",
        image: "/images/projects/2.png",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/Vitor-Vidotto",
        previewUrl: "https://github.com/Vitor-Vidotto",
    },
    {
        id: 3,
        title: "Angular Portfolio",
        description: "First digital portfolio developed in Angular for studies.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Vitor-Vidotto/Portifolio",
        previewUrl: "https://vitor-vidotto.github.io/Portifolio/",
    },
    {
        id: 5,
        title: "Python Automations",
        description: "Automation scripts for cleaning, organizing, and repetitive processes.",
        image: "/images/projects/6.png",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/Vitor-Vidotto/python-automations",
        previewUrl: "https://github.com/Vitor-Vidotto/python-automations",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const handleTagChange = (newTag: string) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 }
    }

    return (
        <section id="projects" className="py-12 md:py-24 px-4 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 md:mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    My Projects
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A collection of work demonstrating my skills in web, mobile, and desktop development.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
                <ProjectTag onClick={handleTagChange} name="Desktop" isSelected={tag === "Desktop"} />
            </div>

            <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.li
                            key={project.id}
                            layout
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            exit="exit"
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </section>
    )
}

const ProjectTag = ({ name, onClick, isSelected }: { name: string, onClick: (name: string) => void, isSelected: boolean }) => {
    const buttonStyles = isSelected
        ? "text-white bg-purple-600 border-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
        : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white bg-transparent"

    return (
        <button
            className={`${buttonStyles} rounded-full border px-6 py-2 text-base md:text-lg cursor-pointer transition-all duration-300 font-medium`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: any) => {
    return (
        <div className="h-full group">
            <div className="h-52 md:h-64 rounded-t-xl relative overflow-hidden bg-black/20 backdrop-blur-sm border-t border-x border-white/10">
                <div
                    className="w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-4">
                    <Link
                        href={gitUrl}
                        target="_blank"
                        className="h-12 w-12 border border-[#ADB7BE] rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group/link"
                    >
                        <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover/link:text-white cursor-pointer" />
                    </Link>
                    <Link
                        href={previewUrl}
                        target="_blank"
                        className="h-12 w-12 border border-[#ADB7BE] rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition-all group/link"
                    >
                        <EyeIcon className="h-6 w-6 text-[#ADB7BE] group-hover/link:text-white cursor-pointer" />
                    </Link>
                </div>
            </div>

            <div className="text-white rounded-b-xl bg-[#181818]/60 backdrop-blur-md border border-white/10 py-6 px-4 h-[180px] flex flex-col hover:border-purple-500/30 transition-colors">
                <h5 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{title}</h5>
                <p className="text-[#ADB7BE] text-sm leading-relaxed flex-grow">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectsSection
