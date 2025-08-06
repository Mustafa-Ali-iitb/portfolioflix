import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        {/* Left: Logo and Hamburger */}
        <div className="flex items-center gap-2">
          <motion.div
            className="text-netflix-red text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            PortfolioFlix
          </motion.div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center text-white focus:outline-none ml-2"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Navigation Links (Desktop) */}
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
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black/95 backdrop-blur-sm px-4 py-4 flex flex-col space-y-4 z-50 border-t border-netflix-gray-700">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="text-white text-left py-2 px-2 rounded hover:bg-netflix-gray-700 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false)
                item.action()
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar