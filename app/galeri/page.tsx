'use client'
import Header from '../components/Header'
import Footer from  '../components/Footer'
import KenapaHarusKami from '../components/KenapaHarusKami'
import Image from 'next/image'

const factoryImages = [
    '/factory/image1.jpg',
    '/factory/image2.jpg',
    '/factory/image3.jpg',
    '/factory/image4.jpg',
    '/factory/image5.jpeg',
    '/factory/image6.jpg',
    '/factory/image7.jpg',
    '/factory/image8.jpg',
];

const gudangImages = [
    '/gudang/image1.jpeg',
    '/gudang/image2.jpeg',
    '/gudang/image3.jpeg',
    '/gudang/image4.jpg',
    '/gudang/image5.jpg',
    '/gudang/image6.jpeg',
];

export default function Page() {

  return (
    <>
        <Header />

        <div className="py-8 px-4 md:px-80 text-center">
            <h1 className="text-3xl font-bold mb-8">Factory</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {factoryImages.map((src, index) => (
                <div key={index} className="relative w-full h-0 pb-[66.66%] overflow-hidden">
                <Image src={src} alt={`Factory Image ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
            ))}
            </div>
            <hr className="m-8 border-t border-gray-400" />
            <h1 className="text-3xl font-bold mb-8">Gudang</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gudangImages.map((src, index) => (
                <div key={index} className="relative w-full h-0 pb-[66.66%] overflow-hidden">
                <Image src={src} alt={`Gudang Image ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
            ))}
            </div>
            <hr className="m-8 border-t border-gray-400" />
        </div>



        <Footer />

    </>
  )
}
