import LetsTalk from "./components/LetsTalk"
import Navbar from "./components/Navbar"
import OurStory from "./components/OurStory"
import Services from "./components/Services"

import Varman from "./components/Varman"
import Hero from "./components/Hero"
import { Routes, Route } from 'react-router-dom'
import TheirStories from "./components/TheirStories"
import FilmsPage from "./components/Services_Film_Production"

import FilmProduction from './assets/FilmProduction1.png'
import Branding1 from './assets/Branding1.png'
import Art1 from './assets/Art_curation1.png'
import camera1 from "./assets/Camera01.svg";
import camera2 from "./assets/Camera03.svg";
import camera3 from "./assets/Camera02.svg";
import camera4 from "./assets/Camera04.svg";

import brandingimg1 from "./assets/BrandingVector01.svg"
import brandingimg2 from "./assets/BrandingVector02.svg"
import brandingimg3 from "./assets/BrandingVector03.svg"
import brandingimg4 from "./assets/BrandingVector04.svg"

import artimg1 from "./assets/ArtCurationIcons01.svg"
import artimg2 from "./assets/ArtCurationIcons02.svg"
import artimg3 from "./assets/ArtCurationIcons03.svg"
import artimg4 from "./assets/ArtCurationIcons04.svg"

function App() {
  return (
    <div className=" app-overlay min-h-screen bg-white text-black pb-28">
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/film_production" element={<FilmsPage 
            title="film-production" 
            quote="Filmmaking is a chance to live many lifetimes."
            author="Robert Altman"
            imagePath={FilmProduction}
            desc="Who says films are just an escape?<br></br> We see them as a way to live many
              lives — to feel, to explore, and to tell stories that stay. And with
              each film, we carry new memories and new reasons to keep creating."
            listItems={[
              "Documentaries",
              "Corporate Videos",
              "2D Animation Videos",
              "3D Animation Videos",
            ]}
            pict1={camera1}
            pict2={camera2}
            pict3={camera3}
            pict4={camera4}
            next='/services'
          />} />
          
          <Route path="/services/branding" element={<FilmsPage 
            title="branding" 
            quote="A brand is a voice, and a product is a souvenir."
            author="Lisa Gansky"
            imagePath={Branding1}
            desc="A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
            We shape brands that people remember, return to, and fall in love with.
            V creates:"
            listItems={[
              "Branding & Communication",
              "Market Mapping",
              "Content Management",
              "Social Media Management",
              "Rebranding"
            ]}
            pict1={brandingimg1}
            pict2={brandingimg2}
            pict3={brandingimg3}
            pict4={brandingimg4}
            next='/services'
          />} />
          <Route path="/services/art_curation" element={<FilmsPage 
            title="Art Curation" 
            quote="V take art where it belongs, to the people."
            author= "Vernita Verma."
            imagePath={Art1}
            desc="Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
            Through every festival, every performance, and every gathering, we help stories find their stage and their people.
            V curates:"
            listItems={[
              "Art Festivals",
              "Live Performances",
              "Community Events",
              "Cultural Storytelling"
            ]}
            pict1={artimg1}
            pict2={artimg2}
            pict3={artimg3}
            pict4={artimg4}
            next='/services'
          />} />

          <Route path="/their-stories" element={<TheirStories />} />         
          <Route path="/varman" element={<Varman />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
        </Routes>
      </div>
  )
}

export default App