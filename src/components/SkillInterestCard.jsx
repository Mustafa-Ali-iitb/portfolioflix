import { motion } from 'framer-motion'

const SkillInterestCard = ({ item, onClick }) => {
  return (
    <motion.div
      className="relative w-64 h-36 cursor-pointer card-hover flex flex-col items-center justify-center bg-gradient-to-br from-netflix-red/20 to-blue-500/20 rounded-lg shadow-lg text-center text-white px-4"
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-bold text-lg md:text-xl mb-1 drop-shadow-md truncate">{item.cardTitle || item.title}</h3>
      {/* {item.detailTitle && (
        <span className="text-xs md:text-sm text-netflix-gray-200/80 font-medium drop-shadow-sm block">
          {item.detailTitle}
        </span>
      )} */}
    </motion.div>
  )
}

export default SkillInterestCard