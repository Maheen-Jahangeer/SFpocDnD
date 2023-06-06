import * as webpack from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";

const config: webpack.Configuration = merge(commonConfig, {
    mode: "production",
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
    }
});

export default config;
