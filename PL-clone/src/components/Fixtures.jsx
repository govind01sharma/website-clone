import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PLlogo from '../assets/images/logo.png';

function Fixtures() {
  const [fixturesData, setFixturesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get(
          'https://api.example.com/premierleague', // Replace with actual API endpoint
          {
            params: { date: '02272025' }, // Adjust parameters as per API documentation
            headers: { 'X-RapidAPI-Key': 'YOUR_API_KEY' }, // Add your API key
          }
        );
        setFixturesData(response.data.matches); // Adjust based on API response structure
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fixtures:', error);
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="font-sans w-80 mx-auto my-5 rounded-lg shadow-md overflow-hidden bg-white">
      <div className="bg-gradient-to-r from-[#672c98] to-[#0391ff] text-white py-3 px-5 text-center font-bold text-lg flex items-center justify-center">
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
              <span className="font-bold w-8 text-center text-gray-700">{match.homeTeam}</span>
              <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-8 h-8 rounded-full" />
              <div className="bg-[#37003C] text-white py-1 px-3 rounded-md text-sm">{match.score}</div>
              <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-8 h-8 rounded-full" />
              <span className="font-bold w-8 text-center text-gray-700">{match.awayTeam}</span>
              <span className="text-gray-600 text-xl">→</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Fixtures;
