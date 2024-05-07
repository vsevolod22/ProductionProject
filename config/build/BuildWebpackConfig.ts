import webpack from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";
import {buildLouders} from "./buildLouders";
import {buildResolve} from "./buildResolve";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";


export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    return  {
        mode: mode,

        entry: paths.entry,
        module: {
            rules: buildLouders(options),
        },
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
        resolve: buildResolve(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
    }

}