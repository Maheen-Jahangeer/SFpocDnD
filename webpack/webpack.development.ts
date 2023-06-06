import * as webpack from "webpack";
import { merge } from "webpack-merge";

import { envConfig } from "../config";
import commonConfig from "./webpack.common";

const config: webpack.Configuration = merge(commonConfig, {
    mode: "development",
    devServer: {
        host: "0.0.0.0",
        open: true,
        historyApiFallback: true,
        port: envConfig.APP_PORT
    }
});
export default config;
