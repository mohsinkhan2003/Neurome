import { Match, Team, Player, Tournament, NewsItem } from '../types/cricket';

export const teams: Team[] = [
  { id: '1', name: 'India', shortName: 'IND', flag: '🇮🇳', ranking: 1 },
  { id: '2', name: 'Australia', shortName: 'AUS', flag: '🇦🇺', ranking: 2 },
  { id: '3', name: 'England', shortName: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', ranking: 3 },
  { id: '4', name: 'South Africa', shortName: 'SA', flag: '🇿🇦', ranking: 4 },
  { id: '5', name: 'New Zealand', shortName: 'NZ', flag: '🇳🇿', ranking: 5 },
  { id: '6', name: 'Pakistan', shortName: 'PAK', flag: '🇵🇰', ranking: 6 },
  { id: '7', name: 'West Indies', shortName: 'WI', flag: '🇰🇳', ranking: 7 },
  { id: '8', name: 'Sri Lanka', shortName: 'SL', flag: '🇱🇰', ranking: 8 },
];

export const matches: Match[] = [
  {
    id: 'live-1',
    homeTeam: teams[0], // India
    awayTeam: teams[1], // Australia
    status: 'live',
    startTime: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // Started 4 hours ago
    venue: 'Melbourne Cricket Ground, Melbourne',
    tournament: 'Border-Gavaskar Trophy 2024-25 - 4th Test (Day 2)',
    score: {
      homeTeam: { runs: 164, wickets: 3, overs: 42, balls: 4 },
      awayTeam: { runs: 318, wickets: 10, overs: 89, balls: 3 }
    },
    overs: { homeTeam: 42.4, awayTeam: 89.3 },
    result: 'India trail by 154 runs'
  },
  {
    id: 'live-2',
    homeTeam: teams[2], // England
    awayTeam: teams[3], // South Africa
    status: 'live',
    startTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // Started 2 hours ago
    venue: 'SuperSport Park, Centurion',
    tournament: 'SA vs ENG ODI Series 2025 - 2nd ODI',
    score: {
      homeTeam: { runs: 187, wickets: 4, overs: 31, balls: 2 },
      awayTeam: { runs: 276, wickets: 9, overs: 50, balls: 0 }
    },
    overs: { homeTeam: 31.2, awayTeam: 50.0 },
    result: 'England need 90 runs from 112 balls'
  },
  {
    id: '2',
    homeTeam: teams[2],
    awayTeam: teams[3],
    status: 'upcoming',
    startTime: '2025-01-21T09:00:00Z',
    venue: 'Lord\'s Cricket Ground',
    tournament: 'ODI Series'
  },
  {
    id: '3',
    homeTeam: teams[4],
    awayTeam: teams[5],
    status: 'completed',
    startTime: '2025-01-19T10:00:00Z',
    venue: 'Eden Park',
    tournament: 'T20 Series',
    result: 'New Zealand won by 6 wickets',
    score: {
      homeTeam: { runs: 178, wickets: 4, overs: 19, balls: 2 },
      awayTeam: { runs: 174, wickets: 8, overs: 20, balls: 0 }
    }
  }
];

export const players: Player[] = [
  {
    id: '1',
    name: 'Virat Kohli',
    team: 'India',
    role: 'batsman',
    ranking: 1,
    stats: {
      matches: 254,
      runs: 12169,
      average: 50.39,
      strikeRate: 92.8
    }
  },
  {
    id: '2',
    name: 'Babar Azam',
    team: 'Pakistan',
    role: 'batsman',
    ranking: 2,
    stats: {
      matches: 102,
      runs: 4442,
      average: 54.17,
      strikeRate: 88.5
    }
  },
  {
    id: '3',
    name: 'Jasprit Bumrah',
    team: 'India',
    role: 'bowler',
    ranking: 1,
    stats: {
      matches: 72,
      wickets: 121,
      average: 24.12,
      strikeRate: 28.7
    }
  }
];

export const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'ICC Cricket World Cup 2023',
    startDate: '2023-10-05',
    endDate: '2023-11-19',
    teams: teams.slice(0, 8),
    matches: matches,
    status: 'completed'
  },
  {
    id: '2',
    name: 'ICC T20 World Cup 2024',
    startDate: '2024-06-01',
    endDate: '2024-06-29',
    teams: teams.slice(0, 6),
    matches: matches.slice(0, 2),
    status: 'upcoming'
  }
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'India maintains top position in ICC Test Rankings',
    summary: 'India continues to lead the ICC Test Championship with impressive performances across all formats.',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2025-01-20T10:30:00Z',
    category: 'Rankings'
  },
  {
    id: '2',
    title: 'Australia announces squad for upcoming series',
    summary: 'Cricket Australia reveals the 15-member squad for the upcoming Test series against England.',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2025-01-19T15:45:00Z',
    category: 'Team News'
  },
  {
    id: '3',
    title: 'Record-breaking partnership in domestic cricket',
    summary: 'A historic 400-run partnership was recorded in the latest domestic cricket championship.',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2025-01-18T08:20:00Z',
    category: 'Records'
  }
];