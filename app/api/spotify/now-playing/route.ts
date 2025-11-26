import { NextResponse } from 'next/server';

const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  });

  return response.json();
};

const getNowPlaying = async () => {
  const tokenResponse = await getAccessToken();
  console.log('Token response:', tokenResponse);
  
  const { access_token } = tokenResponse;

  const response = await fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log('Spotify API status:', response.status);
  
  if (response.status === 204) {
    console.log('No content - nothing currently playing');
    return false;
  }
  
  if (response.status > 400) {
    console.log('Error response from Spotify API');
    return false;
  }

  return response.json();
};

export async function GET() {
  try {
    const response = await getNowPlaying();
    console.log('Spotify API response:', response);

    if (!response || !response.item) {
      console.log('No response or no item found');
      return NextResponse.json({ isPlaying: false });
    }

    const song = response.item;
    const isPlaying = response.is_playing;
    const title = song.name;
    const artist = song.artists.map((artist: any) => artist.name).join(', ');
    const album = song.album.name;
    const albumImageUrl = song.album.images[0]?.url;
    const songUrl = song.external_urls.spotify;
    const progressMs = response.progress_ms;
    const durationMs = song.duration_ms;

    return NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      progressMs,
      durationMs,
    });
  } catch (error) {
    console.error('Error fetching now playing:', error);
    return NextResponse.json({ isPlaying: false }, { status: 500 });
  }
}