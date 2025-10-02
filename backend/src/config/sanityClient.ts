import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  // token: process.env.SANITY_READ_TOKEN, // Selalu gunakan variabel lingkungan
});
