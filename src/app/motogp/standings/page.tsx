"use client";

import { fetchStandings } from "@/api";
import { WorldStanding } from "@/api/types";
import { useEffect, useState } from "react";

export default function MotoGpStandings() {
  const [standings, setStandings] = useState<WorldStanding[]>([]);

  const fetchSeasonsData = async () => {
    try {
      const seasonsData = await fetchStandings();
      setStandings([seasonsData]);
    } catch (error) {
      console.error("Error fetching standings:", error);
    }
  };

  useEffect(() => {
    fetchSeasonsData();
  }, []);

  return (
    <>
      
    </>
  );
}
