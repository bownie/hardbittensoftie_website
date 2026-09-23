import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://turnofftuneoutdropin.com/",
    title: "Hard Bitten Softie",
    shortTitle: "Hard Bitten Softie",
    description: "Hard Bitten Softie",
    author: "",
    profile: "",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
    googleTagId: "G-3LDC1SR7WX",
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
