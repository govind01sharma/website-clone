import React from 'react'
import News1 from '../assets/images/news-route/News1.webp';
import News2 from '../assets/images/news-route/News2.webp';
import News3 from '../assets/images/news-route/News3.webp';
import News4 from '../assets/images/news-route/News4.webp';
import News5 from '../assets/images/news-route/News5.webp';
import News6 from '../assets/images/news-route/News6.webp';
import News7 from '../assets/images/news-route/News7.webp';
import News8 from '../assets/images/news-route/News8.webp';

function NewsRoute() {
  return (
    <div>
      {/* Header */}
      <header
        className="bg-gradient-to-r from-blue-500 to-purple-500"
        style={{
          height: '194px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        {/* News Text */}
        <div
          className="text-white font-bold rounded-md"
          style={{
            fontFamily: 'PremierSans-Heavy, Arial, Helvetica Neue, sans-serif',
            fontSize: '61px',
            fontWeight: 'bold',
            height: '73px',
            lineHeight: '73px',
            marginRight: '20px',
          }}
        >
          News
        </div>

        {/* Search Input */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-4 py-2 rounded-md focus:outline-none text-black"
            style={{ minWidth: '400px' }}
          />
          <button className="ml-2 px-4 py-2 bg-white text-gray-800 rounded-md focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>

      <section className="mt-8 mx-4 py-4 group">
        <a href="/news1" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News1} alt="Football players" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
              <h2 className="text-sm font-bold text-purple-700 mb-2">Feature</h2> 
              <h3 className="text-3xl text-[#37003C] font-semibold mb-2">Preview: All you need to know ahead of European last-16 ties</h3>
              <p className="text-xs text-[#37003C]">Ben Bloom looks at how Aston Villa, Arsenal, Liverpool, Spurs, Man Utd and Chelsea will fare in their respective matches</p>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-8 mx-4 group">
        <a href="/news2" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News2} alt="Arsenal player at press conference" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
            <h2 className="text-sm font-bold text-purple-700 mb-2">News</h2> 
            <h3 className="text-3xl text-[#37003C] font-semibold mb-2">Timber: Champions League offers chance for Arsenal to change narrative</h3>
            <p className="text-xs text-[#37003C]">Arsenal defender says win against PSV can give his side a much-needed boost and adds that his side need to 'go for it'</p>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-8 mx-4 group">
        <a href="/news3" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News3} alt="Arsenal player at press conference" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
            <h2 className="text-sm font-bold text-purple-700 mb-2">News</h2> 
            <h3 className="text-3xl text-[#37003C] font-semibold mb-2">'We must improve our away form,' says Emery as he receives injury boost</h3>
            <p className="text-xs text-[#37003C]"> Villa head coach previews his side's Champions League last-16 tie against Club Brugge, one of the teams who beat the Villans on the road this season </p>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-8 mx-4 group">
        <a href="/news4" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News4} alt="Arsenal player at press conference" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
            <h2 className="text-sm font-bold text-purple-700 mb-2">Club News</h2> 
            <h3 className="text-3xl text-[#37003C] font-semibold mb-2">Sels the hero as Forest beat Ipswich on penalties in FA Cup</h3>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-8 mx-4 group">
        <a href="/news5" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News5} alt="Arsenal player at press conference" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
            <h2 className="text-sm font-bold text-purple-700 mb-2">Feature</h2> 
            <h3 className="text-3xl text-[#37003C] font-semibold mb-2">How much will Wolves miss Cunha in relegation battle?</h3>
            <p className="text-xs text-[#37003C]"> With star striker facing a period out through suspension, we look at how Vitor Pereira's side will cope without Brazilian </p>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-8 mx-4 group">
        <a href="/news6" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News6} alt="Arsenal player at press conference" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
            <h2 className="text-sm font-bold text-purple-700 mb-2">Fantasy Premier League</h2> 
            <h3 className="text-3xl text-[#37003C] font-semibold mb-2">Who are now the best FPL forwards as popular picks are sidelined?</h3>
            <p className="text-xs text-[#37003C]">The Scout analyses the underlying numbers, assesses the fixtures and reveals the standout picks for the next two Gameweeks </p>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-8 mx-4 group">
        <a href="/news7" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News7} alt="Arsenal player at press conference" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
            <h2 className="text-sm font-bold text-purple-700 mb-2">Quiz</h2> 
            <h3 className="text-3xl text-[#37003C] font-semibold mb-2">Quiz: Can you name the top Premier League scorer from 30 different nations?</h3>
            <p className="text-xs text-[#37003C]"> How well do you know the leading Premier League goalscorers from all corners of the world? </p>
            </div>
          </div>
        </a>
      </section>

      <section className="mt-8 mx-4 group">
        <a href="/news8" className="block">
          <div className="flex">
            <div className="w-1/3 overflow-hidden">
              <img src={News8} alt="Arsenal player at press conference" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="w-2/3 pl-4 pt-10">
            <h2 className="text-sm font-bold text-purple-700 mb-2">Fantasy Premier League</h2> 
            <h3 className="text-3xl text-[#37003C] font-semibold mb-2">How FA Cup ties have caused CARNAGE for FPL managers</h3>
            <p className="text-xs text-[#37003C]"> The Scout looks at who's injured and suspended, and what lies ahead with Blank Gameweeks following the weekend's action </p>
            </div>
          </div>
        </a>
      </section>
    </div>
  )
}

export default NewsRoute;
