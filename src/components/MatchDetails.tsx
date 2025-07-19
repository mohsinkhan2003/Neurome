import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { matches } from '../data/mockData';
import { useLiveUpdates } from '../hooks/useLiveUpdates';
import { ArrowLeft, MapPin, Calendar, Trophy, Users, Activity, Clock } from 'lucide-react';

const MatchDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const liveUpdatedMatches = useLiveUpdates(matches);
  const match = liveUpdatedMatches.find(m => m.id === id);

  if (!match) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Match Not Found</h2>
          <p className="text-gray-600 mb-6">The match you're looking for doesn't exist.</p>
          <Link 
            to="/matches" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Matches
          </Link>
        </div>
      </div>
    );
  }

  const formatOvers = (overs: number) => {
    const wholeOvers = Math.floor(overs);
    const balls = Math.round((overs - wholeOvers) * 6);
    return `${wholeOvers}.${balls}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          to="/matches" 
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Matches</span>
        </Link>
      </div>

      {/* Match Header */}
      <div className={`bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 ${
        match.status === 'live' ? 'border-red-500' : 
        match.status === 'upcoming' ? 'border-blue-500' : 'border-green-500'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Trophy className="h-6 w-6 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-800">{match.tournament}</h1>
          </div>
          <div className="flex items-center space-x-2">
            {match.status === 'live' && (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-600 font-bold uppercase tracking-wide">LIVE</span>
              </div>
            )}
            {match.status === 'upcoming' && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-blue-600 font-medium">Upcoming</span>
              </div>
            )}
            {match.status === 'completed' && (
              <span className="text-green-600 font-medium">Match Completed</span>
            )}
          </div>
        </div>

        {/* Teams and Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Home Team */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">{match.homeTeam.flag}</span>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{match.homeTeam.name}</h2>
                <p className="text-gray-500">{match.homeTeam.shortName}</p>
              </div>
            </div>
            {match.score && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {match.score.homeTeam.runs}/{match.score.homeTeam.wickets}
                </div>
                <div className="text-gray-600">
                  {formatOvers(match.score.homeTeam.overs)} overs
                </div>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">{match.awayTeam.flag}</span>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{match.awayTeam.name}</h2>
                <p className="text-gray-500">{match.awayTeam.shortName}</p>
              </div>
            </div>
            {match.score && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {match.score.awayTeam.runs}/{match.score.awayTeam.wickets}
                </div>
                <div className="text-gray-600">
                  {formatOvers(match.score.awayTeam.overs)} overs
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Match Result */}
        {match.result && (
          <div className="mt-6 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800">{match.result}</h3>
            </div>
          </div>
        )}
      </div>

      {/* Match Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Match Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Match Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium text-gray-800">Venue</div>
                  <div className="text-gray-600">{match.venue}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium text-gray-800">Date & Time</div>
                  <div className="text-gray-600">
                    {new Date(match.startTime).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Trophy className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium text-gray-800">Tournament</div>
                  <div className="text-gray-600">{match.tournament}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Commentary */}
          {match.status === 'live' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Activity className="h-5 w-5 text-red-500" />
                <span>Live Commentary</span>
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-red-700">LIVE UPDATE</span>
                  </div>
                  <p className="text-gray-700">
                    {match.id === 'live-1' && "Kohli looking comfortable at the crease. Plays a beautiful cover drive for four runs. India building momentum in their second innings."}
                    {match.id === 'live-2' && "Root brings up his half-century with a delicate glance to fine leg. England still need 85 runs from 108 balls. The required rate is climbing."}
                  </p>
                  <div className="text-xs text-gray-500 mt-2">2 minutes ago</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    {match.id === 'live-1' && "Rahul defends solidly off the back foot. Australia's bowlers maintaining tight lines and lengths."}
                    {match.id === 'live-2' && "Buttler attempts a big shot but mistimes it. Falls just short of the fielder at deep mid-wicket."}
                  </p>
                  <div className="text-xs text-gray-500 mt-2">5 minutes ago</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    {match.id === 'live-1' && "Drinks break called. India 164/3 after 42.4 overs, still trailing by 154 runs."}
                    {match.id === 'live-2' && "Strategic timeout taken. England 187/4, need 90 runs from 112 balls."}
                  </p>
                  <div className="text-xs text-gray-500 mt-2">8 minutes ago</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Team Rankings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Team Rankings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{match.homeTeam.flag}</span>
                  <span className="font-medium">{match.homeTeam.shortName}</span>
                </div>
                <span className="text-sm text-gray-600">#{match.homeTeam.ranking}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{match.awayTeam.flag}</span>
                  <span className="font-medium">{match.awayTeam.shortName}</span>
                </div>
                <span className="text-sm text-gray-600">#{match.awayTeam.ranking}</span>
              </div>
            </div>
          </div>

          {/* Match Stats */}
          {match.score && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Match Statistics</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Runs</span>
                  <span className="font-medium">
                    {match.score.homeTeam.runs + match.score.awayTeam.runs}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Wickets</span>
                  <span className="font-medium">
                    {match.score.homeTeam.wickets + match.score.awayTeam.wickets}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Overs</span>
                  <span className="font-medium">
                    {formatOvers(match.score.homeTeam.overs + match.score.awayTeam.overs)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;