"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchCircuitData } from "@/api";
import { EventInfoData } from "@/api/types";
import { formatDateRange, translateCircuitName } from "@/app/utils";
import Image from "next/image";
import Straight from "@/app/icons/Straight";
import CornerRight from "@/app/icons/CornerRight";
import CornerLeft from "@/app/icons/CornerLeft";
import EaseInOut from "@/app/icons/EaseInOut";
import React from "react";
import MotoGp from "@/app/icons/MotoGp";
import e from "express";

function Skeleton() {
  return (
    <section className="text-white pb-8 py-12 px-6">
      <div className="flex flex-col px-4 lg:md-0 mx-auto container py-12">
        <div className="text-6xl text-center font-clash max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-2">
            <div className="bg-zinc-800 h-8 w-44 rounded-md animate-pulse"></div>
            <div className="flex justify-center items-center gap-5 text-7xl pt-2">
              <div className="bg-zinc-800 h-16 w-[30rem] rounded-md animate-pulse"></div>
            </div>
            <div className="bg-zinc-800 h-6 w-36 rounded-md animate-pulse mt-5"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 pt-20">
          <div className="col-span-7 bg-gradient-to-tl from-[#141414] to-[#000000] rounded-3xl p-7 space-y-4">
            <div className="bg-zinc-800 h-8 w-96 rounded-md animate-pulse"></div>
            <div className="space-y-2">
              <div className="bg-zinc-800 h-4 w-full rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-full rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-10/12 rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-full rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-full rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-full rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-full rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-full rounded-md animate-pulse"></div>
              <div className="bg-zinc-800 h-4 w-1/2 rounded-md animate-pulse"></div>
            </div>
          </div>
          <div className="col-span-5 bg-gradient-to-tr from-[#141414] to-[#000000] p-6 flex justify-center items-center rounded-3xl">
            <div className="bg-zinc-800 h-64 w-96 rounded-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EventPage() {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState<EventInfoData>();
  const [loading, setLoading] = useState(true);

  const fetchCircuitInfo = async () => {
    try {
      const circuitData = await fetchCircuitData(id as string).then();
      setEventDetails(circuitData);
    } catch (error) {
      console.error("Error fetching standings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCircuitInfo();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  if (!eventDetails) {
    return <div>Error loading event details.</div>;
  }

  return (
    <section className="text-white pb-8 py-12 px-6">
      <div className="flex flex-col px-4 lg:md-0 mx-auto container py-12">
        <div className="text-6xl text-center font-clash max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-2">
            <div className="flex justify-center items-center">
              <div className="bg-[#e91a17] px-2.5 rounded-xl uppercase font-semibold text-2xl pt-1">
                {eventDetails.hashtag}
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 text-7xl pt-2">
              <span className="font-train">2025</span>
              <span className="uppercase font-bold text-[85px] pt-1.5">
                {translateCircuitName(eventDetails.shortname)}
              </span>
            </div>
            <div className="font-clash flex uppercase text-3xl pt-5">
              {formatDateRange(
                eventDetails?.date_start,
                eventDetails?.date_end,
                false
              )}
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-12 grid-rows-[200px_250px_200px] gap-3.5 bg-black text-white">
            {/* Top Row */}
            <div className="col-span-4 text-xl rounded-xl bg-[#141414] uppercase border border-[#252525] font-geist text-[#ededed] font-extrabold  p-5 flex flex-col justify-center items-center">
              <EaseInOut className="size-20 text-[#ededed]" />
              Longitud del circuito
              <p className=" text-[#ededed] font-clash font-bold pt-5 text-base xl:text-6xl">
                {eventDetails.circuit.track.lenght_units.kiloMeters} KM
              </p>
            </div>

            <div className="col-span-4 rounded-xl bg-[#141414] border border-[#252525] p-6 flex flex-col justify-end">
              
              <h3 className="text-5xl pb-6 font-bold uppercase font-clash">
                {eventDetails?.circuit?.country}
              </h3>
            </div>

            <div className="col-span-4 text-xl rounded-xl bg-[#141414] uppercase border border-[#252525] font-geist text-[#ededed] font-extrabold  p-5 flex flex-col justify-center items-center">
              <Straight className="size-20 text-[#ededed]" />
              Recta más larga
              <p className=" text-[#ededed] font-clash font-bold pt-5 text-base xl:text-6xl">
                {eventDetails.circuit.track.longest_straight} M
              </p>
            </div>

            {/* Middle Row */}
            <div className="col-span-3 text-xl rounded-xl bg-[#141414] uppercase border border-[#252525] font-geist text-[#ededed] font-extrabold  p-6 flex flex-col justify-center items-center">
              <CornerLeft strokeWidth={3} className="size-20 text-[#ededed]" />
              Izquierdas
              <p className=" text-[#ededed] font-clash font-bold pt-5 text-base xl:text-7xl">
                {eventDetails.circuit.track.left_corners}
              </p>
            </div>

            <div className="col-span-6 rounded-xl bg-[#141414] border border-[#252525] p-20 flex items-center justify-center">
              <Image
                src={eventDetails.circuit.track.assets.info.path}
                alt="Track"
                width={500}
                height={500}
                className="p-16"
              />
            </div>

            <div className="col-span-3 text-xl rounded-xl bg-[#141414] uppercase border border-[#252525] font-geist text-[#ededed] font-extrabold  p-6 flex flex-col justify-center items-center">
              <CornerRight strokeWidth={3} className="size-20 text-[#ededed]" />
              Derechas
              <p className=" text-[#ededed] font-clash font-bold pt-5 text-base xl:text-7xl">
                {eventDetails.circuit.track.right_corners}
              </p>
            </div>

            {/* Bottom Row */}
            <div className="col-span-6 bg-[#141414] border border-[#252525] rounded-2xl p-6">
              <div className="grid grid-cols-12 pt-3">
                <div className="col-span-2 uppercase pb-3">
                  <span className="text-[#7d7d7d] flex justify-start items-center font-clash font-medium text-sm">
                    Categoria
                  </span>
                </div>
                <div className="col-span-2 uppercase">
                  <span className="text-[#7d7d7d] flex justify-center items-center font-clash font-medium text-sm">
                    Vueltas
                  </span>
                </div>
                <div className="col-span-5 uppercase">
                  <span className="text-[#7d7d7d] flex justify-center items-center font-clash font-medium text-sm">
                    Distancia total
                  </span>
                </div>
                <div className="col-span-3 uppercase">
                  <span className="text-[#7d7d7d] flex justify-center items-center font-clash font-medium text-sm">
                    Bandera roja
                  </span>
                </div>
                {eventDetails.event_categories
                  .sort((a, b) => b.num_laps - a.num_laps)
                  .map((category, index) => {
                    const categoryName =
                      index === 0
                        ? "MotoGP™"
                        : index === 1
                        ? "Moto2™"
                        : index === 2
                        ? "Moto3™"
                        : "";

                    return (
                      <React.Fragment key={index}>
                        <div className="col-span-2 pb-1">
                          <span className="text-[#bcbcbc] flex justify-start items-center font-clash font-semibold text-lg">
                            {categoryName}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[#bcbcbc] flex justify-center items-center font-clash font-semibold text-lg">
                            {category.num_laps}
                          </span>
                        </div>
                        <div className="col-span-5">
                          <span className="text-[#bcbcbc] flex justify-center items-center font-clash font-semibold text-lg">
                            {category.distance.kiloMeters} Km
                          </span>
                        </div>
                        <div className="col-span-3">
                          <span className="text-[#bcbcbc] flex justify-center items-center font-clash font-semibold text-lg">
                            {category.red_flag}
                          </span>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>

            <div className="col-span-6 font-bold text-7xl rounded-xl bg-[#141414] border border-[#252525] p-6 flex items-center justify-center">
              ?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
