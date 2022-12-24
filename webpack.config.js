module.exports = {
    entry: './src/index.tsx',

    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
