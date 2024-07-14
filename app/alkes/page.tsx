import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const alkesImages = [
  {
    title: "MASKER",
    images: [
      "/alkes/masker/image1.jpg",
      "/alkes/masker/image2.jpg",
      "/alkes/masker/image3.jpg",
      "/alkes/masker/image4.jpg",
    ],
  },
  {
    title: "APD",
    images: [
      "/alkes/apd/image1.jpg",
      "/alkes/apd/image2.jpg",
      "/alkes/apd/image3.jpg",
      "/alkes/apd/image4.jpg",
    ],
  },
  {
    title: "COVER SHOES",
    images: [
      "/alkes/CShoes/image1.jpg",
      "/alkes/CShoes/image2.jpeg",
      "/alkes/CShoes/image3.jpeg",
      "/alkes/CShoes/image4.jpeg",
    ],
  },
  {
    title: "COVER HAIR",
    images: [
      "/alkes/CHair/image1.jpg",
      "/alkes/CHair/image2.jpg",
      "/alkes/CHair/image3.jpg",
      "/alkes/CHair/image4.jpg",
    ],
  },
  {
    title: "SARUNG TANGAN MEDIS",
    images: [
      "/alkes/STMedis/image1.jpg",
      "/alkes/STMedis/image2.jpg",
      "/alkes/STMedis/image3.jpg",
      "/alkes/STMedis/image4.jpg",
    ],
  },
];

const ImageGrid: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:px-80">
        {alkesImages.map((group, idx) => (
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
