import React from 'react'
import Image from 'next/image'

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

const KenapaHarusKami: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl py-8 font-bold text-center">Kenapa Harus Kami?</h2>
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
    )
}

export default KenapaHarusKami