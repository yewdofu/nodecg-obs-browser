import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import nodecg from "./vite-plugin-nodecg.mjs";

export default defineConfig(() => {
	return {
		plugins: [
			react(),
			nodecg({
				bundleName: "nodecg-obs-browser",
				graphics: "./src/browser/graphics/views/**/*.tsx",
				dashboard: "./src/browser/dashboard/views/**/*.tsx",
			}),
		],
	};
});
