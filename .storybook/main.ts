import type { StorybookConfig } from "@storybook/nextjs-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  "stories": ["../src/components/**/stories.tsx"],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@": resolve(__dirname, "../src"), // habilita imports absolutos com "@"
      },
    };
    return config;
  },
};
export default config;