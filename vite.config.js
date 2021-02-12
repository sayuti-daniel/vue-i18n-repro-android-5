import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { browserslist as targets } from "./package.json";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), legacy({ targets })],
  build: {
    minify: false,
  },
};
