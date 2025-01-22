"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TicTacToe from "@/components/TicTacToe"

export default function GamesAndProjects() {
  const projects = [
    {
      title: "Tic-Tac-Toe AI",
      description: "A classic game of Tic-Tac-Toe with an AI opponent using a simple random move strategy.",
      component: <TicTacToe />,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Fractal Tree Generator",
      description:
        "An interactive fractal tree generator that allows users to adjust parameters and create beautiful patterns.",
      link: "#",
      technologies: ["p5.js", "JavaScript"],
    },
    {
      title: "Sorting Algorithm Visualizer",
      description:
        "A tool to visualize various sorting algorithms in action, including bubble sort, quick sort, and merge sort.",
      link: "#",
      technologies: ["React", "JavaScript", "CSS3"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-red-950 to-purple-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" passHref>
          <Button variant="outline" className="mb-8">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Games & Coding Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-500/20 text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.component ? (
                    project.component
                  ) : (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLinkIcon className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

