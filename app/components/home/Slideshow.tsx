'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const images = [
  '/slideshow/slideshow_img_1.jpg',
  '/slideshow/slideshow_img_2.jpeg',
  '/slideshow/slideshow_img_3.jpeg',
  '/slideshow/slideshow_img_4.jpeg',
  '/slideshow/slideshow_img_5.jpg',
]

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full h-156">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          layout="fill"
          objectFit="cover"
          className={`absolute transition-opacity duration-[1s] ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prevSlide} className="bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
