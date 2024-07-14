import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const nonAlkesImages = [
  {
    title: "HANDUK",
    images: [
      "/non-alkes/handuk/image1.jpg",
      "/non-alkes/handuk/image2.jpeg",
      "/non-alkes/handuk/image3.jpg",
      "/non-alkes/handuk/image4.png",
    ],
  },
  {
    title: "SELIMUT",
    images: [
      "/non-alkes/selimut/image1.jpeg",
      "/non-alkes/selimut/image2.jpeg",
      "/non-alkes/selimut/image3.jpeg",
      "/non-alkes/selimut/image4.jpeg",
    ],
  },
  {
    title: "KESET",
    images: [
      "/non-alkes/keset/image1.jpeg",
      "/non-alkes/keset/image2.jpg",
      "/non-alkes/keset/image3.jpeg",
      "/non-alkes/keset/image4.jpeg",
    ],
  },
  {
    title: "SERBET",
    images: [
      "/non-alkes/serbet/image1.jpeg",
      "/non-alkes/serbet/image2.jpeg",
      "/non-alkes/serbet/image3.jpeg",
      "/non-alkes/serbet/image4.jpeg",
    ],
  },
  {
    title: "JAS HUJAN",
    images: [
      "/non-alkes/JHujan/image1.jpg",
      "/non-alkes/JHujan/image2.jpeg",
      "/non-alkes/JHujan/image3.jpeg",
      "/non-alkes/JHujan/image4.jpeg",
    ],
  },
  {
    title: "PAYUNG",
    images: [
      "/non-alkes/payung/image1.jpg",
      "/non-alkes/payung/image2.jpeg",
      "/non-alkes/payung/image3.jpeg",
      "/non-alkes/payung/image4.jpeg",
    ],
  },
  {
    title: "SAJADAH",
    images: [
      "/non-alkes/sajadah/image1.jpg",
      "/non-alkes/sajadah/image2.jpg",
      "/non-alkes/sajadah/image3.jpg",
      "/non-alkes/sajadah/image4.jpg",
    ],
  },
  {
    title: "SARUNG TANGAN MOTOR",
    images: [
      "/non-alkes/STMotor/image1.jpg",
      "/non-alkes/STMotor/image2.jpg",
      "/non-alkes/STMotor/image3.jpg",
      "/non-alkes/STMotor/image4.jpg",
    ],
  },
  {
    title: "MASKER MOTOR",
    images: [
      "/non-alkes/MMotor/image1.jpg",
      "/non-alkes/MMotor/image2.jpg",
      "/non-alkes/MMotor/image3.jpeg",
      "/non-alkes/MMotor/image4.jpeg",
    ],
  },
  {
    title: "SARUNG",
    images: [
      "/non-alkes/sarung/image1.jpg",
      "/non-alkes/sarung/image2.jpg",
      "/non-alkes/sarung/image3.jpg",
      "/non-alkes/sarung/image4.jpg",
    ],
  },
  {
    title: "TOOL MECHANICAL",
    images: [
      "/non-alkes/TMechanical/image1.jpg",
      "/non-alkes/TMechanical/image2.jpg",
      "/non-alkes/TMechanical/image3.jpg",
      "/non-alkes/TMechanical/image4.jpg",
    ],
  },
];

const ImageGrid: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:px-80">
        {nonAlkesImages.map((group, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">{group.title}</h2>
            <div className="grid grid-cols-4 gap-32">
              {group.images.map((src, index) => (
                <div key={`${group.title}-${index}`} className="w-full h-auto">
                  <Image
                    src={src}
                    alt={`${group.title} ${index + 1}`}
                    layout="responsive"
                    width={500} // Adjust these values as necessary
                    height={500} // Adjust these values as necessary
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <hr className="mt-4 border-t border-gray-400" />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ImageGrid;
