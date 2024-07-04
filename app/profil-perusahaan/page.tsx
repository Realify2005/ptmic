'use client'
import Header from '../components/Header'
import Footer from  '../components/Footer'
import PTMegahIntiCemerlang from '../components/PTMegahIntiCemerlang'
import {CheckIcon} from '@heroicons/react/24/solid'

import Image from 'next/image'
import Link from 'next/link'

export default function Page() {

  return (
    <>
        <Header />



        <PTMegahIntiCemerlang />

        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-64 text-center">
                <div className="border-t-2 border-dotted border-gray-300 w-full my-4"></div>
                <p className="py-6 text-xl font-semibold text-gray-700">
                Butuh waktu dan proses yang panjang untuk kami mendapatkan pengakuan produk terbaik dari berbagai lembaga terkait dan client. Berkat kerjakeras team sampai saat ini kami sudah memiliki beberapa sertifikat lisensi dari lembaga terkait.
                </p>
                <div className="border-t-2 border-dotted border-gray-300 w-full my-4"></div>
            </div>
        </div>

        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="border-4 border-blue-600 p-2">
                    <Image src="/certificates/cert_1.jpg" alt="Certificate 1" width={300} height={400} layout="responsive" />
                </div>
                <div className="border-4 border-blue-600 p-2">
                    <Image src="/certificates/cert_2.jpg" alt="Certificate 2" width={300} height={400} layout="responsive" />
                </div>
                <div className="border-4 border-blue-600 p-2">
                    <Image src="/certificates/cert_3.jpg" alt="Certificate 3" width={300} height={400} layout="responsive" />
                </div>
                <div className="border-4 border-blue-600 p-2">
                    <Image src="/certificates/cert_4.jpg" alt="Certificate 4" width={300} height={400} layout="responsive" />
                </div>
                </div>
                <p className="text-xl font-semibold text-gray-700 py-4 px-4 md:px-36">
                Sejak awal hingga kini kami sudah menjadi andalan mitra dalam skala nasional. Kami selalu memberikan pelayanan yang terbaik kepada seluruh mitra kerja kami dalam memenuhi kebutuhannya. Berikut yang termasuk Mitra Kerja kami:
                </p>
            </div>
        </section>


        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/transmart.png" alt="Transmart Carrefour" width={250} height={250} layout="intrinsic" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/giant.png" alt="Giant" width={250} height={250} layout="intrinsic" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/suzuya.png" alt="Suzuya" width={250} height={250} layout="intrinsic" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/superindo.png" alt="Super Indo" width={250} height={250} layout="intrinsic" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/toserba.png" alt="Toserba Yogya" width={250} height={250} layout="intrinsic" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/hypermart.png" alt="Hypermart" width={250} height={250} layout="intrinsic" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/indomaret.png" alt="Indomaret" width={250} height={250} layout="intrinsic" />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/mitra/lottemart.png" alt="Lotte Mart" width={250} height={250} layout="intrinsic" />
                    </div>
                </div>
            </div>
        </section>


        <Footer />

    </>
  )
}
