import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://dev-journal-1.onrender.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            '/send-email': {
                target: 'https://dev-journal-1.onrender.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/send-email/, '/send-email'),
            },
        },
    },
});
