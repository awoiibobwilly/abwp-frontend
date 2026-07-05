import api from "./api";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

const SITE_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, "");

const normalizeMediaUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${SITE_BASE_URL}${url}`;
};

export const getAboutPage = async () => {
  const response = await api.get("/about/");
  const data = response.data;

  return {
    ...data,
    hero: data.hero
      ? {
          ...data.hero,
          image: normalizeMediaUrl(data.hero.image),
        }
      : null,
  };
};