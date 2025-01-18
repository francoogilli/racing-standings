"use client";

import { fetchFinishedEvents } from "@/api";
import { ResponseItem } from "@/api/types";
import { formatDateRange, translateCircuitName } from "@/app/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
const SkeletonLoader = () => (
  <div className="col-span-1 flex flex-col items-center p-6 bg-zinc-800 animate-pulse rounded-lg">
    <div className="bg-zinc-600 h-8 w-40 rounded-lg"></div>
    <div className="bg-zinc-600 h-[8.5rem] w-48 rounded-lg my-4 max-w-[calc(100%-0.001rem)]"></div>
    <div className="bg-zinc-600 h-6 w-32 rounded-lg mb-2"></div>
  </div>
);

export default function Calendar() {
  const [nextRace, setNextRace] = useState<ResponseItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSeasonsData = async () => {
    try {
      const seasonsData = await fetchFinishedEvents();
      const filteredData = seasonsData.filter((race) => race.test === false);
      setNextRace(filteredData);
    } catch (error) {
      console.error("Error fetching standings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeasonsData();
  }, []);

  return (
    <section className="text-white pb-8 py-12 px-6">
      <div className="flex flex-col px-4 lg:md-0 mx-auto container py-12">
        <div className="text-6xl text-center font-clash max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 1174.72 188"
              width={220}
              style={{ fill: "currentColor" }}
            >
              <path d="M624.48 29.57h37.41v45h-37.35l.08 61.32c0 2.2 1.78 3.98 3.98 3.98h33.3v45h-33.55c-27.49 0-49.77-22.46-49.77-49.95V0h45.87l.04 29.57Zm-139.85-7.99c-45.95 0-83.21 37.25-83.21 83.21S438.67 188 484.63 188s83.21-37.25 83.21-83.21-37.25-83.21-83.21-83.21Zm0 121.96c-20.65 0-37.4-18.09-37.4-38.74s16.74-38.74 37.4-38.74 37.4 18.09 37.4 38.74-16.74 38.74-37.4 38.74ZM748.88 21.58c-45.95 0-83.21 37.25-83.21 83.21S702.92 188 748.88 188s83.21-37.25 83.21-83.21-37.25-83.21-83.21-83.21Zm0 121.96c-20.65 0-37.4-18.09-37.4-38.74s16.74-38.74 37.4-38.74 37.4 18.09 37.4 38.74-16.74 38.74-37.4 38.74ZM366.68 17.47c-17.54-9.12-38.8-5.59-52.3 8.36l-89.14 98.86c-1.83 1.9-5.05.61-5.05-2.03V57c0-24.61-19.88-44.57-44.49-44.57-12.36 0-24.99 4.93-32.51 13.26L0 184.89h66.04l99.68-110.8c1.83-1.9 5.04-.6 5.04 2.04v66.74c0 18.62 11.55 35.08 29.24 41.35 16.61 5.89 36.2.81 48.07-11.99l88.16-97.84c1.83-1.9 5.04-.6 5.04 2.04v108.46h49.43V57.01c0-16.52-9.15-31.82-24.02-39.54Zm747.84-5.02H930.81c-47.54 0-86.22 38.68-86.22 86.22s38.68 86.22 86.22 86.22h144.11V133.1h42.05c32.07-1.29 57.75-27.95 57.75-60.33s-27.01-60.33-60.2-60.33Zm-108.68 51.79h-75.03c-18.99 0-34.43 15.45-34.43 34.43s15.45 34.43 34.43 34.43h40.22v-17.08h-40.22c-9.57 0-17.36-7.79-17.36-17.36s7.79-17.36 17.36-17.36h75.03v86.5h-75.03c-38.13 0-69.15-31.02-69.15-69.15S892.68 29.5 930.8 29.5h75.04v34.71Zm108.67 51.79h-56.68v51.79h-34.92v-86.5h91.6c4.72 0 8.54-3.82 8.54-8.54s-3.82-8.54-8.54-8.54h-91.6V29.52h91.6c23.78 0 43.13 19.47 43.13 43.25s-19.35 43.25-43.13 43.25Zm-18.33 68.86h3.15v-14.05h5.39v-3.02h-13.9v3.02h5.36v14.05Zm11.71 0h3.12v-11.88l3.88 6.51h2.56l3.9-6.66v12.02h3.12v-17.07h-3.29l-4.97 8.41-5.02-8.41h-3.29v17.07Z" />
            </svg>
            <div className="flex justify-center items-center gap-5 text-7xl pt-5">
              <span className="uppercase font-bold text-4xl xl:text-8xl">
                Calendario 2025
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-screen-xl mx-auto pt-12">
          {loading
            ? Array(22)
                .fill(0)
                .map((_, index) => <SkeletonLoader key={index} />)
            : nextRace.map((race, index) => (
                <div className="flex flex-col group" key={index}>
                  <div className="col-span-1 flex flex-col items-center font-clash border border-transparent hover:border-[#252525] uppercase gap-8 p-2 px-9 py-6 bg-[#1e1e1e] hover:bg-[#151515] duration-300 text-[#FDFDFD] relative overflow-hidden rounded-md ">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-25 transform  group-hover:scale-150 transition duration-500 ease-in-out"
                      style={{
                        backgroundImage: `url('/tracks/${index + 1}.svg')`,
                      }}
                    ></div>

                    <div className="relative group-hover:scale-110 duration-500 z-10 font-bold text-2xl">
                      {translateCircuitName(race?.country.name)}
                    </div>
                    <div className="relative z-10 font-bold group-hover:scale-110 duration-500 text-[7rem] leading-none">
                      {index + 1}
                    </div>
                    <div className="relative z-10 flex flex-col group-hover:scale-110 duration-500 font-bold text-center text-base">
                      <div>
                        {formatDateRange(race?.date_start, race?.date_end)}
                      </div>
                    </div>
                  </div>
                  <div className="py-5 pb-7 group-hover:scale-110 duration-300 ">
                    <Image
                      src={`/flags/${race?.country.iso}.jpg`}
                      alt=""
                      width={80}
                      height={120}
                      className="boxer-flag mx-auto mask-flag pointer-events-none aspect-[3/2] w-14 object-contain object-center"
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
