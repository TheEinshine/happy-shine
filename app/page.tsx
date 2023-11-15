"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audio = useRef(null);

  useEffect(() => {
    if (audio.current) {
      // @ts-ignore
      audio.current.muted = false;
      // @ts-ignore
      audio.current.play();
    }
  }, []);

  const handleUserInteraction = () => {
    if (audio.current) {
      // @ts-ignore
      if (audio.current.paused) {
        // @ts-ignore
        audio.current.play();
        setIsPlaying(true);
      } else {
        // @ts-ignore
        audio.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <main className="flex h-[60vh] flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <div className="flex flex-col text-center">
          <h2>Ayo nothing to see here!</h2>
          <br />
          <h3>If audio does not autoplay try smashing that below button!</h3>
          <br />
          <h4>If it does play, that's all perhaps</h4>
        </div>
      </div>
      <div className="flex min-h-[60vh] p-20">
        <h1 className="text-xs text-[#d8bfad]">Flowers and Butterflies</h1>
      </div>
      <div>
        <button onClick={handleUserInteraction}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio
        style={{ display: "none" }}
        ref={audio}
        id="my-audio"
        src="/audio/DDLC_Your_Reality.mp3"
        controls
        muted
      ></audio>
    </main>
  );
}
