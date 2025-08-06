import { useState } from 'react'
import { motion } from 'framer-motion'

const CardTile = ({ item, onClick, category }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getCardIcon = () => {
    switch (category) {
      case 'education':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
        )
      case 'experience':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-2.5l-1.1-1.4C16.1 4.2 15.7 4 15.2 4H8.8c-.5 0-.9.2-1.2.6L6.5 6H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 12.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/>
          </svg>
        )
      case 'projects':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        )
      case 'interests':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        )
    }
  }

  return (
    <motion.div
      className="relative w-64 h-36 cursor-pointer card-hover"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Background */}
      <div className={`absolute inset-0 rounded-lg overflow-hidden transition-all duration-300 ${
        item.thumbnail 
          ? 'bg-gradient-to-br from-netflix-gray-600 to-netflix-gray-700' 
          : 'bg-gradient-to-br from-netflix-red/20 to-blue-500/20'
      } ${isHovered ? 'shadow-2xl shadow-black/50' : 'shadow-lg shadow-black/25'}`}>
        {/* Thumbnail or Icon */}
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/60">
            {getCardIcon()}
          </div>
        )}
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`} />
      </div>
      {/* Content Overlay - Positioned lower */}
      <div className="absolute inset-x-0 bottom-0 pl-4 pr-4 pt-4 pb-1 text-white">
        <motion.h3
          className="font-semibold text-lg mb-1 truncate"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.cardTitle || item.title}
        </motion.h3>
        {/* Quick Preview Info */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm text-netflix-gray-300 mb-2 line-clamp-2">
            {item.detailTitle}
          </p>
        </motion.div>
      </div>

      {/* Play Button for Projects */}
      {category === 'projects' && isHovered && (
        <motion.div
          className="absolute top-4 right-4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default CardTile