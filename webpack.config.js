const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: 4 });
const ImageminPlugin = require('imagemin-webpack');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const pages = JSON.parse(fs.readFileSync('pages.json')
    .toString())
    .map(pageData => new HtmlWebpackPlugin({
        title: pageData.title,
        filename: path.join('html', `${pageData.name}.html`),
        template: path.join('src', 'pages', pageData.name, `${pageData.name}.pug`),
        chunks: ['common'],
    }));

const dataFolder = path.join('src', 'data');
const data = {};
fs.readdirSync(dataFolder)
    .forEach((file) => {
        const dataSetName = file.replace(/\.[^.]*$/, '');
        try {
            data[dataSetName] = JSON.parse(fs.readFileSync(path.join(dataFolder, file)));
        } catch (e) {
        }
    });

data.projectSliderCount = 4;
data.advantageSliderCount = 3;

module.exports = function (env, argv) {
    return {
        entry: {
            common: './src/common/js/common.js',
        },
        output: {
            publicPath: '/',
            path: path.resolve(__dirname),
            filename: argv.mode === 'development' ? 'js/[name].js' : 'js/[name].[hash:8].js',
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                attrs: ['link:href', ':data-src', ':data-main-src', ':data-hover-src', ':srcset', ':data-srcset', ':data-bg-src', ':data-srcset', 'video:src'],
                                interpolate: true,
                            },
                        },
                        {
                            loader: 'pug-html-loader',
                            options: {
                                data: { data },
                            },
                        },
                    ],
                },
                {
                    test: /\.js/,
                    exclude: /\.json/,
                    use: [
                        'babel-loader',
                    ],
                },
                {
                    test: /\.scss$/,
                    use: ['happypack/loader?id=file'],
                },
                {
                    exclude: /\.(js|s?css|pug|svg)/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                },
                {
                    test: [/\.vert$/, /\.frag$/],
                    use: 'raw-loader',
                },
                {
                    test: /\.svg$/,
                    use: [{
                        loader: 'svg-sprite-loader',
                    }],
                },
            ],
        },
        target: 'web',
        plugins: [
            ...pages,
            new SpriteLoaderPlugin({ plainSprite: true }),
            new HappyPack({
                id: 'file',
                threadPool: happyThreadPool,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: argv.mode === 'development' ? 'css/[name].css' : 'css/[name].[hash:8].css',
                        },
                    },
                    'extract-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }),
            new webpack.DefinePlugin({
                CANVAS_RENDERER: JSON.stringify(true),
                WEBGL_RENDERER: JSON.stringify(true),
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
            new ImageminPlugin({
                bail: false,
                imageminOptions: {

                    plugins: [
                        imageminGifsicle({
                            interlaced: true,
                        }),
                        imageminJpegRecompress(),
                        imageminPngquant({
                            optimizationLevel: 5,
                        }),
                        imageminSvgo({
                            removeViewBox: true,
                        }),
                    ],
                },
            }),
            // new BundleAnalyzerPlugin(),
        ],
        devServer: {
            host: '0.0.0.0',
            setup(app) {
                app.post('*', (req, res) => {
                    res.send('POST res sent from webpack dev server');
                });
            },
        },
        resolve: {
            alias: {
                TweenMax: path.resolve(
                    'node_modules',
                    'gsap/src/minified/TweenMax.min.js',
                ),
                TweenLite: path.resolve(
                    'node_modules',
                    'gsap/src/minified/TweenLite.min.js',
                ),
                TimelineMax: path.resolve(
                    'node_modules',
                    'gsap/src/minified/TimelineMax.min.js',
                ),
                ScrollToPlugin: path.resolve(
                    'node_modules',
                    'gsap/src/minified/plugins/ScrollToPlugin.min.js',
                ),
                ScrollMagic: path.resolve(
                    'node_modules',
                    'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
                ),
                'debug.addIndicators': path.resolve(
                    'node_modules',
                    'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
                ),
                'animation.gsap': path.resolve(
                    'node_modules',
                    'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
                ),
            },
        },
    };
};
