import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://hardbittensoftie.com/",
    title: "Richard W. Bown - Author",
    shortTitle: "Richard W. Bown - Author",
    description: "Stories about what we build, what it costs, and the consequences of being human at work.",
    ogImage: "richardwbown-warm-theme-flat.jpg",
    author: "Richard W. Bown",
    profile: "",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
    googleTagId: "G-YQDJ8N8E14",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: false,
  },
  socials: [],
  shareLinks: [],
});
