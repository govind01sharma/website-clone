import React from "react";
import SalahImage from "../assets/images/players/Salah.png";
import VVDImage from "../assets/images/players/Van-Dijk.png";
import SelsImage from "../assets/images/players/Sels.png";
import LivLogo from "../assets/images/players/Liv.png";
import CryLogo from "../assets/images/players/Cry.png";
import SouLogo from "../assets/images/players/Sou.png";

const statsData = [
  {
    title: "Goals",
    leader: {
      name: "Mohamed Salah",
      team: "Liverpool",
      value: 25,
      image: SalahImage,
    },
    others: [
      { rank: 2, name: "Erling Haaland", team: "Man City", value: 20 },
      { rank: 3, name: "Alexander Isak", team: "Newcastle", value: 19 },
      { rank: 4, name: "Chris Wood", team: "Nottm Forest", value: 18 },
      { rank: 5, name: "Bryan Mbeumo", team: "Brentford", value: 15 },
      { rank: 6, name: "Cole Palmer", team: "Chelsea", value: 14 },
    ],
  },
  {
    title: "Assists",
    leader: {
      name: "Mohamed Salah",
      team: "Liverpool",
      value: 17,
      image: SalahImage,
    },
    others: [
      { rank: 2, name: "Mikkel Damsgaard", team: "Brentford", value: 10 },
      { rank: 2, name: "Antonee Robinson", team: "Fulham", value: 10 },
      { rank: 2, name: "Bukayo Saka", team: "Arsenal", value: 10 },
      { rank: 5, name: "Son Heung-Min", team: "Spurs", value: 9 },
      { rank: 6, name: "Anthony Elanga", team: "Nottm Forest", value: 8 },
    ],
  },
  {
    title: "Passes",
    leader: {
      name: "Virgil van Dijk",
      team: "Liverpool",
      value: 2160,
      image: VVDImage,
    },
    others: [
      { rank: 2, name: "Levi Colwill", team: "Chelsea", value: 1935 },
      { rank: 3, name: "William Saliba", team: "Arsenal", value: 1768 },
      { rank: 4, name: "Josko Gvardiol", team: "Man City", value: 1704 },
      { rank: 5, name: "Jan Paul van Hecke", team: "Brighton", value: 1658 },
      { rank: 6, name: "Calvin Bassey", team: "Fulham", value: 1630 },
    ],
  },
  {
    title: "Clean sheets",
    leader: {
      name: "Matz Sels",
      team: "Nottm Forest",
      value: 11,
      image: SelsImage,
    },
    others: [
      { rank: 2, name: "David Raya", team: "Arsenal", value: 10 },
      { rank: 3, name: "Jordan Pickford", team: "Everton", value: 9 },
      { rank: 4, name: "Alisson Becker", team: "Liverpool", value: 8 },
      { rank: 4, name: "Dean Henderson", team: "Crystal Palace", value: 8 },
      { rank: 6, name: "André Onana", team: "Man Utd", value: 7 },
    ],
  },
];

