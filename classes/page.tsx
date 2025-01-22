"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Course = {
  code: string
  name: string
  description: string
}

type CourseCategory = {
  name: string
  courses: Course[]
}

const courseCategories: CourseCategory[] = [
  {
    name: "General Education Courses",
    courses: [
      {
        code: "ECON 201",
        name: "Introduction to Microeconomics",
        description:
          "Introduction to the principles of microeconomics, including supply and demand, market structures, and consumer behavior.",
      },
      {
        code: "ECON 200",
        name: "Introduction to Macroeconomics",
        description: "Overview of macroeconomic principles like national income, monetary policy, and economic growth.",
      },
      {
        code: "MATH 199",
        name: "Algebra/Precalculus Gateway",
        description: "Foundational algebra and precalculus concepts.",
      },
      {
        code: "MATH 205",
        name: "Introductory Calculus I",
        description: "Introduction to calculus concepts, including limits, derivatives, and integrals.",
      },
      {
        code: "PHIL 120",
        name: "Critical Thinking",
        description: "Focus on logical reasoning and problem-solving skills.",
      },
      {
        code: "PHIL 150",
        name: "Ethical Reasoning",
        description: "Exploration of ethical theories and their applications to real-world scenarios.",
      },
      {
        code: "PSYC 101",
        name: "General Psychology",
        description: "Survey of psychological principles, including human behavior, cognition, and emotion.",
      },
      {
        code: "SCOM 123",
        name: "Fundamentals of Human Communication: Group Presentations",
        description: "Focus on group communication, presentation skills, and collaborative teamwork.",
      },
      {
        code: "HIST 225",
        name: "U.S. History",
        description: "Examination of key events and themes in American history.",
      },
      {
        code: "KIN 100",
        name: "Lifetime Fitness and Wellness",
        description: "Principles of personal fitness and wellness with practical fitness activities.",
      },
      {
        code: "HTH 100",
        name: "Personal Wellness",
        description: "Overview of health and wellness, including mental health, nutrition, and stress management.",
      },
      {
        code: "REL 101",
        name: "Religions of the World",
        description: "Study of major world religions, their beliefs, practices, and cultural impacts.",
      },
    ],
  },
  {
    name: "College of Business Courses",
    courses: [
      {
        code: "COB 191",
        name: "Business Analytics I",
        description: "Introduction to data analysis and decision-making in a business context.",
      },
      {
        code: "COB 204",
        name: "Computer Information Systems",
        description: "Basics of information systems and their applications in business.",
      },
      {
        code: "COB 202",
        name: "Interpersonal Skills",
        description: "Development of communication and leadership skills for workplace collaboration.",
      },
      {
        code: "COB 241",
        name: "Financial Accounting",
        description: "Introduction to the principles of financial accounting.",
      },
      {
        code: "COB 242",
        name: "Managerial Accounting",
        description: "Focus on using accounting information for management decision-making.",
      },
      {
        code: "COB 291",
        name: "Business Analytics II",
        description: "Advanced business analytics and decision-making tools.",
      },
    ],
  },
  {
    name: "Computer Science and Information Systems",
    courses: [
      {
        code: "CIS 221",
        name: "Principles of Programming",
        description: "Fundamentals of programming with an emphasis on structured problem-solving and coding.",
      },
    ],
  },
  {
    name: "Media Arts and Design (SMAD) Courses",
    courses: [
      {
        code: "SMAD 101",
        name: "Introduction to Media Arts and Design",
        description:
          "Overview of the field of media arts and design, covering basic concepts and career opportunities.",
      },
      {
        code: "SMAD 201",
        name: "Visual Communication Design",
        description: "Introduction to visual design principles and techniques.",
      },
      {
        code: "SMAD 202",
        name: "Audio-Visual Storytelling",
        description: "Fundamentals of storytelling through audio-visual media, including scripting and editing.",
      },
      {
        code: "SMAD 203",
        name: "User Experience Design",
        description: "Basics of designing user-centric digital experiences.",
      },
      {
        code: "SMAD 307",
        name: "Interactive Design for the Web",
        description: "Principles of web design, including HTML, CSS, and user interaction.",
      },
      {
        code: "SMAD 301",
        name: "The Media Arts: Culture by Design",
        description: "Exploration of how media arts shape and are shaped by culture.",
      },
      {
        code: "SMAD 315",
        name: "Digital Social Media Advertising",
        description: "Study of advertising principles within the context of social media platforms.",
      },
      {
        code: "SMAD 317",
        name: "User Interaction Design",
        description: "Advanced concepts in user interaction design for digital products.",
      },
      {
        code: "SMAD 332",
        name: "Advanced Visual Communication Design",
        description: "Advanced techniques in graphic design and communication.",
      },
      {
        code: "SMAD 400",
        name: "Senior Assessment in Media Arts and Design",
        description: "Capstone project assessing skills acquired during the program.",
      },
      {
        code: "SMAD 408",
        name: "Converged Media Lab",
        description: "Practical application of multimedia storytelling in a lab setting.",
      },
      {
        code: "SMAD 417",
        name: "Business and Management in Interactive Design",
        description: "Focus on project management and business strategies in media design.",
      },
      {
        code: "SMAD 470",
        name: "New Media and Society",
        description: "Exploration of new media technologies and their societal impacts.",
      },
      {
        code: "SMAD 472",
        name: "Media and Politics",
        description: "Study of the relationship between media and political processes.",
      },
    ],
  },
  {
    name: "Special Topics and Electives",
    courses: [
      {
        code: "UNST 190",
        name: "Special Topics: X-Labs Applied Exploration",
        description: "Hands-on interdisciplinary projects with a focus on real-world applications like 3D printing.",
      },
      {
        code: "UNST 190",
        name: "Special Topics: 3D Printing Real World Solutions",
        description: "Advanced exploration of 3D printing technologies and their practical uses.",
      },
      {
        code: "LTLE 375",
        name: "Selected Topics in Media: 3D Printing Real World Solutions",
        description: "Deep dive into 3D printing applications in media arts and design.",
      },
      {
        code: "CISE 480",
        name: "Special Topics in Computer Science and Engineering: eSports",
        description: "Examination of the eSports industry, its technologies, and cultural implications.",
      },
    ],
  },
  {
    name: "Natural Sciences",
    courses: [
      {
        code: "PHYS 121",
        name: "The Nature of Light and Sound",
        description: "Study of the physical principles behind light and sound, including practical applications.",
      },
      {
        code: "ANTH 196",
        name: "Biological Anthropology",
        description: "Introduction to the biological and evolutionary aspects of human life.",
      },
      {
        code: "ARTH 206",
        name: "Renaissance to Modern Art",
        description: "Exploration of artistic movements from the Renaissance to modern times.",
      },
    ],
  },
]

export default function Classes() {
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
          My Classes
        </motion.h1>

        <div className="space-y-8">
          {courseCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.courses.map((course, courseIndex) => (
                      <AccordionItem key={courseIndex} value={`item-${index}-${courseIndex}`}>
                        <AccordionTrigger className="text-white hover:text-white/80">
                          <span className="font-semibold">{course.code}</span> - {course.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">{course.description}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

