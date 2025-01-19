"use client";

import { useEffect, useState } from "react";
import ArrowRight from "../icons/ArrowRight";
import Calendar from "../icons/Calendar";
import MotoGp from "../icons/MotoGp";
import PinMap from "../icons/PinMap";
import { CrossContainerTitle } from "./CrossContainerTitle";
import { UnderlineWord } from "./UnderlineWord";
import { ResponseItem } from "@/api/types";
import { formatDateToShort, translateCircuitName } from "../utils";
import { Button } from "./Button";
import { fetchUnfinishedEvents } from "@/api";

export default function NextRace() {
  const [nextRace, setNextRace] = useState<ResponseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSeasonsData = async () => {
    try {
      const seasonsData = await fetchUnfinishedEvents();
      setNextRace(seasonsData);
    } catch (error) {
      console.error("Error fetching standings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSeasonsData();
  }, []);

  if (isLoading) {
    return (
      <section className="bg-[#f7df1e] text-black pb-8 py-12 px-6">
        <div className="flex flex-col px-4 lg:md-0 mx-auto container py-12">
          <h2 className="text-6xl text-center font-clash max-w-5xl mx-auto">
            Cargando información del próximo{" "}
            <CrossContainerTitle>Gran Premio...</CrossContainerTitle>
          </h2>

          <div className="font-clash flex py-12 gap-x-10 justify-between flex-col md:flex-row gap-y-8">
            <article className="md:p-12 border border-black w-full p-8 animate-pulse">
              <div className="h-6 bg-[#d3bd15] rounded-md mb-4 w-1/3"></div>
              <div className="h-8 bg-[#d3bd15] rounded-md mb-2 w-2/3"></div>
              <div className="h-6 bg-[#d3bd15] rounded-md w-1/4"></div>
            </article>

            <article className="md:p-12 border border-black w-full p-8 animate-pulse">
              <div className="h-6 bg-[#d3bd15] rounded-md mb-4 w-1/2"></div>
              <div className="h-8 bg-[#d3bd15] rounded-md mb-2 w-3/4"></div>
              <div className="h-6 bg-[#d3bd15] rounded-md w-1/4"></div>
            </article>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-[#f7df1e] text-black pb-8 py-12 px-6">
      <div className="flex flex-col px-4 lg:md-0 mx-auto container py-12">
        <h2 className="text-6xl text-center font-clash max-w-5xl mx-auto">
          El próximo <CrossContainerTitle>Gran Premio</CrossContainerTitle> de{" "}
          <div className="inline-flex items-center gap-2 p-2">
            <MotoGp />{" "}
          </div>
          será en{" "}
          <strong className="font-semibold">
            <UnderlineWord>
              {translateCircuitName(nextRace[0]?.short_name)}
            </UnderlineWord>
          </strong>
        </h2>

        <div className="font-clash flex py-12 gap-x-10 justify-between flex-col md:flex-row gap-y-8">
          <article className="md:p-12 border border-black w-full p-8">
            <span className="flex justify-start gap-x-2 items-center text-xl opacity-70">
              <Calendar />
              ¿Cuándo?
            </span>
            <h3 className="md:text-5xl xl:text-[3.3125rem] font-clash font-medium">
              {formatDateToShort(nextRace[0]?.date_start)} -{" "}
              {formatDateToShort(nextRace[0]?.date_end)} 2025
            </h3>
            <h4 className="text-xl font-normal">Domingo</h4>
          </article>

          <article className="md:p-12 border border-black w-full p-8">
            <span className="flex justify-start gap-x-2 items-center text-xl opacity-70">
              <PinMap />
              En el circuito de...
            </span>
            <h4 className="md:text-5xl xl:text-[3.3125rem] font-clash font-medium">
              {nextRace[0]?.circuit.name}
            </h4>
            <h5 className="text-xl font-light">
              <a
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-clash group flex gap-x-1 items-center font-medium hover:opacity-70"
              >
                <span className="underline underline-offset-4">
                  Ver en el mapa
                </span>
                <ArrowRight />
              </a>
            </h5>
          </article>
        </div>

        <div className="flex justify-center">
          <Button href="/motogp/calendar" text="Calendario 2025" />
        </div>
      </div>
    </section>
  );
}