const clubStatsData = [
  {
    title: "Goals",
    leader: {
      name: "Liverpool",
      stadium: "Anfield",
      value: 66,
      image: LivLogo,
    },
    others: [
      { rank: 2, name: "Man City", stadium: "Etihad Stadium", value: 53 },
      { rank: 2, name: "Spurs", stadium: "Tottenham Hotspur Stadium", value: 53 },
      { rank: 4, name: "Chelsea", stadium: "Stamford Bridge", value: 52 },
      { rank: 5, name: "Arsenal", stadium: "Emirates Stadium", value: 51 },
      { rank: 6, name: "Brentford", stadium: "Gtech Community Stadium", value: 48 },
      { rank: 7, name: "Newcastle", stadium: "St. James' Park", value: 46 },
    ],
  },
  {
    title: "Tackles",
    leader: {
      name: "Crystal Palace",
      stadium: "Selhurst Park",
      value: 585,
      image: CryLogo,
    },
    others: [
      { rank: 2, name: "Man Utd", stadium: "Old Trafford", value: 573 },
      { rank: 2, name: "Wolves", stadium: "Molineux Stadium", value: 573 },
      { rank: 4, name: "Everton", stadium: "Goodison Park", value: 540 },
      { rank: 5, name: "Leicester", stadium: "King Power Stadium", value: 535 },
      { rank: 6, name: "Bournemouth", stadium: "Vitality Stadium", value: 520 },
      { rank: 7, name: "Nottm Forest", stadium: "The City Ground", value: 499 },
    ],
  },
  {
    title: "Wins",
    leader: {
      name: "Liverpool",
      stadium: "Anfield",
      value: 20,
      image: LivLogo,
    },
    others: [
      { rank: 2, name: "Arsenal", stadium: "Emirates Stadium", value: 15 },
      { rank: 3, name: "Man City", stadium: "Etihad Stadium", value: 14 },
      { rank: 3, name: "Nottm Forest", stadium: "The City Ground", value: 14 },
      { rank: 5, name: "Chelsea", stadium: "Stamford Bridge", value: 13 },
      { rank: 5, name: "Newcastle", stadium: "St. James' Park", value: 13 },
      { rank: 7, name: "Bournemouth", stadium: "Vitality Stadium", value: 12 },
    ],
  },
  {
    title: "Losses",
    leader: {
      name: "Southampton",
      stadium: "St. Mary's Stadium",
      value: 22,
      image: SouLogo,
    },
    others: [
      { rank: 2, name: "Leicester", stadium: "King Power Stadium", value: 18 },
      { rank: 3, name: "Wolves", stadium: "Molineux Stadium", value: 17 },
      { rank: 4, name: "Ipswich", stadium: "Portman Road", value: 16 },
      { rank: 5, name: "Spurs", stadium: "Tottenham Hotspur Stadium", value: 14 },
      { rank: 6, name: "Man Utd", stadium: "Old Trafford", value: 12 },
      { rank: 6, name: "West Ham", stadium: "London Stadium", value: 12 },
    ],
  },
];

const Stats = () => {
  return (
    <div className="container mx-auto px-2 py-10">
      <h1 className="text-[#37003C] text-4xl font-bold mb-5 custom-font-family">
        2024/25 Player Stats
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            {/* Leader Section */}
            <div className="bg-red-500 text-white p-4 relative">
              <h2 className="text-xl font-semibold">{stat.title}</h2>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold">
                      {stat.leader.value}
                    </span>
                  </div>
                  <p className="text-sm">{stat.leader.name}</p>
                  <p className="text-xs">{stat.leader.team}</p>
                </div>
                {/* Image */}
                <div className="absolute top-2 right-0 mr-2">
                  <img
                    src={stat.leader.image}
                    alt={stat.leader.name}
                    className="w-24 h-30 pt-1 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Others Section */}
            <div className="p-4">
              <ul>
                {stat.others.map((other, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-gray-200 last:border-none"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{other.rank}</span>
                      <span className="text-gray-800">{other.name}</span>
                    </div>
                    <span className="text-gray-600">{other.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-[#37003C] text-4xl font-bold mt-12 mb-5 custom-font-family">
        2024/25 Premier League Club Stats
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clubStatsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            {/* Leader Section */}
            <div className="bg-red-500 text-white p-4 relative">
              <h2 className="text-xl font-semibold">{stat.title}</h2>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold">
                      {stat.leader.value}
                    </span>
                  </div>
                  <p className="text-sm">{stat.leader.name}</p>
                  <p className="text-xs">{stat.leader.stadium}</p>
                </div>
                {/* Image */}
                <div className="absolute top-2 right-0 mr-2">
                  <img
                    src={stat.leader.image}
                    alt={stat.leader.name}
                    className="w-24 h-30 pt-1 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Others Section */}
            <div className="p-4">
              <ul>
                {stat.others.map((other, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-gray-200 last:border-none"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{other.rank}</span>
                      <span className="text-gray-800">{other.name}</span>
                    </div>
                    <span className="text-gray-600">{other.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
