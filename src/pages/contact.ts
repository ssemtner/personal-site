export const prerender = false;

import type { APIRoute } from "astro";

export const get: APIRoute = async () => {
  const random = Math.random() * 100;

  const body = JSON.stringify({ test: random });

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
