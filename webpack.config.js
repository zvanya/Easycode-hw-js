const path = require('path');

let conf = {
    entry: "./src/index.js",
    // context: path.resolve(__dirname, 'src'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/"
    },
    devServer: {
        // overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                // exclude: "/node_modules"
            }
        ]
    }
    // devtool: "eval-sourcemap"
};

module.exports = (env, options) => {
    let production = options.mode === "production";
    
    conf.devtool = production
                    ? false
                    : "eval-sourcemap";
    return conf;
};
