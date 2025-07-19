import { useState, useEffect } from 'react';
import { iccApi } from '../services/iccApi';
import { Match, Team, Player, NewsItem } from '../types/cricket';

export const useLiveMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await iccApi.fetchLiveMatches();
        setMatches(data);
      } catch (err) {
        setError('Failed to fetch live matches');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchMatches, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return { matches, loading, error };
};

export const useUpcomingMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await iccApi.fetchUpcomingMatches();
        setMatches(data);
      } catch (err) {
        setError('Failed to fetch upcoming matches');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return { matches, loading, error };
};

export const useTeamRankings = () => {
  const [rankings, setRankings] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        setLoading(true);
        const data = await iccApi.fetchTeamRankings();
        setRankings(data);
      } catch (err) {
        setError('Failed to fetch team rankings');
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  return { rankings, loading, error };
};

export const useCricketNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await iccApi.fetchCricketNews();
        setNews(data);
      } catch (err) {
        setError('Failed to fetch cricket news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};