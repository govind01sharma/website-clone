import React from 'react';
import Fixtures from '../components/Fixtures';
import NewsSection from '../components/NewsSection';
import ClubNews from '../components/ClubNews';

function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="absolute top-0 left-0 z-20 w-auto px-2">
        <Fixtures />
      </div>

      <div className="bg-[#37003C] text-white flex justify-end">
        <div className="w-4/5 min-h-[80vh] pl-10">
          <div className="scale-90">
            <NewsSection />
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-end w-full">
        <div className="w-[70%]"> 
          <ClubNews />
        </div>
      </div>

      <div className="bg-white min-h-[20vh]"></div>
    </div>
  );
}

export default HomePage;
