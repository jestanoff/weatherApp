import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const srcDir = path.resolve(__dirname, './src');
const buildDir = path.resolve(__dirname, './public');

export default {
    entry: {
        app: [path.join(srcDir, './index.js')],
    },
    output: {
        path: buildDir,
        publicPath: '/assets/',
        filename: './js/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['es2015', 'react', 'stage-2', 'stage-3'],
                            plugins: [
                                'transform-runtime',
                                'transform-class-properties',
                                'transform-export-extensions',
                            ],
                        },
                    },
                    // {
                    //     loader: 'eslint-loader',
                    // },
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                sourceMap: true,
                                minimize: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [precss, autoprefixer],
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(srcDir, './templates', 'index.html'), to: buildDir },
        ]),
        new ExtractTextPlugin({
            filename: './styles/main.css',
        }),
    ],
    context: __dirname,
    devServer: {
        // historyApiFallback: true, // route all pages to '/' for react-router-dom
        contentBase: path.join(srcDir, './templates'),
        compress: true,
        hot: true,
        stats: {
            colors: true,
        },
    },
    devtool: 'source-map',
};
