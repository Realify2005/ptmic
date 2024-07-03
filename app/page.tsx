'use client'
import Slideshow from './components/home/Slideshow'
import Header from './components/Header'
import Footer from  './components/Footer'
import VisiMisi from './components/VisiMisi'
import {CheckIcon} from '@heroicons/react/24/solid'

import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: '/icons/professional.svg',
    title: 'PROFESSIONAL',
    description: 'Sumber daya manusia yang kompeten dan memiliki skill di bidangnya masing-masing',
  },
  {
    icon: '/icons/ontime.svg',
    title: 'ONTIME',
    description: 'Manajemen kontrol yang baik berprinsip pada "Continuous Improvement"',
  },
  {
    icon: '/icons/berpengalaman.svg',
    title: 'BERPENGALAMAN',
    description: 'Berdiri sejak tahun 1998 dan terus berkembang sebagai perusahaan yang kredibel',
  },
  {
    icon: '/icons/terpercaya.svg',
    title: 'TERPERCAYA',
    description: 'Kami sudah menangani ribuan customer untuk berbagai macam manufaktur dan distribusi',
  },
  {
    icon: '/icons/garansi.svg',
    title: 'GARANSI',
    description: 'Untuk tiap transaksi barang kami berikan garansi untuk kenyamanan Anda',
  },
  {
    icon: '/icons/legalitas.svg',
    title: 'BERLEGALITAS',
    description: 'Kami memiliki legalitas untuk menjamin eksistensi bisnis kami terhadap klien',
  },
]

export default function Page() {

  return (
    <>
      <Header />
      <Slideshow />
      <div className="relative py-20 bg-white">
        <div className="absolute top-0 left-0 w-full h-32 bg-white rounded-b-full"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Image src="/ptmic_logo.png" alt="Logo PT MIC" width={300} height={300} className="mb-6" />
          <h2 className="text-4xl font-bold text-center">Kenapa Harus Kami?</h2>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-full"></div>
      </div>



      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mb-4">
                  <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-80">
          <div className="flex-shrink-0">
            <Image src="/images/business_on_street.jpg" alt="Business Meeting" width={300} height={200} className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">PT. MEGAH INTI CEMERLANG</h2>
            <p className="text-gray-700 mt-2">
              Berdiri sejak tahun 1998 dan berkembang sebagai salah satu MANUFAKTUR, DISTRIBUTOR, EXPORT, IMPORT, dan TRADING COMPANY yang terbaik di Indonesia. Kami lebih mengutamakan produk dengan kualitas Standart Internasional.
            </p>
          </div>
        </div>
      </div>

      <VisiMisi />

      <section className="relative py-16 bg-blue-700">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-white">KOMITMEN</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                  <CheckIcon className="h-20 w-20 text-blue-700 stroke-current stroke-2" aria-hidden="true" />
              </div>
              <p className="text-center text-xl text-blue-700 font-light">
                  Mematuhi semua peraturan yang berkaitan dengan energi.
              </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                  <CheckIcon className="h-20 w-20 text-blue-700 stroke-current stroke-2" aria-hidden="true" />
              </div>
              <p className="text-center text-xl text-blue-700 font-light">
                  Meningkatkan efisiensi untuk menjaga kelestarian lingkungan dan pelestarian sumber energi yang berkelanjutan.
              </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                  <CheckIcon className="h-20 w-20 text-blue-700 stroke-current stroke-2" aria-hidden="true" />
              </div>
              <p className="text-center text-xl text-blue-700 font-light">
                  Menyediakan karyawan dengan lingkungan kerja yang nyaman dan aman.
              </p>
              </div>
          </div>
          </div>
      </section>

      <section className="py-16 bg-white">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-24 lg:px-48 text-center">
          <h2 className="text-4xl font-extrabold text-blue-700">Mitra Kami</h2>
          <p className="mt-8 text-xl text-gray-700">
            Sejak awal hingga kini kami sudah menjadi andalan mitra dalam skala nasional.
            Kami selalu memberikan pelayanan yang terbaik kepada seluruh mitra kerja kami dalam memenuhi kebutuhannya. Berikut yang termasuk Mitra Kerja kami:
          </p>
          <div className="mt-8">
            <Link href="/mitra-kami">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Selengkapnya &gt;&gt;
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
