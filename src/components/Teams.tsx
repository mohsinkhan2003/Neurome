import React from 'react';
import { teams } from '../data/mockData';
import { Trophy, TrendingUp, Users, Star } from 'lucide-react';

const Teams: React.FC = () => {
  const getRankingColor = (ranking: number) => {
    if (ranking === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
    if (ranking <= 3) return 'bg-gradient-to-r from-gray-300 to-gray-500';
    if (ranking <= 5) return 'bg-gradient-to-r from-orange-400 to-orange-600';
    return 'bg-gradient-to-r from-blue-400 to-blue-600';
  };

  const getRankingBadge = (ranking: number) => {
    if (ranking === 1) return '🥇';
    if (ranking === 2) return '🥈';
    if (ranking === 3) return '🥉';
    return '🏏';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">ICC Team Rankings</h1>
        <p className="text-gray-600">Official ICC rankings for international cricket teams</p>
      </div>

      {/* Rankings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-yellow-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <Trophy className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">{teams.length}</div>
          <div className="text-sm text-gray-600">Total Teams</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">125</div>
          <div className="text-sm text-gray-600">Top Rating</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <Users className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">3</div>
          <div className="text-sm text-gray-600">Top 3 Teams</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <Star className="h-6 w-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">India</div>
          <div className="text-sm text-gray-600">Current #1</div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div 
            key={team.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className={`h-2 ${getRankingColor(team.ranking)}`}></div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{team.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
                    <p className="text-sm text-gray-500">{team.shortName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl">{getRankingBadge(team.ranking)}</div>
                  <div className="text-sm text-gray-500">Rank #{team.ranking}</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ICC Rating</span>
                  <span className="font-semibold text-gray-800">
                    {(130 - team.ranking * 3).toFixed(1)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Points</span>
                  <span className="font-semibold text-gray-800">
                    {(125 - team.ranking * 2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Matches Played</span>
                  <span className="font-semibold text-gray-800">
                    {Math.floor(Math.random() * 20) + 15}
                  </span>
                </div>
                
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Recent Form</span>
                    <div className="flex space-x-1">
                      {['W', 'W', 'L', 'W', 'W'].map((result, index) => (
                        <span 
                          key={index}
                          className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white ${
                            result === 'W' ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;