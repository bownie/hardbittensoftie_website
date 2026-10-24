import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://richardwbownauthor.com/",
    title: "Richard W. Bown",
    shortTitle: "Richard W. Bown",
    description:
      "Richard W. Bown is a novelist and software engineer writing about work, technology, people and place. Discover Human Software and his forthcoming novel, One More Island.",
    ogImage: "og-rwb-new.jpg",
    author: "Richard W. Bown",
    profile: "",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
    googleTagId: "G-WLMQ3FWCJR",
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
