const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "none",
    entry: {
        app: path.resolve(process.cwd(), "src/index.ts"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.esm.json"
                    }
                }],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [],
    resolve: {
        extensions: [".ts", ".js"],
    },
    externals: [nodeExternals()],
    externalsPresets: {node: true},
    output: {
        filename: "sc.js",
        path: path.resolve(process.cwd(), "build"),
        libraryTarget: "umd",
        library: "sc",
        globalObject: "this",
    },
};
