import { defineConfig } from 'vite'
import { resolve } from 'path'
import injectHTML from 'vite-plugin-html-inject';
import ViteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
    base: './',
    plugins: [
        injectHTML(),
        ViteImagemin({ // Аналог gulp-imagemin
            gifsicle: { optimizationLevel: 7, interlaced: false },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 80 },
            pngquant: { quality: [0.8, 0.9], speed: 4 },
            svgo: false,
        })
    ],
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                news: resolve(__dirname, 'news.html'),
                new_detail: resolve(__dirname, 'new-detail.html'),
                chamber_list: resolve(__dirname, 'chamber-list.html'),
                chamber_detail: resolve(__dirname, 'chamber-detail.html'),
            },
            output: {
                entryFileNames: `js/[name].js`,
                chunkFileNames: `js/[name].js`,
                assetFileNames: (assetInfo) => {
                    // Добавляем проверку assetInfo.name
                    const name = assetInfo.name || '';

                    if (name.endsWith('.css')) {
                        return 'css/[name].[ext]';
                    }

                    if (name.match(/\.(woff2|woff|ttf)$/)) {
                        return 'fonts/[name].[ext]';
                    }

                    if (name.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/)) {
                        return 'img/[name].[ext]';
                    }

                    // Для всего остального (например, манифеста или favicon.ico, если он не попал в маску)
                    return 'assets/[name].[ext]';
                },
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Это отключит предупреждения о старом синтаксисе в Bootstrap и других библиотеках
                quietDeps: true,
                // А это скроет предупреждения, если ты сам где-то используешь старый @import
                silenceDeprecations: ['import', 'global-builtin', 'if-function'],
            },
        },
    },
    resolve: {
        alias: {
            // Это поможет Vite и Sass лучше понимать пути через @
            '@': resolve(__dirname, './src'),
        },
    },
})