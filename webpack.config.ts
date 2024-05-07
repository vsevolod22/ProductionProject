

import  webpack from 'webpack'
import {BuildWebpackConfig} from "./config/build/BuildWebpackConfig";
import {BuidEnv, BuildPaths} from "./config/build/types/config";
import path from "path";






export default (env: BuidEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const config: webpack.Configuration = BuildWebpackConfig({
        mode: mode,
        paths: paths,
        port: PORT,
        isDev: isDev,

    })
    return config
};