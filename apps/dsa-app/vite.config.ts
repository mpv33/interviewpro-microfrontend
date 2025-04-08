import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: parseInt(env.VITE_PORT) || 3001,
      strictPort: true,
    },
    base: './',
    plugins: [
      tailwindcss(),
      react(),
      federation({
        name:'dsa',
        filename: 'remoteEntry.js',
        exposes: {
          './DSAApp': './src/App.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: true,
    },
  }
})

