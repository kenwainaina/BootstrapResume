"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  RocketIcon,
  ShoppingCartIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  HeartIcon,
  BookOpenIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-red-950 to-purple-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-12">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link href="/projects" passHref>
                <Button variant="outline">Current Projects</Button>
              </Link>
            </li>
            <li>
              <Link href="/games" passHref>
                <Button variant="outline">Games & Coding Projects</Button>
              </Link>
            </li>
            <li>
              <Link href="/classes" passHref>
                <Button variant="outline">My Classes</Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Kenyatta (Ken) Wainaina</h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Interactive Design Major & CIS Minor at James Madison University
            </h2>
            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="icon">
                <GithubIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <MailIcon className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-gray-300">Great Falls, VA 22066 | 571-484-4791 | wainaikg@dukes.jmu.edu</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20" />
            <img
              src="/Professional-Pic.jpeg"
              alt="Profile"
              className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-white/10"
            />
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <p className="text-gray-300 leading-relaxed">
                A highly motivated Interactive Design major with a minor in Computer Information Systems, possessing a
                robust background in data analytics, generative AI, and software development. Proficient in SQL, Python,
                Java, CSS, and HTML. Experienced in building and maintaining personal websites, utilizing Microsoft
                tools, and database systems. I also have a basic knowledge of cybersecurity and privacy controls and
                regulations (e.g., NIST, FISMA, FISCAM) and am eager to learn more about these areas. Adept at project
                management and team collaboration, with a strong focus on delivering efficient IT solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCapIcon className="mr-2" /> Education
          </h2>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white">James Madison University, Harrisonburg, VA</h3>
              <p className="text-gray-300">Degree – Computer Information Systems / UI/UX Design</p>
              <p className="text-gray-400">Graduation: May 2025</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <BriefcaseIcon className="mr-2" /> Work Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <RocketIcon className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Robot Engineer</h3>
                    <p className="text-gray-400">Starship Technologies</p>
                    <p className="text-sm text-gray-500">February 2021 - Present</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Managed and maintained 60 on-campus delivery robots, resolving technical issues and ensuring
                    smooth operation
                  </li>
                  <li>
                    • Led and trained a team of 20 student employees, mentoring them on coding, testing, and
                    implementation
                  </li>
                  <li>• Awarded US Employee of the Year in 2021, 2022, 2023 for outstanding performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <ShoppingCartIcon className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Administrative and Communications Intern</h3>
                    <p className="text-gray-400">Harrisonburg Rockingham Chamber of Commerce</p>
                    <p className="text-sm text-gray-500">May 2024 – August 2024</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Engineered an efficient integration framework for QuickBooks and Chamber Master, accelerating
                    reporting capabilities
                  </li>
                  <li>• Created and scheduled social media announcements to promote Chamber events and initiatives</li>
                  <li>
                    • Researched and proposed alternative solutions for existing paid memberships to online systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <ShoppingCartIcon className="h-8 w-8 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Admissions Manager</h3>
                    <p className="text-gray-400">Water Mine Family Swimming Hole</p>
                    <p className="text-sm text-gray-500">May 2018 - September 2021</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced from Cashier to manager in two years, leading and optimizing a team of 7 cashiers</li>
                  <li>• Collaborated with upper management to define and implement roles and responsibilities</li>
                  <li>• Coached and mentored cashiers to improve customer service and performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCapIcon className="mr-2" /> Leadership and Activities
          </h2>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white">Head Coach (Volunteer)</h3>
              <p className="text-gray-300">Little Legends Basketball, Vienna, VA</p>
              <p className="text-gray-400">November 2017 - Current</p>
              <ul className="space-y-2 text-gray-300 mt-4">
                <li>• Coached 12 kids from 6th to 8th grade</li>
                <li>• Won Coach of the Year award two years in a row</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <HeartIcon className="mr-2" /> Interests
          </h2>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <p className="text-gray-300">
                Technology including AI, UI/UX Design, Robotics, Team Sports (Basketball, Football, Lacrosse), Golf
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

