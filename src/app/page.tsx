import Image from 'next/image'
import Navbar from './navbar'
import Hero from './hero'
import './globals.css'
import Hero2 from './hero2'
import Hero3 from './hero3'

export default function Home() {
  return (
    <main>
      <Navbar />  
      <Hero />
      <h1 className="text-center text-4xl md:text-5xl xl:text-7xl  text-bold mt-20">
          Your Collection
        </h1>
        <p className="text-center text-2xl text-bold mb-20 dark:text-gray-400">
          All saved in one location
        </p>
      <Hero2  />
      <Hero3    />  
    </main>
  )
}
