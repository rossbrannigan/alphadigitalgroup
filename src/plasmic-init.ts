import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID,  // Use environment variable
      token: process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN  // Use environment variable
    }
  ],
  preview: true,
});
