import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Education', action: () => scrollToSection('education') },
    { name: 'Experience', action: () => scrollToSection('experience') },
    { name: 'Projects', action: () => scrollToSection('projects') },
    { name: 'Skill and Interests', action: () => scrollToSection('skill and interests') },
    { name: 'Films', action: () => scrollToSection('films') },
    { name: 'Contact', action: () => scrollToSection('contact') },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-netflix-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo */}
        <motion.div
          className="text-netflix-red text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PortfolioFlix
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              className="text-white hover:text-netflix-gray-300 transition-colors duration-200 relative group"
              onClick={item.action}
              whileHover={{ y: -2 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-netflix-red group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
        </div>

        {/* Profile Avatar */}
        <div className="w-8 h-8 bg-gradient-to-r from-netflix-red to-red-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">M</span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar