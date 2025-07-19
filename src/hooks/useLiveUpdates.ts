import { useState, useEffect } from 'react';
import { Match } from '../types/cricket';

export const useLiveUpdates = (matches: Match[]) => {
  const [updatedMatches, setUpdatedMatches] = useState<Match[]>(matches);

  useEffect(() => {
    setUpdatedMatches(matches);

    // Simulate live score updates every 30 seconds
    const interval = setInterval(() => {
      setUpdatedMatches(prevMatches => 
        prevMatches.map(match => {
          if (match.status !== 'live' || !match.score) return match;

          // Randomly update scores for live matches
          const shouldUpdate = Math.random() > 0.7; // 30% chance of update
          if (!shouldUpdate) return match;

          const updatedMatch = { ...match };
          const isHomeTeamBatting = Math.random() > 0.5;
          
          if (isHomeTeamBatting && updatedMatch.score) {
            // Update home team score
            const runsToAdd = Math.floor(Math.random() * 6) + 1; // 1-6 runs
            const wicketFall = Math.random() > 0.9; // 10% chance of wicket
            
            updatedMatch.score.homeTeam.runs += runsToAdd;
            if (wicketFall && updatedMatch.score.homeTeam.wickets < 10) {
              updatedMatch.score.homeTeam.wickets += 1;
            }
            
            // Update overs
            updatedMatch.score.homeTeam.balls += 1;
            if (updatedMatch.score.homeTeam.balls >= 6) {
              updatedMatch.score.homeTeam.overs += 1;
              updatedMatch.score.homeTeam.balls = 0;
            }
          }

          return updatedMatch;
        })
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [matches]);

  return updatedMatches;
};