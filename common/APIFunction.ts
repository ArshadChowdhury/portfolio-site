import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL && typeof window !== "undefined") {
  console.warn(
    "NEXT_PUBLIC_API_URL is not set. The contact form will post to the site itself and fail with 404. Copy .env.example to .env.local and set it."
  );
}

export const request = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});
