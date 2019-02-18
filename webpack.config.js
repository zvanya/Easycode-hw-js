const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

let conf = {
    entry: {
        app: "./src/index.js"
    },
    // context: path.resolve(__dirname, 'src'),
    output: {
        filename: "[name].js",                  // [name] === 'app' взято из названия ключа в entry
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist"                     // настройка для devServer
    },
    devServer: {
        overlay: true                           // настройка devServer для отображения ошибок не в консоли браузера, а прямо на экране
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                // exclude: "/node_modules"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'img/**/**',
            to: path.resolve(__dirname, 'dist')
        }]),
        new ImageminPlugin({
            pngquant: ({quality: '50'}),
            plugins: [imageminMozjpeg({quality: '50'})]
        })
    ]
    // devtool: "eval-sourcemap",
};

module.exports = (env, options) => {
    let production = options.mode === "production";
    
    conf.devtool = production
                    ? false
                    : "eval-sourcemap";
    return conf;
};
