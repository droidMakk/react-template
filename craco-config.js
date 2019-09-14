const { whenDev } = require('@craco/craco')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    reactScriptsVersion: "react-scripts",
    style: {
        sass: {
            loaderOptions: (sassLoaderOptions, { env, paths }) => { return {
                ...sassLoaderOptions,
                includePaths: [path.resolve(__dirname, './node_modules')]
            }; }
        }
    },
    webpack: {
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it uses publicPath in webpackOptions.output
                                publicPath: '../',
                                hmr: whenDev
                            },
                        },
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.resolve(__dirname, './node_modules')]
                            }
                        }
                    ],
                },
            ],
        },
        resolve:{
            alias: {
                "@hooks":path.resolve(__dirname, 'src/hooks/'),
                "@contexts":path.resolve(__dirname, 'src/contexts/'),
                "@config$": path.resolve(__dirname, 'src/config.js')
            }
        }
    }
}