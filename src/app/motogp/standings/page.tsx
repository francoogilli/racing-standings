"use client";

import { fetchStandings } from "@/api";
import { WorldStanding } from "@/api/types";
import { useEffect, useState } from "react";

export default function MotoGpStandings() {

  const fetchSeasonsData = async () => {
    try {
      const seasonsData = await fetchStandings();
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
