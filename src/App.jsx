import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import CarouselRow from './components/CarouselRow'
import FilmCarousel from './components/FilmCarousel'
import ModalPreview from './components/ModalPreview'
import FilmModal from './components/FilmModal'
import Footer from './components/Footer'

// Import data
import educationData from './data/education.json'
import experienceData from './data/experience.json'
import projectsData from './data/projects.json'
import interestsData from './data/interests.json'
import filmsData from './data/films.json'

function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [showFilmModal, setShowFilmModal] = useState(false)

  const handleCardClick = (item) => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleFilmClick = (film) => {
    setSelectedFilm(film)
    setShowFilmModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedItem(null)
  }

  const closeFilmModal = () => {
    setShowFilmModal(false)
    setSelectedFilm(null)
  }

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <Navbar />
      <HeroBanner />
      
      <div className="px-4 md:px-12 space-y-8 pb-20">
        <CarouselRow 
          title="Education" 
          items={educationData} 
          onCardClick={handleCardClick}
        />
        <CarouselRow 
          title="Experience" 
          items={experienceData} 
          onCardClick={handleCardClick}
        />
        <CarouselRow 
          title="Projects" 
          items={projectsData} 
          onCardClick={handleCardClick}
        />
        <CarouselRow 
          title="Skill and Interests" 
          items={interestsData} 
          onCardClick={handleCardClick}
        />
        <FilmCarousel 
          title="Films" 
          items={filmsData} 
          onCardClick={handleFilmClick}
        />
      </div>

      <Footer />

      {showModal && selectedItem && (
        <ModalPreview 
          item={selectedItem} 
          onClose={closeModal} 
        />
      )}

      {showFilmModal && selectedFilm && (
        <FilmModal 
          item={selectedFilm} 
          onClose={closeFilmModal} 
        />
      )}
    </div>
  )
}

export default App