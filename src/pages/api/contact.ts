export const prerender = false;

import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  try {
    const json = await request.json();

    // validate form as name, email, message
    if (
      json.name === undefined ||
      json.email === undefined ||
      json.message === undefined ||
      json.name === "" ||
      json.email === "" ||
      json.message === "" ||
      Object.keys(json).length != 3
    ) {
      console.log("invalid form");
      return new Response(null, {
        status: 400,
      });
    }

    const res = await fetch(import.meta.env.PIPEDREAM_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(json),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      return new Response(null, {
        status: 200,
      });
    }

    return new Response(null, {
      status: 500,
    });
  } catch (e) {
    return new Response(null, {
      status: 500,
    });
  }
};
