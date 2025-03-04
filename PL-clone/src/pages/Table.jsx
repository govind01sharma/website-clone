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

function Table() {
  const tableData = [
    { position: 1, logo: MciLogo, team: "Manchester City", matches: 25, wins: 18, draws: 4, losses: 3, points: 58, goalsFor: 60, goalsAgainst: 25, goalDifference: 35 },
    { position: 2, logo: ArsLogo, team: "Arsenal", matches: 25, wins: 17, draws: 4, losses: 4, points: 55, goalsFor: 54, goalsAgainst: 30, goalDifference: 24 },
    { position: 3, logo: MunLogo, team: "Manchester United", matches: 25, wins: 14, draws: 6, losses: 5, points: 48, goalsFor: 40, goalsAgainst: 30, goalDifference: 10 },
    { position: 4, logo: TotLogo, team: "Tottenham Hotspur", matches: 25, wins: 13, draws: 5, losses: 7, points: 44, goalsFor: 45, goalsAgainst: 35, goalDifference: 10 },
    { position: 5, logo: LivLogo, team: "Liverpool", matches: 25, wins: 12, draws: 6, losses: 7, points: 42, goalsFor: 45, goalsAgainst: 30, goalDifference: 15 },
    { position: 6, logo: CheLogo, team: "Chelsea", matches: 25, wins: 10, draws: 8, losses: 7, points: 38, goalsFor: 30, goalsAgainst: 30, goalDifference: 0 },
    { position: 7, logo: FulLogo, team: "Fulham", matches: 25, wins: 10, draws: 6, losses: 9, points: 36, goalsFor: 35, goalsAgainst: 35, goalDifference: 0 },
    { position: 8, logo: BhaLogo, team: "Brighton & Hove Albion", matches: 25, wins: 9, draws: 7, losses: 9, points: 34, goalsFor: 35, goalsAgainst: 35, goalDifference: 0 },
    { position: 9, logo: BreLogo, team: "Brentford", matches: 25, wins: 8, draws: 9, losses: 8, points: 33, goalsFor: 35, goalsAgainst: 35, goalDifference: 0 },
    { position: 10, logo: EveLogo, team: "Everton", matches: 25, wins: 7, draws: 8, losses: 10, points: 29, goalsFor: 25, goalsAgainst: 35, goalDifference: -10 },
    { position: 11, logo: NfoLogo, team: "Nottingham Forest", matches: 25, wins: 7, draws: 7, losses: 11, points: 28, goalsFor: 25, goalsAgainst: 40, goalDifference: -15 },
    { position: 12, logo: IpsLogo, team: "Ipswich Town", matches: 25, wins: 6, draws: 9, losses: 10, points: 27, goalsFor: 30, goalsAgainst: 40, goalDifference: -10 },
    { position: 13, logo: SouLogo, team: "Southampton", matches: 25, wins: 6, draws: 7, losses: 12, points: 25, goalsFor: 25, goalsAgainst: 45, goalDifference: -20 },
    { position: 14, logo: WhuLogo, team: "West Ham United", matches: 25, wins: 6, draws: 6, losses: 13, points: 24, goalsFor: 25, goalsAgainst: 40, goalDifference: -15 },
    { position: 15, logo: LeiLogo, team: "Leicester City", matches: 25, wins: 6, draws: 5, losses: 14, points: 23, goalsFor: 30, goalsAgainst: 45, goalDifference: -15 },
    { position: 16, logo: WolLogo, team: "Wolverhampton Wanderers", matches: 25, wins: 5, draws: 7, losses: 13, points: 22, goalsFor: 20, goalsAgainst: 40, goalDifference: -20 },
    { position: 17, logo: CryLogo, team: "Crystal Palace", matches: 25, wins: 5, draws: 6, losses: 14, points: 21, goalsFor: 25, goalsAgainst: 45, goalDifference: -20 },
    { position: 18, logo: AvlLogo, team: "Aston Villa", matches: 25, wins: 5, draws: 5, losses: 15, points: 20, goalsFor: 25, goalsAgainst: 50, goalDifference: -25 },
    { position: 19, logo: NewLogo, team: "Newcastle United", matches: 25, wins: 4, draws: 7, losses: 14, points: 19, goalsFor: 20, goalsAgainst: 45, goalDifference: -25 },
    { position: 20, logo: BouLogo, team: "Bournemouth", matches: 25, wins: 4, draws: 5, losses: 16, points: 17, goalsFor: 20, goalsAgainst: 55, goalDifference: -35 },
  ];

  return (
    <div className="font-sans mx-auto my-5 rounded-lg shadow-md overflow-hidden bg-white w-full">
      <div className="bg-gradient-to-r from-[#672c98] to-[#0391ff] text-white py-3 px-5 text-center font-bold text-lg flex items-center justify-center">
        <img src={PLlogo} alt="Premier League" className="w-6 h-8 mr-2" />
        Premier League Table
      </div>

      <div className="text-gray-500 py-2 px-4 text-left text-xs">
        Standings after Matchweek 27
      </div>

      <table className="w-full text-gray-700">
        <thead className="bg-[#37003C] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Position</th>
            <th className="py-3 px-4 text-left"></th>
            <th className="py-3 px-4 text-left">Team</th>
            <th className="py-3 px-4 text-left">Matches</th>
            <th className="py-3 px-4 text-left">Won</th>
            <th className="py-3 px-4 text-left">Drawn</th>
            <th className="py-3 px-4 text-left">Lost</th>
            <th className="py-3 px-4 text-left">Points</th>
            <th className="py-3 px-4 text-left">Goals For</th>
            <th className="py-3 px-4 text-left">Goals Against</th>
            <th className="py-3 px-4 text-left">Goal Difference</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((team, index) => (
            <tr key={index} className="border-b last:border-b-0 hover:bg-[#9D7CBF] transition-colors duration-200">
              <td className="py-3 px-4 text-left">{team.position}</td>
              <td className="py-3 px-4 text-left"><img src={team.logo} alt={team.team} className="w-8 h-8 rounded-full" /></td>
              <td className="py-3 px-4 text-left">{team.team}</td>
              <td className="py-3 px-4 text-left">{team.matches}</td>
              <td className="py-3 px-4 text-left">{team.wins}</td>
              <td className="py-3 px-4 text-left">{team.draws}</td>
              <td className="py-3 px-4 text-left">{team.losses}</td>
              <td className="py-3 px-4 text-left">{team.points}</td>
              <td className="py-3 px-4 text-left">{team.goalsFor}</td>
              <td className="py-3 px-4 text-left">{team.goalsAgainst}</td>
              <td className="py-3 px-4 text-left">{team.goalDifference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
