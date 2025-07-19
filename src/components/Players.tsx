import React, { useState } from 'react';
import { players } from '../data/mockData';
import { User, Target, BarChart3, Clock, Filter, Award } from 'lucide-react';

const Players: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'batsman' | 'bowler' | 'all-rounder' | 'wicket-keeper'>('all');

  const filteredPlayers = players.filter(player => {
    if (filter === 'all') return true;
    return player.role === filter;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'batsman':
        return <Target className="h-5 w-5 text-blue-500" />;
      case 'bowler':
        return <BarChart3 className="h-5 w-5 text-red-500" />;
      case 'all-rounder':
        return <Clock className="h-5 w-5 text-green-500" />;
      case 'wicket-keeper':
        return <User className="h-5 w-5 text-purple-500" />;
      default:
        return <User className="h-5 w-5 text-gray-500" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'batsman':
        return 'bg-blue-50 border-blue-400 text-blue-800';
      case 'bowler':
        return 'bg-red-50 border-red-400 text-red-800';
      case 'all-rounder':
        return 'bg-green-50 border-green-400 text-green-800';
      case 'wicket-keeper':
        return 'bg-purple-50 border-purple-400 text-purple-800';
      default:
        return 'bg-gray-50 border-gray-400 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Player Rankings</h1>
        <p className="text-gray-600">Top international cricket players across all formats</p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Filter by Role</h2>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>All Players</span>
          </button>
          
          <button
            onClick={() => setFilter('batsman')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'batsman' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Target className="h-4 w-4" />
            <span>Batsmen</span>
          </button>
          
          <button
            onClick={() => setFilter('bowler')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'bowler' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BarChart3 className="h-4 w-4" />
            <span>Bowlers</span>
          </button>
          
          <button
            onClick={() => setFilter('all-rounder')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'all-rounder' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>All-Rounders</span>
          </button>
          
          <button
            onClick={() => setFilter('wicket-keeper')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'wicket-keeper' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <User className="h-4 w-4" />
            <span>Wicket-Keepers</span>
          </button>
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map((player) => (
          <div 
            key={player.id} 
            className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${getRoleColor(player.role).split(' ')[1]}`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-gray-700 w-10 text-center">
                    #{player.ranking}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{player.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      {getRoleIcon(player.role)}
                      <span className="capitalize">{player.role}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Team</div>
                  <div className="font-semibold text-gray-800">{player.team}</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="font-bold text-lg text-gray-800">{player.stats.matches}</div>
                    <div className="text-gray-500">Matches</div>
                  </div>
                  
                  {player.stats.runs && (
                    <div className="text-center bg-blue-50 rounded-lg p-3">
                      <div className="font-bold text-lg text-blue-800">{player.stats.runs}</div>
                      <div className="text-blue-600">Runs</div>
                    </div>
                  )}
                  
                  {player.stats.wickets && (
                    <div className="text-center bg-red-50 rounded-lg p-3">
                      <div className="font-bold text-lg text-red-800">{player.stats.wickets}</div>
                      <div className="text-red-600">Wickets</div>
                    </div>
                  )}
                  
                  {player.stats.average && (
                    <div className="text-center bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-lg text-green-800">{player.stats.average}</div>
                      <div className="text-green-600">Average</div>
                    </div>
                  )}
                </div>
                
                {player.stats.strikeRate && (
                  <div className="text-center bg-purple-50 rounded-lg p-3">
                    <div className="font-bold text-lg text-purple-800">{player.stats.strikeRate}</div>
                    <div className="text-purple-600">Strike Rate</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;