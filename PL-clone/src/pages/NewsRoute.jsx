import React, { useState } from 'react';
import News1 from '../assets/images/news-route/News1.webp';
import News2 from '../assets/images/news-route/News2.webp';
import News3 from '../assets/images/news-route/News3.webp';
import News4 from '../assets/images/news-route/News4.webp';
import News5 from '../assets/images/news-route/News5.webp';
import News6 from '../assets/images/news-route/News6.webp';
import News7 from '../assets/images/news-route/News7.webp';
import News8 from '../assets/images/news-route/News8.webp';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


function NewsRoute() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const newsData = [
    {
      image: News1,
      href: "/news1",
      category: "Feature",
      title: "Preview: All you need to know ahead of European last-16 ties",
      description: "Ben Bloom looks at how Aston Villa, Arsenal, Liverpool, Spurs, Man Utd and Chelsea will fare in their respective matches"
    },
    {
      image: News2,
      href: "/news2",
      category: "News",
      title: "Timber: Champions League offers chance for Arsenal to change narrative",
      description: "Arsenal defender says win against PSV can give his side a much-needed boost and adds that his side need to 'go for it'"
    },
    {
      image: News3,
      href: "/news3",
      category: "News",
      title: "'We must improve our away form,' says Emery as he receives injury boost",
      description: "Villa head coach previews his side's Champions League last-16 tie against Club Brugge, one of the teams who beat the Villans on the road this season"
    },
    {
      image: News4,
      href: "/news4",
      category: "Club News",
      title: "Sels the hero as Forest beat Ipswich on penalties in FA Cup",
      description: ""
    },
    {
      image: News5,
      href: "/news5",
      category: "Feature",
      title: "How much will Wolves miss Cunha in relegation battle?",
      description: "With star striker facing a period out through suspension, we look at how Vitor Pereira's side will cope without Brazilian"
    },
    {
      image: News6,
      href: "/news6",
      category: "Fantasy Premier League",
      title: "Who are now the best FPL forwards as popular picks are sidelined?",
      description: "The Scout analyses the underlying numbers, assesses the fixtures and reveals the standout picks for the next two Gameweeks"
    },
    {
      image: News7,
      href: "/news7",
      category: "Quiz",
      title: "Quiz: Can you name the top Premier League scorer from 30 different nations?",
      description: "How well do you know the leading Premier League goalscorers from all corners of the world?"
    },
    {
      image: News8,
      href: "/news8",
      category: "Fantasy Premier League",
      title: "How FA Cup ties have caused CARNAGE for FPL managers",
      description: "The Scout looks at who's injured and suspended, and what lies ahead with Blank Gameweeks following the weekend's action"
    }
  ];

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  

  return (
    <div>
      {/* Header */}
      <header
        className="bg-gradient-to-r from-[#37003C] to-blue-500"
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


      {/* Pagination */}
      <div className="mt-8 mb-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* News Sections */}
      {newsData.slice(startIndex, endIndex).map((news, index) => (
        <section key={index} className="mt-8 mx-4 group">
          <a href={news.href} className="block">
            <div className="flex">
              <div className="w-1/3 overflow-hidden">
                <img src={news.image} alt="News" className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="w-2/3 pl-4 pt-10">
                <h2 className="text-sm font-bold text-purple-700 mb-2">{news.category}</h2>
                <h3 className="text-3xl text-[#37003C] font-semibold mb-2">{news.title}</h3>
                {news.description && <p className="text-xs text-[#37003C]">{news.description}</p>}
              </div>
            </div>
          </a>
        </section>
      ))}


      {/* Pagination */}
      <div className="mt-8 mb-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default NewsRoute;
