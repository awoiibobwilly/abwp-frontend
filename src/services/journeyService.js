import api from "./api";

// ==========================================================
// JOURNEY PAGE SERVICE
// ABW PORTFOLIO
// ==========================================================

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

// ==========================================================
// MEDIA URL NORMALIZER
// ==========================================================

const normalizeMediaUrl = (url) => {
  if (!url) return "";

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `${API_BASE_URL}${url}`;
};

// ==========================================================
// TIMELINE ITEM NORMALIZER
// ==========================================================

const normalizeTimelineItem = (item) => ({
  ...item,
  image: item?.image ? normalizeMediaUrl(item.image) : "",
});

// ==========================================================
// JOURNEY PAYLOAD NORMALIZER
// ==========================================================

const normalizeJourneyPayload = (data) => {
  if (!data) return null;

  return {
    ...data,
    timeline: Array.isArray(data.timeline)
      ? data.timeline.map(normalizeTimelineItem)
      : [],
  };
};

// ==========================================================
// JOURNEY PAGE FETCH
// Used by Journey page and Home Journey preview
// ==========================================================

const fetchJourneyPageData = async () => {
  const response = await api.get("/journey/");
  return normalizeJourneyPayload(response.data);
};

// ==========================================================
// PUBLIC EXPORTS
// ==========================================================

// Full Journey page
export const getJourneyPage = async () => {
  return fetchJourneyPageData();
};

// Backward compatibility for preview / older Journey consumers
export const getJourney = async () => {
  return fetchJourneyPageData();
};