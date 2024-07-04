import React from 'react'
import Image from 'next/image'

const PTMegahIntiCemerlang: React.FC = () => {
 return (
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
 )
}

export default PTMegahIntiCemerlang