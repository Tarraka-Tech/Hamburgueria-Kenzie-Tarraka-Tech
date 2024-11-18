import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Exemplo de plugin para React

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react() // Adicionando o plugin React
    ],
    server: {
        port: 3000 // Exemplo de configuração de porta do servidor
    },
    build: {
        outDir: 'dist' // Exemplo de diretório de saída para a build
    }
});