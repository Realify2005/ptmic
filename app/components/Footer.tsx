import React from 'react'
import {PhoneIcon, BuildingOfficeIcon, MapIcon} from '@heroicons/react/24/solid'

const Footer: React.FC = () => {
 return (
    <footer className="relative bg-black py-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
            <div>
            <h3 className="text-xl font-bold">PT. MEGAH INTI CEMERLANG</h3>
            <p className="mt-4">
                Berdiri sejak tahun 1998 dan berkembang sebagai salah satu MANUFAKTUR, DISTRIBUTOR, EXPORT, IMPORT, dan TRADING COMPANY yang terbaik di Indonesia. Kami lebih mengutamakan produk dengan kualitas Standart Internasional.
            </p>
            </div>
            <div>
            <h3 className="text-xl font-bold">CONTACT US</h3>
            <ul className="mt-4">
                <li className="flex items-start mb-2">
                <PhoneIcon className="h-6 w-6 mr-2 text-white" aria-hidden="true" />
                <div>
                    <h4 className="font-semibold">Telepon & Fax</h4>
                    <p>(021) - 5695 5679</p>
                </div>
                </li>
                <li className="flex items-start mb-2">
                <BuildingOfficeIcon className="h-6 w-6 mr-2 text-white" aria-hidden="true" />
                <div>
                    <h4 className="font-semibold">Office</h4>
                    <p>Duta Garden Square Blok A No. 1 Tangerang - Banten</p>
                </div>
                </li>
                <li className="flex items-start mb-2">
                <MapIcon className="h-6 w-6 mr-2 text-white" aria-hidden="true" />
                <div>
                    <h4 className="font-semibold">Plant Site</h4>
                    <p>Jl. Utama Modern Industri XXV Blok BG CIKANDE, SERANG - BANTEN</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-white text-sm">
            Copyright © 2021 PT. Megah Inti Cemerlang All Right Reserved.
        </div>
        </div>
    </footer>
 )
}

export default Footer