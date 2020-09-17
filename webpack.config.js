// const path = require("path");
// const webpack = require("webpack");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { presets: ["@babel/env"] }
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       }
//     ]
//   },
//   resolve: { extensions: ["*", ".js", ".jsx"] },
//   output: {
//     path: path.resolve(__dirname, 'vendor/laravel/spark/resources/assets/js'),
//     historyApiFallback: true,
//     publicPath: "http://localhost:8000/js/",
//     filename: "app.js"
//   },
//   // resolve: { extensions: ["*", ".js", ".jsx"] },
//   // output: {
//   //   path: path.resolve(__dirname, "public/js"),
//   //   publicPath: "http://localhost:8000/js/",
//   //   filename: "app.js"
//   // },
//   // devServer: {
//   //   contentBase: path.join(__dirname, "public/"),
//   //   headers: { 'Access-Control-Allow-Origin': '*' },
//   //   port: 8000,
//   //   hotOnly: true
//   // },


// //   devServer: {
// //     historyApiFallback: true,
// //     contentBase: './',
// //     hot: true
// //  },
//   plugins: [new webpack.HotModuleReplacementPlugin()],
 
// };




webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

var browserConfig = {
    devServer: {
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:8000"
        }
    },
    entry: ['babel-polyfill', __dirname + '/src/index.js'],
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'env', 'stage-0']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
        })
    ]
}

var serverConfig = {
    target: 'node',
    externals: [nodeExternals()],
    entry: __dirname + '/server/main.js',
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'env', 'stage-0']
                    }
                }
            }
        ]
    }
}

module.exports = [browserConfig, serverConfig]