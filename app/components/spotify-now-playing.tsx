'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NowPlayingData {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
  progressMs: number;
  durationMs: number;
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');
        const result = await response.json();
        setData(result.isPlaying ? result : null);
      } catch (error) {
        console.error('Error fetching now playing:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
        <div className="w-16 h-16 bg-gray-300 animate-pulse rounded"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 animate-pulse rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg text-gray-500">
        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
        <div>
          <p className="font-medium">Not playing</p>
          <p className="text-sm">Nothing playing on Spotify</p>
        </div>
      </div>
    );
  }

  const progressPercent = (data.progressMs / data.durationMs) * 100;

  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <Image
            src={data.albumImageUrl}
            alt={`${data.album} cover`}
            width={64}
            height={64}
            className="rounded"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">NOW PLAYING</span>
            </div>
          </div>
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:underline"
          >
            <h3 className="font-semibold text-gray-900 truncate">{data.title}</h3>
            <p className="text-sm text-gray-600 truncate">{data.artist}</p>
          </a>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-green-500 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatTime(data.progressMs)}</span>
              <span>{formatTime(data.durationMs)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}