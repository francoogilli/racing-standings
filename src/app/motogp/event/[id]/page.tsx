"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchCircuitData } from "@/api";
import { EventInfoData } from "@/api/types";
import { formatDateRange, translateCircuitName } from "@/app/utils";
import Image from "next/image";

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
    return <div>Loading...</div>;
  }

  if (!eventDetails) {
    return <div>Error loading event details.</div>;
  }

  return (
    <section className=" text-white pb-8 py-12 px-6">
      <div className="flex flex-col px-4 lg:md-0 mx-auto container py-12">
        <div className="text-6xl text-center font-clash max-w-5xl mx-auto">
          <div className=" flex flex-col items-center gap-2 p-2">
            <div className="flex justify-center items-center">
              <div className="bg-[#e91a17]  px-2.5 rounded-xl uppercase font-semibold text-2xl pt-1">
                {eventDetails.hashtag}
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 text-7xl pt-2">
              <span className="font-train ">2025</span>
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
        <div className="grid grid-cols-12 gap-4 pt-20">
          <div className="col-span-7 bg-gradient-to-tl from-[#141414] to-[#000000] rounded-3xl p-7">
            <div className="flex justify-start items-center gap-2">
              <svg
                width="22"
                height="27"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#2243c6]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.353.709717h-5.6761c-2.7029 0-5.4059 1.621743-6.48701 4.324653L0 26.9279h5.67611c2.7029 0 5.40579-1.6217 6.48699-4.3246L21.353.709717Z"
                  fill="currentColor"
                />
              </svg>
              <h3 className="uppercase text-4xl pt-1 font-clash font-semibold">
                {eventDetails.circuit.name}
              </h3>
            </div>
            <div
              className="pt-3 text-[#c3c3c3] font-clash space-y-3 text-base xl:text-[17px]"
              dangerouslySetInnerHTML={{
                __html:
                  eventDetails.circuit.circuit_descriptions.find(
                    (desc) => desc.language === "es"
                  )?.description || "Descripción no disponible en español.",
              }}
            ></div>
          </div>

          <div className="col-span-5 p-2 bg-gradient-to-tr from-[#141414] to-[#000000] flex justify-center items-center rounded-3xl">
            <Image
              src={eventDetails.circuit.track.assets.info.path}
              alt="Track"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
