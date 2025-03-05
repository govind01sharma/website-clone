import React from 'react';
import PLlogo from '../assets/images/logo.png';
import BhaLogo from '../assets/images/team-logos/t36.png';
import BouLogo from '../assets/images/team-logos/t91.png';
import CryLogo from '../assets/images/team-logos/cry.png';
import AvlLogo from '../assets/images/team-logos/avl.png';
import WolLogo from '../assets/images/team-logos/wol.png';
import FulLogo from '../assets/images/team-logos/ful.png';
import CheLogo from '../assets/images/team-logos/che.png';
import SouLogo from '../assets/images/team-logos/sou.png';
import BreLogo from '../assets/images/team-logos/bre.png';
import EveLogo from '../assets/images/team-logos/eve.png';
import MunLogo from '../assets/images/team-logos/mun.png';
import IpsLogo from '../assets/images/team-logos/ips.png';
import NfoLogo from '../assets/images/team-logos/nfo.png';
import ArsLogo from '../assets/images/team-logos/ars.png';
import TotLogo from '../assets/images/team-logos/tot.png';
import MciLogo from '../assets/images/team-logos/mci.png';
import LivLogo from '../assets/images/team-logos/liv.png';
import NewLogo from '../assets/images/team-logos/new.png';
import WhuLogo from '../assets/images/team-logos/whu.png';
import LeiLogo from '../assets/images/team-logos/lei.png';


function Fixtures() {
  const fixturesData = [
    { date: "Wednesday 26 February", matches: [
      { team1: "BHA", team2: "BOU", score: "2-1", logo1: BhaLogo, logo2: BouLogo },
      { team1: "CRY", team2: "AVL", score: "4-1", logo1: CryLogo, logo2: AvlLogo },
      { team1: "WOL", team2: "FUL", score: "1-2", logo1: WolLogo, logo2: FulLogo },
      { team1: "CHE", team2: "SOU", score: "4-0", logo1: CheLogo, logo2: SouLogo },
    ]},
    { date: "Thursday 27 February", matches: [
      { team1: "BRE", team2: "EVE", score: "1-1", logo1: BreLogo, logo2: EveLogo },
      { team1: "MUN", team2: "IPS", score: "3-2", logo1: MunLogo, logo2: IpsLogo },
      { team1: "NFO", team2: "ARS", score: "0-0", logo1: NfoLogo, logo2: ArsLogo },
      { team1: "TOT", team2: "MCI", score: "0-1", logo1: TotLogo, logo2: MciLogo },
      { team1: "LIV", team2: "NEW", score: "2-0", logo1: LivLogo, logo2: NewLogo },
    ]},
    { date: "Friday 28 February", matches: [
        { team1: "WHU", team2: "LEI", score: "2-0", logo1: WhuLogo, logo2: LeiLogo },
    ]}
  ];

  return (
    <div className="font-sans w-80 mx-auto my-5 rounded-lg shadow-md overflow-hidden bg-white">
      <div className="bg-gradient-to-r from-[#37003C] to-blue-500 text-white py-3 px-5 text-center font-bold text-lg flex items-center justify-center">
        <img src={PLlogo} alt="Premier League" className="w-6 h-8 mr-2" />
        Matchweek 27
      </div>

      <div className="text-gray-500 py-2 px-4 text-left text-xs">
        All times shown are your local time
      </div>

      {fixturesData.map((matchDay, index) => (
        <div key={index}>
          <div className="text-[#37003C] py-2 px-4 text-left font-medium">
            {matchDay.date}
          </div>

          {matchDay.matches.map((match, matchIndex) => (
            <div key={matchIndex} className="flex items-center justify-between py-3 px-4 border-b last:border-b-0 hover:bg-[#9D7CBF] transition-colors duration-200">
              <span className="font-bold w-8 text-center text-gray-700">{match.team1}</span>
              <img src={match.logo1} alt={match.team1} className="w-8 h-8 rounded-full" />
              <div className="bg-[#37003C] text-white py-1 px-3 rounded-md text-sm">{match.score}</div>
              <img src={match.logo2} alt={match.team2} className="w-8 h-8 rounded-full" />
              <span className="font-bold w-8 text-center text-gray-700">{match.team2}</span>
              <span className="text-gray-600 text-xl">→</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Fixtures
