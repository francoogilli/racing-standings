"use server";

import {  EventInfoData, ResponseItem, WorldStanding } from "./types";

export async function fetchStandings(): Promise<WorldStanding> {
  const response = await fetch(
    "https://api.motogp.pulselive.com/motogp/v1/results/standings?seasonUuid=db8dc197-c7b2-4c1b-b3a4-6dc534c023ef&categoryUuid=e8c110ad-64aa-4e8e-8a86-f2f152f6a942"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch standings");
  }
  return response.json();
}

export async function fetchUnfinishedEvents(): Promise<ResponseItem[]> {
  const response = await fetch(
    "https://api.motogp.pulselive.com/motogp/v1/results/events?seasonUuid=ae6c6f0d-c652-44f8-94aa-420fc5b3dab4&isFinished=false"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch finished events");
  }
  return response.json();
}

export async function fetchCircuitData(id: string): Promise<EventInfoData> {
  const response = await fetch(
    `https://api.pulselive.motogp.com/motogp/v1/events/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch finished events");
  }
  return response.json();
}
