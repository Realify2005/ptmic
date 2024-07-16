import React from 'react';
import Header from '../components/Header'
import Footer from  '../components/Footer'

export default function Page() {
  return (
    <>
        <Header />

        <div className="container mx-auto p-4 mt-8">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="space-y-8 md:mr-40">
                    <div className="flex items-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{fill: '#FFFFFF'}}   >
                            <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                        </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">OFFICE</h3>
                            <p>Duta Garden Square</p>
                            <p>Blok A No. 1</p>
                            <p>TANGERANG – BANTEN</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style={{fill: '#FFFFFF'}}><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                        </div>
                        <div className="ml-4">
                        <h3 className="text-lg font-bold">TELEPON & FAX</h3>
                        <p>(021) - 5695 5679</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30" style={{fill: '#FFFFFF'}}>
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,16H7.995 C7.445,16,7,15.555,7,15.005v-0.011C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011 C15.555,5,16,5.445,16,5.995V16z"></path>
                        </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">JAM KERJA</h3>
                        </div>
                        </div>
                        <div className="ml-12">
                        <p>Mon: 8:00 AM – 4:00 PM</p>
                        <p>Tue: 8:00 AM – 4:00 PM</p>
                        <p>Wed: 8:00 AM – 4:00 PM</p>
                        <p>Thu: 8:00 AM – 4:00 PM</p>
                        <p>Fri: 8:00 AM – 4:00 PM</p>
                        <p>Sat: 8:00 AM – 4:00 PM</p>
                        <p>Sun: Closed</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg shadow-md md:w-156">
                    <h3 className="text-lg font-bold mb-4">FORM KONTAK</h3>
                    <form>
                        <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Nama (required)</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email (required)</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Telpon</label>
                        <input type="text" id="phone" name="phone" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Pesan</label>
                        <textarea id="message" name="message" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">SEND</button>
                    </form>`
                </div>
            </div>
        </div>

        <div className="flex justify-center my-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.7253921843178!2d106.68066!3d-6.143922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f87eeabf11eb%3A0x615b31eb8bbe11df!2sDuta%20Garden%20Square%2C%20RW.008%2C%20Kec.%20Benda%2C%20Kota%20Tangerang%2C%20Banten%2015124!5e0!3m2!1sid!2sid!4v1721113429595!5m2!1sid!2sid" width="600" height="450" loading="lazy"></iframe>
        </div>

        <Footer />
    </>
  );
};
