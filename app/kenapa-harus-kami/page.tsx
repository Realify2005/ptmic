'use client'
import Header from '../components/Header'
import Footer from  '../components/Footer'
import KenapaHarusKami from '../components/KenapaHarusKami'
import Image from 'next/image'

export default function Page() {

  return (
    <>
        <Header />

        <div className="py-8">
            <KenapaHarusKami />
        </div>



        <Footer />

    </>
  )
}
