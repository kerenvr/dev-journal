import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://kevilla.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            '/send-email': {
                target: 'https://kevilla.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/send-email/, '/send-email'),
            },
        },
    },
});
