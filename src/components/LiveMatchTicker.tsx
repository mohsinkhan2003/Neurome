import React from 'react';
import { matches } from '../data/mockData';
import { useLiveUpdates } from '../hooks/useLiveUpdates';
import { Activity } from 'lucide-react';

const LiveMatchTicker: React.FC = () => {
  const liveUpdatedMatches = useLiveUpdates(matches);
  const liveMatches = liveUpdatedMatches.filter(match => match.status === 'live');

  if (liveMatches.length === 0) {
    return null;
  }

  const formatOvers = (overs: number) => {
    const wholeOvers = Math.floor(overs);
    const balls = Math.round((overs - wholeOvers) * 6);
    return `${wholeOvers}.${balls}`;
  };

  return (
    <div className="bg-red-600 text-white py-2 border-t border-red-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 overflow-x-auto">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Activity className="h-4 w-4 animate-pulse" />
            <span className="font-bold text-sm uppercase tracking-wide">LIVE</span>
          </div>
          
          {liveMatches.map((match, index) => (
            <div key={match.id} className="flex items-center space-x-6 flex-shrink-0">
              {index > 0 && <div className="w-px h-4 bg-red-400"></div>}
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{match.homeTeam.flag}</span>
                  <span className="font-medium">{match.homeTeam.shortName}</span>
                  {match.score && (
                    <span className="font-bold">
                      {match.score.homeTeam.runs}/{match.score.homeTeam.wickets} ({formatOvers(match.score.homeTeam.overs)})
                    </span>
                  )}
                </div>
                
                <span className="text-red-200">vs</span>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{match.awayTeam.flag}</span>
                  <span className="font-medium">{match.awayTeam.shortName}</span>
                  {match.score && (
                    <span className="font-bold">
                      {match.score.awayTeam.runs}/{match.score.awayTeam.wickets} ({formatOvers(match.score.awayTeam.overs)})
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveMatchTicker;