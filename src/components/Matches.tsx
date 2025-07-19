import React, { useState } from 'react';
import { matches } from '../data/mockData';
import { useLiveUpdates } from '../hooks/useLiveUpdates';
import LiveScoreCard from './LiveScoreCard';
import { Activity, Calendar, CheckCircle, Filter } from 'lucide-react';

const Matches: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'live' | 'upcoming' | 'completed'>('all');
  const liveUpdatedMatches = useLiveUpdates(matches);

  const filteredMatches = liveUpdatedMatches.filter(match => {
    if (filter === 'all') return true;
    return match.status === filter;
  });

  const getFilterCount = (status: string) => {
    if (status === 'all') return liveUpdatedMatches.length;
    return liveUpdatedMatches.filter(match => match.status === status).length;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">All Matches</h1>
        <p className="text-gray-600">Stay updated with live scores, upcoming fixtures, and recent results</p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">Filter Matches</h2>
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
            <span>All Matches</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
              {getFilterCount('all')}
            </span>
          </button>
          
          <button
            onClick={() => setFilter('live')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'live' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Activity className="h-4 w-4" />
            <span>Live</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
              {getFilterCount('live')}
            </span>
          </button>
          
          <button
            onClick={() => setFilter('upcoming')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'upcoming' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Upcoming</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
              {getFilterCount('upcoming')}
            </span>
          </button>
          
          <button
            onClick={() => setFilter('completed')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              filter === 'completed' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            <span>Completed</span>
            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
              {getFilterCount('completed')}
            </span>
          </button>
        </div>
      </div>

      {/* Matches List */}
      <div className="space-y-6">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <LiveScoreCard key={match.id} match={match} />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              {filter === 'live' && <Activity className="h-16 w-16 mx-auto" />}
              {filter === 'upcoming' && <Calendar className="h-16 w-16 mx-auto" />}
              {filter === 'completed' && <CheckCircle className="h-16 w-16 mx-auto" />}
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No {filter === 'all' ? '' : filter} matches found
            </h3>
            <p className="text-gray-500">
              {filter === 'live' && 'No live matches at the moment. Check back soon!'}
              {filter === 'upcoming' && 'No upcoming matches scheduled.'}
              {filter === 'completed' && 'No completed matches to show.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;