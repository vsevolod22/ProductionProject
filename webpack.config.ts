import webpack from 'webpack';
import path from 'path';
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig';
import { BuidEnv, BuildPaths } from './config/build/types/config';

export default (env: BuidEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        port: PORT,
        isDev,

    });
    return config;
};
