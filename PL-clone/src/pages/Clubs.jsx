import React from 'react';
import Ars from '../assets/images/clubs-route/Ars.png';
import Ast from '../assets/images/clubs-route/Ast.png';
import Bha from '../assets/images/clubs-route/Bha.png';
import Bou from '../assets/images/clubs-route/Bou.png';
import Bre from '../assets/images/clubs-route/Bre.png';
import Che from '../assets/images/clubs-route/Che.png';
import Cry from '../assets/images/clubs-route/Cry.png';
import Eve from '../assets/images/clubs-route/Eve.png';
import Ful from '../assets/images/clubs-route/Ful.png';
import Ips from '../assets/images/clubs-route/Ips.png';
import Lei from '../assets/images/clubs-route/Lei.png';
import Liv from '../assets/images/clubs-route/Liv.png';
import Mci from '../assets/images/clubs-route/Mci.png';
import New from '../assets/images/clubs-route/New.png';
import Nott from '../assets/images/clubs-route/Nott.png';
import Sou from '../assets/images/clubs-route/Sou.png';
import Tot from '../assets/images/clubs-route/Tot.png';
import Utd from '../assets/images/clubs-route/Utd.png';
import Whu from '../assets/images/clubs-route/Whu.png';
import Wol from '../assets/images/clubs-route/Wol.png';

function Clubs() {
    const clubsData = [
        { name: 'Arsenal', logo: Ars, color: '#EF0107', link: 'https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Aston Villa', logo: Ast, color: '#95BFE5', link: 'https://www.avfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Bournemouth', logo: Bou, color: '#D32531', link: 'https://www.afcb.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Brentford', logo: Bre, color: '#E30613', link: 'https://www.brentfordfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Brighton & Hove Albion', logo: Bha, color: '#0057B8', link: 'https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Chelsea', logo: Che, color: '#034694', link: 'https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Crystal Palace', logo: Cry, color: '#1B458F', link: 'https://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Everton', logo: Eve, color: '#003399', link: 'https://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Fulham', logo: Ful, color: '#000000', link: 'https://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Ipswich Town', logo: Ips, color: '#0000A0', link: 'https://www.itfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Leicester City', logo: Lei, color: '#0053A0', link: '/https://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Liverpool', logo: Liv, color: '#C8102E', link: 'https://www.liverpoolfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Manchester City', logo: Mci, color: '#6CABDD', link: 'https://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Newcastle United', logo: New, color: '#241F20', link: 'https://www.newcastleunited.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Nottingham Forest', logo: Nott, color: '#FF0000', link: 'https://www.nottinghamforest.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Southampton', logo: Sou, color: '#D71920', link: 'https://www.southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Tottenham Hotspur', logo: Tot, color: '#132257', link: 'https://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Manchester United', logo: Utd, color: '#DA291C', link: 'https://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'West Ham United', logo: Whu, color: '#7A263A', link: 'https://www.whufc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
        { name: 'Wolverhampton Wanderers', logo: Wol, color: '#FDB913', link: 'https://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link' },
    ];

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
        {/* Clubs Text */}
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
          Clubs
        </div>

        {/* Search Input */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Clubs"
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

      {/* Clubs Grid */}
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-4 gap-4">
        {clubsData.map((club, index) => (
            <a 
                key={index} 
                href={club.link} 
                target="_blank"
                rel="noreferrer"
                className="rounded-lg shadow-md overflow-hidden" 
                style={{ backgroundColor: club.color, textDecoration: 'none' }}
            >
                <div className="p-4">
                <img
                    src={`${club.logo}`}
                    alt={`${club.name} Logo`}
                    className="mx-auto h-20 w-20 object-contain"
                />
                <h3 className="text-center mt-2 font-semibold text-white">{club.name}</h3> 
                </div>
                <div className="flex justify-end items-center p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                    />
                </svg>
                </div>
            </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Clubs;
