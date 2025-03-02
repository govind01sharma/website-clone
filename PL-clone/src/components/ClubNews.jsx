import React from 'react';
import ArsLogo from '../assets/images/club-news/Ars.png';
import MunLogo from '../assets/images/club-news/Mun.png';
import CryLogo from '../assets/images/club-news/Cry.png';
import WolLogo from '../assets/images/club-news/Wol.png';
import CheLogo from '../assets/images/club-news/Che.png';
import NfoLogo from '../assets/images/club-news/Nfo.png';

function ClubNews() {
  const newsItems = [
    {
      imageUrl: ArsLogo,
      headline: 'Birchall reflects on Youth Cup defeat',
    },
    {
      imageUrl: MunLogo,
      headline: 'A classic Youth Cup win!',
    },
    {
      imageUrl: WolLogo,
      headline: 'U21 report | Southampton 2-1 Wolves',
    },
    {
      imageUrl: CryLogo,
      headline: 'Glasner reveals goalkeeper choice ahead of Millwall clash',
    },
    {
      imageUrl: MunLogo,
      headline: 'U18s: Arsenal 2 United 3',
    },
    {
      imageUrl: ArsLogo,
      headline: 'U18s report: Arsenal 2-3 Manchester United',
    },
    {
      imageUrl: NfoLogo,
      headline: 'Stourbridge (A) postponed',
    },
    {
      imageUrl: CheLogo,
      headline: 'Premier League 2 report: Manchester City 5-0',
    },
  ];

  return (
    <div className="bg-white px-9">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Club News</h2>
        <a href="#" className="text-[#37003C] hover:underline text-xl">
          More Clubs →
        </a>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={item.imageUrl}
              alt={item.headline}
              className="w-full h-16 object-cover" // Reduced image height
            />
            <div className="p-2"> {/* Reduced padding */}
              <div className="text-gray-600 text-xs mb-0.5">Club News</div> {/* Reduced font size and margin */}
              <a href="#" className="font-bold text-gray-800 hover:text-blue-500 text-sm"> {/* Reduced font size */}
                {item.headline}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubNews;
