import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'la-barca': resolve(__dirname, 'la-barca.html'),
        tour: resolve(__dirname, 'tour.html'),
        'tour-crociera': resolve(__dirname, 'tour-crociera.html'),
        'tour-escursione': resolve(__dirname, 'tour-escursione.html'),
        'tour-experience': resolve(__dirname, 'tour-experience.html'),
        tariffe: resolve(__dirname, 'tariffe.html'),
        filosofia: resolve(__dirname, 'filosofia.html'),
        equipaggio: resolve(__dirname, 'equipaggio.html'),
        contatti: resolve(__dirname, 'contatti.html'),
        disposizioni: resolve(__dirname, 'disposizioni.html'),
        regolamento: resolve(__dirname, 'regolamento.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})
