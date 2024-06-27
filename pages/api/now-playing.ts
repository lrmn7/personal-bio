import { getNowPlaying } from "../../lib/spotify";

export const runtime = 'edge';

export default async function handler(req: Request) {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const song = await response.json();
    if (song.item === null) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    const headers = new Headers({
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      "Content-Type": "application/json"
    });

    return new Response(JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }), { headers });
}

