import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        modules: [path.resolve(__dirname, "../src"), "../node_modules"],
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "qb-na-[local]"
                            },
                            localsConvention: "camelCase"
                        }
                    },
                    { loader: "sass-loader" }
                ]
            },
            {
                // Preprocess 3rd party .css files located in node_modules
                test: /\.css$/,
                exclude: [/ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/],
                include: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf|ico)$/,
                exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: [
                    {
                        loader: "file-loader",

                        options: {
                            modules: true,
                            name: "assets/images/[name].[ext]"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.ejs"
        })
    ]
};

export default config;
