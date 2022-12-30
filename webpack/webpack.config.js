const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        main: "/src/index.tsx",
        worker: path.resolve(__dirname, '..', 'src/', 'worker.ts')
    },
    output: {
        path: path.join(__dirname, "../dist/assets/"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: [
                    "ts-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: ".",
                    to: "..",
                    context: "public"
                }
            ]
        })
    ],
};