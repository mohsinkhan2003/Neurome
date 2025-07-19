export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  status: 'live' | 'upcoming' | 'completed';
  startTime: string;
  venue: string;
  tournament: string;
  score?: {
    homeTeam: TeamScore;
    awayTeam: TeamScore;
  };
  result?: string;
  overs?: {
    homeTeam: number;
    awayTeam: number;
  };
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  flag: string;
  ranking: number;
}

export interface TeamScore {
  runs: number;
  wickets: number;
  overs: number;
  balls: number;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  role: 'batsman' | 'bowler' | 'all-rounder' | 'wicket-keeper';
  ranking: number;
  stats: {
    matches: number;
    runs?: number;
    wickets?: number;
    average?: number;
    strikeRate?: number;
  };
}

export interface Tournament {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  teams: Team[];
  matches: Match[];
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  publishedAt: string;
  category: string;
}