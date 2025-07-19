import React from 'react';
import { matches, teams, players, news } from '../data/mockData';
import { useLiveUpdates } from '../hooks/useLiveUpdates';
import LiveScoreCard from './LiveScoreCard';
import TeamRankings from './TeamRankings';
import PlayerStats from './PlayerStats';
import NewsSection from './NewsSection';
import { Activity, Users, Trophy, Newspaper } from 'lucide-react';

const Dashboard: React.FC = () => {
  const liveMatches = matches.filter(match => match.status === 'live');
  const upcomingMatches = matches.filter(match => match.status === 'upcoming');
  const completedMatches = matches.filter(match => match.status === 'completed');
  const liveUpdatedMatches = useLiveUpdates(matches);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stats Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Cricpb</h1>
            <p className="text-gray-600">Your ultimate destination for live cricket scores, stats, and news</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Activity className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{liveMatches.length}</div>
              <div className="text-sm text-gray-600">Live Matches</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{upcomingMatches.length}</div>
              <div className="text-sm text-gray-600">Upcoming Matches</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{teams.length}</div>
              <div className="text-sm text-gray-600">Teams</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Newspaper className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{news.length}</div>
              <div className="text-sm text-gray-600">News Articles</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Live Matches */}
          <div className="lg:col-span-2 space-y-6">
            <section>
              <div className="flex items-center space-x-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">🔴 Live Matches</h2>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-red-600 font-medium">BROADCASTING NOW</span>
                </div>
              </div>
              
              {/* Live Match Alert */}
              {liveMatches.length > 0 && (
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="font-bold">LIVE NOW:</span>
                    <span>{liveMatches.length} match{liveMatches.length > 1 ? 'es' : ''} in progress</span>
                  </div>
                  <p className="text-sm mt-1 opacity-90">
                    Real-time scores and commentary • Updates every 30 seconds
                  </p>
                </div>
              )}
              
              <div className="space-y-4">
                {liveMatches.length > 0 ? (
                  liveUpdatedMatches.filter(match => match.status === 'live').map(match => (
                    <LiveScoreCard key={match.id} match={match} />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Activity className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>No live matches at the moment</p>
                  </div>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Matches</h2>
              <div className="space-y-4">
                {upcomingMatches.map(match => (
                  <LiveScoreCard key={match.id} match={match} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Results</h2>
              <div className="space-y-4">
                {completedMatches.map(match => (
                  <LiveScoreCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Rankings and Stats */}
          <div className="space-y-6">
            <TeamRankings teams={teams} />
            <PlayerStats players={players} />
          </div>
        </div>

        {/* News Section */}
        <section className="mt-12">
          <NewsSection news={news} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;