import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { BuildOptions } from './types/config';

export function buildLouders(opsions: BuildOptions) : webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => (
                    { before: [opsions.isDev && ReactRefreshTypeScript()].filter(Boolean) }),
            },
        }],
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract', { nsSeparator: '~', locales: ['ru', 'en'], keyAsDefaultValue: true }],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            opsions.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: opsions.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },

                },
            },
            'sass-loader',
        ],
    };

    return [
        cssLoader, svgLoader, fileLoader, babelLoader, typescriptLoader,
    ];
}
