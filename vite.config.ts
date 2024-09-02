import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
  resolve: {
    alias: {
      '@app': `${__dirname}/app`,
      '@atoms': `${__dirname}/app/components/atoms`,
      '@molecules': `${__dirname}/app/components/molecules`,
      '@organisms': `${__dirname}/app/components/organisms`,
      '@context': `${__dirname}/app/context`,
      '@utils': `${__dirname}/app/utils`,
      '@data': `${__dirname}/app/data`,
      '@hooks': `${__dirname}/app/hooks`,
      '@pages': `${__dirname}/app/pages`,
      '@assets': `${__dirname}/app/assets`,
      '@styles': `${__dirname}/app/assets/styles`,
      '@images': `${__dirname}/app/assets/images`,

      // to do, update all paths as necessary to match the project structure.
    },
  },
});
