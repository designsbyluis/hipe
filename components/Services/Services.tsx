import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div id="services" className="w-full lg:h-screen p-20">
      <div className="max-w-[900px] mx-auto flex flex-col justify-center h-full">
        <h3 className="text-xl small-semibold mx-auto tracking-widest uppercase text-[#5651e5]">
          Members
        </h3>
        <h2 className="py-4 h2-bold mx-auto">What We Can Offer</h2>
        <div className="grid mt-20 grid-cols-2 lg:grid-cols-3 gap-20">
          
          {/* Each service block starts here */}
          <div className="p-6 hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-FFD2E7">
                <Image src="/assets/mentor.svg" alt="Development" width={64} height={64} />
              </div>
              <h3 className="mt-4 small-semibold text-center">Mentorships</h3>
              <p className="text-gray-500 text-sm text-center hidden sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-FFD2E7">
                <Image src="/assets/research.svg" alt="Development" width={64} height={64} />
              </div>
              <h3 className="mt-4 small-semibold text-center">Research</h3>
              <p className="text-gray-500 text-sm text-center hidden sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-FFD2E7">
                <Image src="/assets/internships.svg" alt="Development" width={64} height={64} />
              </div>
              <h3 className="mt-4 small-semibold text-center">Internships</h3>
              <p className="text-gray-500 text-sm text-center hidden sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-FFD2E7">
                <Image src="/assets/mentor.svg" alt="Development" width={64} height={64} />
              </div>
              <h3 className="mt-4 small-semibold text-center">Development</h3>
              <p className="text-gray-500 text-sm text-center hidden sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-FFD2E7">
                <Image src="/assets/mentor.svg" alt="Development" width={64} height={64} />
              </div>
              <h3 className="mt-4 small-semibold text-center">Development</h3>
              <p className="text-gray-500 text-sm text-center hidden sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="p-6 hover:scale-105 ease-in duration-300">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-FFD2E7">
                <Image src="/assets/mentor.svg" alt="Development" width={64} height={64} />
              </div>
              <h3 className="mt-4 small-semibold text-center">Development</h3>
              <p className="text-gray-500 text-sm text-center hidden sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/* Repeat the above block for each service, replacing the src in Image and the text accordingly */}

          {/* ... other service blocks ... */}

        </div>
      </div>
    </div>
  );
};

export default Services;
