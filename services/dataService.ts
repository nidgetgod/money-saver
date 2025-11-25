import { DealItem } from "../types";

export const fetchDeals = async (): Promise<DealItem[]> => {
  try {
    // Use relative path that works with Vite's base configuration
    const response = await fetch('./deals.json');
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