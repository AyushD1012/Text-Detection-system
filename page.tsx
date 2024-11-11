'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2, Brain, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { title: "Advanced AI Detection", description: "Our cutting-edge algorithms can detect even the most sophisticated AI-generated text." },
    { title: "Fast and Accurate", description: "Get results in seconds with high accuracy rates." },
    { title: "User-Friendly Interface", description: "Easy to use for both beginners and experts." },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-indigo-600">AI Detector</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">Home</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">About</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">Contact</a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white px-4 py-2 shadow-lg"
          >
            <a href="#" className="block py-2 text-indigo-600 hover:text-indigo-800">Home</a>
            <a href="#" className="block py-2 text-indigo-600 hover:text-indigo-800">About</a>
            <a href="#" className="block py-2 text-indigo-600 hover:text-indigo-800">Contact</a>
          </motion.nav>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center text-center p-6"
                  >
                    <div>
                      <h2 className="text-2xl font-bold text-indigo-700 mb-4">{slides[currentSlide].title}</h2>
                      <p className="text-indigo-600">{slides[currentSlide].description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <AITextDetector />
      </main>

      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">AI Detector</h3>
              <p className="text-indigo-200">Cutting-edge AI text detection for your peace of mind.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-indigo-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white">About</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-indigo-200 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-indigo-200">Email: info@aidetector.com</p>
              <p className="text-indigo-200">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center text-indigo-200">
            <p>&copy; 2024 AI Detector. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AITextDetector() {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<null | { isAI: boolean; confidence: number }>(null)

  const detectAI = () => {
    setIsLoading(true)
    setResult(null)

    // Simulating AI detection process
    setTimeout(() => {
      const randomResult = Math.random()
      setResult({
        isAI: randomResult > 0.5,
        confidence: randomResult * 100
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-indigo-700 flex items-center justify-center gap-2">
          <Brain className="h-8 w-8" />
          AI Text Detector
        </CardTitle>
        <CardDescription className="text-indigo-500">
          Enter your text below to check if it's AI-generated
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full border-2 border-indigo-200 focus:border-indigo-500 rounded-lg shadow-inner"
        />
        <Button 
          onClick={detectAI} 
          disabled={isLoading || text.trim().length === 0} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          {isLoading ? 'Detecting...' : 'Detect AI'}
        </Button>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            <div className="text-sm font-medium text-indigo-600">Analyzing text...</div>
            <Progress value={33} className="w-full h-2 bg-indigo-200" indicatorClassName="bg-indigo-600" />
          </motion.div>
        )}
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`p-6 rounded-lg shadow-md ${result.isAI ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'}`}
          >
            <div className="flex items-center space-x-3">
              {result.isAI ? (
                <AlertCircle className="h-6 w-6 text-red-600" />
              ) : (
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              )}
              <span className="font-bold text-lg">
                {result.isAI ? 'AI-generated content detected' : 'Likely human-written content'}
              </span>
            </div>
            <div className="mt-3 text-sm font-medium">
              Confidence: {result.confidence.toFixed(2)}%
            </div>
            <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${result.isAI ? 'bg-red-500' : 'bg-green-500'}`} 
                style={{ width: `${result.confidence}%` }}
              />
            </div>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-indigo-400 text-center">
        Note: This is a demo and results are randomly generated. A real AI text detector would use more sophisticated algorithms.
      </CardFooter>
    </Card>
  )
}