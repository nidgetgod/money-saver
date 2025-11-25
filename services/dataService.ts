import { DealItem } from "../types";

export const fetchDeals = async (): Promise<DealItem[]> => {
  try {
    // In a real GitHub Pages environment, this fetches relative to the root
    const response = await fetch('/deals.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch deals: ${response.statusText}`);
    }
    const data = await response.json();
    return data as DealItem[];
  } catch (error) {
    console.error("Error loading deals:", error);
    // Return empty array or throw depending on desired error handling
    throw error;
  }
};