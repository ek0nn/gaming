/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
  return (

    <div className='container  '>
        <h1 className=" text-left  text-4xl md:text-4xl xl:text-6xl  text-bold mt-20 ">
          Showcase
        </h1>
        <div className='flex flex-row mb-20'>
        // eslint-disable-next-line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes
        <p className=" text-1xl text-light mt-3 mb-8 w-[400px] ">
          Showoff your best gaming highlights,
          // eslint-disable-next-line react/no-unescaped-entities
          "Whether it's a pentakill during an intense battle or a hilarious, unexpected in-game moment, we're here for it all! These moments define our gaming and entertainment experiences, sparking excitement, laughter, and unforgettable memories. They're the heart of why we love this world so much."
        </p>
        <Image className = "ml-20" src={'/images/val.jpg'} width={800} height={400} alt='game' />
        </div>

        <h1 className=" text-end   text-3xl md:text-3xl xl:text-5xl  text-bold mt-20 ">
        Achievements and <br />
        
        game stats
        </h1>
        <div className='flex flex-row-reverse mb-20'>
        <p className=" text-1xl text-light mt-8 mb-8 w-[400px] ">
          Showoff your best gaming highlights,
          "Whether it's a pentakill during an intense battle or a hilarious, unexpected in-game moment, we're here for it all! These moments define our gaming and entertainment experiences, sparking excitement, laughter, and unforgettable memories. They're the heart of why we love this world so much."
        </p>
        <Image className = "mr-20" src={'/images/val.jpg'} width={800} height={400} alt='game' />
        </div>
        

    </div>
  )
}

export default Hero3