import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-start text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">T-Regulus</h1>
          <p className="mt-4 text-xl">
            Insert Slogan Here - Lorem Ipsum Dolor sit amet
          </p>
          <div className="mt-8">
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-full">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;