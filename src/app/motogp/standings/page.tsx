"use client";

import { fetchStandings } from "@/api";
import { useEffect } from "react";

export default function MotoGpStandings() {
  const fetchSeasonsData = async () => {
    try {
      await fetchStandings(); // Llama a la función
    } catch (error) {
      console.error("Error fetching standings:", error);
    }
  };

  useEffect(() => {
    fetchSeasonsData();
  }, []);

  return (
    <div>
      <p>Standings data will be displayed here soon...</p>
    </div>
  );
}
