import React from 'react';
import { Team } from '../types/cricket';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface TeamRankingsProps {
  teams: Team[];
}

const TeamRankings: React.FC<TeamRankingsProps> = ({ teams }) => {
  const getTrendIcon = (ranking: number) => {
    if (ranking <= 3) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (ranking <= 6) return <Minus className="h-4 w-4 text-yellow-500" />;
    return <TrendingDown className="h-4 w-4 text-red-500" />;
  };

  const getRankingColor = (ranking: number) => {
    if (ranking === 1) return 'bg-yellow-100 border-yellow-400';
    if (ranking <= 3) return 'bg-green-50 border-green-400';
    if (ranking <= 6) return 'bg-blue-50 border-blue-400';
    return 'bg-gray-50 border-gray-400';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">ICC Team Rankings</h2>
      
      <div className="space-y-3">
        {teams.map((team) => (
          <div 
            key={team.id} 
            className={`p-4 rounded-lg border-l-4 transition-all hover:shadow-md ${getRankingColor(team.ranking)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-gray-700 w-8 text-center">
                  {team.ranking}
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{team.flag}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{team.name}</h3>
                    <p className="text-sm text-gray-500">{team.shortName}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {getTrendIcon(team.ranking)}
                <span className="text-sm font-medium text-gray-600">
                  Rating: {(120 - team.ranking * 5).toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamRankings;