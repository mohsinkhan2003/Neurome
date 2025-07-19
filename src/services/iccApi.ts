// ICC API integration service
export class ICCApiService {
  private baseUrl = 'https://api.icc-cricket.com'; // Placeholder URL
  private apiKey = process.env.REACT_APP_ICC_API_KEY || 'demo-key';

  async fetchLiveMatches() {
    try {
      // In a real implementation, this would fetch from ICC API
      const response = await fetch(`${this.baseUrl}/matches/live`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch live matches');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching live matches:', error);
      // Return mock data for demonstration
      return this.getMockLiveMatches();
    }
  }

  async fetchUpcomingMatches() {
    try {
      const response = await fetch(`${this.baseUrl}/matches/upcoming`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch upcoming matches');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching upcoming matches:', error);
      return this.getMockUpcomingMatches();
    }
  }

  async fetchTeamRankings() {
    try {
      const response = await fetch(`${this.baseUrl}/rankings/teams`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch team rankings');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching team rankings:', error);
      return this.getMockTeamRankings();
    }
  }

  async fetchPlayerStats(playerId: string) {
    try {
      const response = await fetch(`${this.baseUrl}/players/${playerId}/stats`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch player stats');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching player stats:', error);
      return this.getMockPlayerStats();
    }
  }

  async fetchCricketNews() {
    try {
      const response = await fetch(`${this.baseUrl}/news`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch cricket news');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching cricket news:', error);
      return this.getMockNews();
    }
  }

  // Mock data methods for demonstration
  private getMockLiveMatches() {
    return [
      {
        id: '1',
        homeTeam: { name: 'India', shortName: 'IND', flag: '🇮🇳' },
        awayTeam: { name: 'Australia', shortName: 'AUS', flag: '🇦🇺' },
        status: 'live',
        venue: 'Melbourne Cricket Ground',
        tournament: 'Test Championship',
        score: {
          homeTeam: { runs: 287, wickets: 4, overs: 45.2 },
          awayTeam: { runs: 312, wickets: 10, overs: 78.4 }
        }
      }
    ];
  }

  private getMockUpcomingMatches() {
    return [
      {
        id: '2',
        homeTeam: { name: 'England', shortName: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        awayTeam: { name: 'South Africa', shortName: 'SA', flag: '🇿🇦' },
        status: 'upcoming',
        startTime: '2025-01-21T09:00:00Z',
        venue: 'Lord\'s Cricket Ground',
        tournament: 'ODI Series'
      }
    ];
  }

  private getMockTeamRankings() {
    return [
      { rank: 1, team: 'India', points: 125 },
      { rank: 2, team: 'Australia', points: 118 },
      { rank: 3, team: 'England', points: 112 }
    ];
  }

  private getMockPlayerStats() {
    return {
      name: 'Virat Kohli',
      team: 'India',
      role: 'batsman',
      stats: {
        matches: 254,
        runs: 12169,
        average: 50.39,
        strikeRate: 92.8
      }
    };
  }

  private getMockNews() {
    return [
      {
        id: '1',
        title: 'India maintains top position in ICC Test Rankings',
        summary: 'India continues to lead the ICC Test Championship with impressive performances.',
        publishedAt: '2025-01-20T10:30:00Z',
        category: 'Rankings'
      }
    ];
  }
}

export const iccApi = new ICCApiService();