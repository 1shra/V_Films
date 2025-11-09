import React from 'react'
import mandal from '../assets/HeroMandala.png'
import Films from '../assets/Films.png'
const Hero = () => {
  return (
    <div className="min-h-screen relative px-8 pt-8 flex items-center justify-center ml-0">
      <div className="flex max-w-7xl w-full">
        {/* Left side */}
        <div className="relative flex-1 flex justify-center items-center ml-0">
          <img
            src={mandal}
            alt="Mandala"
            className="w-[30vw] h-[30vw] top-[20vh] left-[10vw] transform rotate-0 opacity-100"
          />
          <img
            src={Films}
            alt="V Films Logo"
            className="absolute inset-0 m-auto
            w-[40vw] max-w-[280px] min-w-[150px]
            pointer-events-none
            mix-blend-multiply brightness-110 contrast-125"
          />
        </div>

        {/* Right side text */}
        <div className="flex-1 flex flex-col justify-center px-12 max-w-xl text-center space-y-7 ">
          <h2 className="sm:text-[60px] md:text-[60px] font-normal leading-tight text-center" 
            style={{fontFamily: "'Island Moments'",}}
          >
            Varnan is where stories find their voice and form
          </h2>
          <p className="text-[#d54c39] font-serif text-3xl mb-6"
            style={{fontFamily: "'Halant'"}}  
          >
            Films . Brands . Art
          </p>
          <p className="text-[1rem] text-gray-700 max-w-md"
            style={{fontFamily: "''Instrument Sans"}}
          >
            Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
            V doesn’t just tell stories - V honors them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero


