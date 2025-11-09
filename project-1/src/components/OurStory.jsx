import React from 'react'
import pict1 from '../assets/Frame1.png'
import pict2 from '../assets/Frame2.png'
import pict3 from '../assets/Frame3.png'
import Gp1 from '../assets/Gp1.png'
import obj from '../assets/obj.png'

const OurStory = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between px-6 lg:px-20 py-16">
      
      {/* left section */}
      <div className="flex flex-col items-center lg:items-start justify-center lg:mr-16">
        
        <div className="max-w-[660px] text-center lg:text-left">
          <p className="font-normal text-[28px] md:text-[35px] leading-[100%]" style={{ fontFamily: 'Halant' }}>
            A montage of familiar faces and names.
          </p>
        </div>

        {/* desc */}
        <div className="max-w-[530px] mt-10 text-center lg:text-left">
          <p className="text-[18px] md:text-[22px] leading-[120%] text-gray-800" style={{ fontFamily: 'Instrument Sans' }}>
            Some stories come from the biggest names. Others begin with bold, rising voices.
            We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
          </p>
        </div>

        {/*images*/}
        <div className="flex justify-center items-center mt-10 relative">
          <img
            src={pict1}
            alt="Image 1"
            className="w-[180px] md:w-[220px] lg:w-[250px] h-[180px] md:h-[220px] lg:h-[250px] object-cover rounded-xl rotate-[-5deg] z-10"
          />
          <img
            src={pict2}
            alt="Image 2"
            className="w-[180px] md:w-[220px] lg:w-[250px] h-[180px] md:h-[220px] lg:h-[250px] object-cover rounded-xl rotate-0 -ml-[60px] md:-ml-20 z-20"
          />
          <img
            src={pict3}
            alt="Image 3"
            className="w-[180px] md:w-[220px] lg:w-[250px] h-[180px] md:h-[220px] lg:h-[250px] object-cover rounded-xl rotate-[5deg] -ml-[60px] md:-ml-20 z-10"
          />
        </div>
      </div>

      {/*right sectioin*/}
      <div className="flex flex-col justify-start pt-10 mt-12 lg:mt-0 lg:self-start">
        <p className="max-w-[595px] font-[Island_Moments] text-[36px] md:text-[45px] lg:text-[53px] leading-[100%] text-center lg:text-left text-gray-800">
          Every project is more than just a brief – it’s a new chapter waiting to be written.
          Together, we've crafted tales that inspire, connect, and endure.
        </p>
      </div>
      <div className="hidden md:block absolute bottom-0 right-2 opacity-100 w-[50vw] max-h-[350px]">
        <img src={Gp1} alt="Decorative Footer" />
      </div>
      <div className="hidden md:block absolute bottom-0 right-[10%] opacity-100 w-[30vw] pointer-events-none max-h-[250px]">
        <img src={obj} alt="" />
      </div>
    </div>
  )
}

export default OurStory
