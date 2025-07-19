import React from 'react';
import { Link } from 'react-router-dom';
import { Match } from '../types/cricket';
import { Clock, MapPin, Trophy, Eye } from 'lucide-react';

interface LiveScoreCardProps {
  match: Match;
}

const LiveScoreCard: React.FC<LiveScoreCardProps> = ({ match }) => {
  const formatOvers = (overs: number) => {
    const wholeOvers = Math.floor(overs);
    const balls = Math.round((overs - wholeOvers) * 6);
    return `${wholeOvers}.${balls}`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 cursor-pointer ${
      match.status === 'live' ? 'border-red-500 shadow-red-100' : 
      match.status === 'upcoming' ? 'border-blue-500' : 'border-green-500'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Trophy className="h-4 w-4 text-orange-600" />
          <span className="text-sm font-medium text-gray-600">{match.tournament}</span>
        </div>
        <div className="flex items-center space-x-2">
          {match.status === 'live' && (
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wide">LIVE</span>
            </div>
          )}
          {match.status === 'upcoming' && (
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-blue-500" />
              <span className="text-sm text-blue-600">Upcoming</span>
            </div>
          )}
          {match.status === 'completed' && (
            <span className="text-sm text-green-600 font-medium">Completed</span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{match.homeTeam.flag}</span>
            <div>
              <h3 className="font-semibold text-gray-800">{match.homeTeam.name}</h3>
              <p className="text-sm text-gray-500">{match.homeTeam.shortName}</p>
            </div>
          </div>
          {match.score && (
            <div className="text-right">
              <div className="text-xl font-bold text-gray-800">
                {match.score.homeTeam.runs}/{match.score.homeTeam.wickets}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {formatOvers(match.score.homeTeam.overs)} overs
              </div>
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{match.awayTeam.flag}</span>
            <div>
              <h3 className="font-semibold text-gray-800">{match.awayTeam.name}</h3>
              <p className="text-sm text-gray-500">{match.awayTeam.shortName}</p>
            </div>
          </div>
          {match.score && (
            <div className="text-right">
              <div className="text-xl font-bold text-gray-800">
                {match.score.awayTeam.runs}/{match.score.awayTeam.wickets}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {formatOvers(match.score.awayTeam.overs)} overs
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Match Details */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{match.venue}</span>
          </div>
          <div className="flex items-center space-x-4">
            {match.status === 'upcoming' && (
              <span>{new Date(match.startTime).toLocaleString()}</span>
            )}
            {match.result && (
              <span className="text-green-600 font-medium">{match.result}</span>
            )}
            <Link 
              to={`/match/${match.id}`}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <Eye className="h-3 w-3" />
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Live Match Commentary */}
      {match.status === 'live' && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="bg-red-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-700">LIVE COMMENTARY</span>
            </div>
            <p className="text-sm text-gray-700">
              {match.id === 'live-1' && "Kohli and Rahul building a crucial partnership. India looking to reduce the deficit..."}
              {match.id === 'live-2' && "Root and Buttler at the crease. England need to accelerate the run rate..."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveScoreCard;