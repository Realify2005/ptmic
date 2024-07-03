import React from 'react'
import {EyeIcon, CheckCircleIcon} from '@heroicons/react/24/solid'

const VisiMisi: React.FC = () => {
 return (
    <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-700">Visi Misi</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center bg-gray-200 py-6 px-20 rounded-lg shadow-lg h-156">
            <div className="flex justify-center mb-4">
                <EyeIcon className="h-20 w-20 text-blue-700" aria-hidden="true" />
            </div>
            <h3 className="text-center text-3xl font-bold text-blue-700">VISI</h3>
            <p className="mt-4 text-center text-xl text-gray-700">
                Memproduksi barang berkualitas dengan harga yang kompetitif
            </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-200 py-6 px-20 rounded-lg shadow-lg h-156">
            <div className="flex justify-center mb-4">
                <CheckCircleIcon className="h-20 w-20 text-blue-700" aria-hidden="true" />
            </div>
            <h3 className="text-center text-3xl font-bold text-blue-700">MISI</h3>
            <p className="mt-4 text-center text-xl text-gray-700">
                Menjadi perusahaan manufaktur dan distributor yang terkemuka di segmen Internasional.
            </p>
            </div>
        </div>
        </div>
    </section>
 )
}

export default VisiMisi