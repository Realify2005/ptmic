'use client'
import Header from '../components/Header'
import Footer from  '../components/Footer'
import Image from 'next/image'

export default function Page() {

  return (
    <>
        <Header />

        <p className="text-xl font-semibold text-gray-700 py-4 px-4 md:px-60">
        Sejak awal hingga kini kami sudah menjadi andalan mitra dalam skala nasional. Kami selalu memberikan pelayanan yang terbaik kepada seluruh mitra kerja kami dalam memenuhi kebutuhannya. Berikut yang termasuk Mitra Kerja kami:
        </p>


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
