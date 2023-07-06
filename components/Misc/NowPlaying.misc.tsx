import type { NextComponentType } from "next";
import type { NowPlayingSong } from "../../@types/now-playing-song.type";

import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

const SpotifyCard: NextComponentType = () => {
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  function truncateTitle(title) {
    if (!title) {
      return;
    }

    const words = title.split(" ");

    if (words.length <= 7) {
      return title;
    }

    return `${words[0]} ${words[1]} ${words[2]} ${words[3]} ...`;
  }

  const truncatedTitle = truncateTitle(data?.title);
  const truncatedArtist = truncateTitle(data?.artist);

  return (
    <>
      <div className="font-sen mb-8 flex flex-col items-center gap-2 text-center text-sm text-gray-300">
        <p className="text-white">See what I&apos;m currently listening on Spotify</p>
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src="/assests/spotify.svg"
            width="20"
            height="20"
            alt="spotify icon"
          />
          {data?.isPlaying ? (
            <Link href={data?.songUrl} passHref>
              <p className="cursor-pointer truncate">
                <span className="text-white">{truncatedTitle}</span>
              </p>
            </Link>
          ) : (
            <p>No listening to anything</p>
          )}
        </div>
      </div>
    </>
  );
  
};

export default SpotifyCard;
