import React from 'react';
import { Player } from '../types/cricket';
import { User, Target, BarChart3, Clock } from 'lucide-react';

interface PlayerStatsProps {
  players: Player[];
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ players }) => {
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'batsman':
        return <Target className="h-4 w-4 text-blue-500" />;
      case 'bowler':
        return <BarChart3 className="h-4 w-4 text-red-500" />;
      case 'all-rounder':
        return <Clock className="h-4 w-4 text-green-500" />;
      case 'wicket-keeper':
        return <User className="h-4 w-4 text-purple-500" />;
      default:
        return <User className="h-4 w-4 text-gray-500" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'batsman':
        return 'bg-blue-50 border-blue-400';
      case 'bowler':
        return 'bg-red-50 border-red-400';
      case 'all-rounder':
        return 'bg-green-50 border-green-400';
      case 'wicket-keeper':
        return 'bg-purple-50 border-purple-400';
      default:
        return 'bg-gray-50 border-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Top Players</h2>
      
      <div className="space-y-4">
        {players.map((player) => (
          <div 
            key={player.id} 
            className={`p-4 rounded-lg border-l-4 transition-all hover:shadow-md ${getRoleColor(player.role)}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-bold text-gray-700 w-8 text-center">
                  {player.ranking}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{player.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    {getRoleIcon(player.role)}
                    <span className="capitalize">{player.role}</span>
                    <span>•</span>
                    <span>{player.team}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-gray-800">{player.stats.matches}</div>
                <div className="text-gray-500">Matches</div>
              </div>
              {player.stats.runs && (
                <div className="text-center">
                  <div className="font-semibold text-gray-800">{player.stats.runs}</div>
                  <div className="text-gray-500">Runs</div>
                </div>
              )}
              {player.stats.wickets && (
                <div className="text-center">
                  <div className="font-semibold text-gray-800">{player.stats.wickets}</div>
                  <div className="text-gray-500">Wickets</div>
                </div>
              )}
              {player.stats.average && (
                <div className="text-center">
                  <div className="font-semibold text-gray-800">{player.stats.average}</div>
                  <div className="text-gray-500">Average</div>
                </div>
              )}
              {player.stats.strikeRate && (
                <div className="text-center">
                  <div className="font-semibold text-gray-800">{player.stats.strikeRate}</div>
                  <div className="text-gray-500">Strike Rate</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerStats;