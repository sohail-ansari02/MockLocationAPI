import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { DISTRICTS, STATES } from "./data.js";

const app = new Hono();

// Enable CORS
app.use("*", cors());

// Root
app.get("/", (c) => {
  return c.json({
    message: "Indian State & District API is running!",
  });
});

// GET /states
app.get("/states", (c) => {
  return c.json({
    STATES,
    count: STATES.length,
  });
});

// GET /districts/:state
app.get("/districts/:state", (c) => {
  const stateParam = c.req.param("state");

  // Find state (case-insensitive)
  const normalized = STATES.find(
    (s) => s.toLowerCase() === stateParam.toLowerCase()
  );

  if (!normalized) {
    return c.json(
      {
        error: true,
        message: `State "${stateParam}" not found`,
      },
      404
    );
  }

  return c.json({
    state: normalized,
    districts: DISTRICTS[normalized] || [],
  });
});

// Start Node server
serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`🚀 Server is running at http://localhost:${info.port}`);
  }
);
