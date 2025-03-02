import React from 'react';
import BigNews from '../assets/images/news-section/BigNews.webp';
import MediumNews1 from '../assets/images/news-section/Medium1.webp';
import MediumNews2 from '../assets/images/news-section/Medium2.webp';

function NewsSection() {
  return (
    <div className="flex gap-5 p-5">
      {/* Big News */}
      <div className="w-2/3">
        <img src={BigNews} alt="Big News" className="rounded-lg mb-2" />
        <div className="px-4">
          <div className="text-sm text-white font-semibold">Feature</div>
          <h3 className="text-2xl font-bold text-white mb-2">Why has Cole Palmer gone cold?</h3>
          <p className="text-white text-base">Ninad Barbadikar examines why the Chelsea star's attacking output has...</p>
        </div>
      </div>

      {/* Medium News Container */}
      <div className="w-1/3 flex flex-col gap-5">
        {/* Medium News 1 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src={MediumNews1} alt="Medium News 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <div className="text-sm text-white font-semibold">Feature</div>
            <h3 className="text-lg font-semibold text-white">FA Cup fifth round: All you need to know</h3>
          </div>
        </div>

        {/* Medium News 2 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src={MediumNews2} alt="Medium News 2" className="w-full h-40 object-cover" />
          <div className="p-4">
            <div className="text-sm text-white font-semibold">More than a game</div>
            <h3 className="text-lg font-semibold text-white">Shearer: League's impact felt 'year-round' after More Than A Game Celebration</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
