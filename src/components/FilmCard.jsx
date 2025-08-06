import { useState } from 'react'
import { motion } from 'framer-motion'

const FilmCard = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getYoutubeThumbnail = (embedId) => {
    return `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`
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
      {/* Card Background with YouTube Thumbnail */}
      <div className={`absolute inset-0 rounded-lg overflow-hidden transition-all duration-300 bg-gradient-to-br from-netflix-gray-600 to-netflix-gray-700 ${
        isHovered ? 'shadow-2xl shadow-black/50' : 'shadow-lg shadow-black/25'
      }`}>
        
        {/* YouTube Thumbnail */}
        <img
          src={getYoutubeThumbnail(item.embedId)}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/assets/films/placeholder.jpg'
          }}
        />

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
            {item.description?.slice(0, 80) + '...'}
          </p>

          {/* Genre and Year */}
          <div className="flex flex-wrap gap-1 mb-2">
            <span className="px-2 py-1 bg-netflix-red/30 rounded-full text-xs">
              {item.genre}
            </span>
            <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
              {item.year}
            </span>
          </div>

          {/* Hover Indicators */}
        </motion.div>
      </div>


    </motion.div>
  )
}

export default FilmCard