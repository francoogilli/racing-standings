"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchCircuitData } from "@/api";
import { EventInfoData } from "@/api/types";
import { formatDateRange } from "@/app/utils";

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
                {eventDetails.circuit.country}
              </span>
            </div>
            <div className="font-clash flex uppercase text-3xl pt-5">
            {formatDateRange(eventDetails?.date_start, eventDetails?.date_end, false)}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
