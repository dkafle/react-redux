const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.js$/,
              use: ["source-map-loader"],
              enforce: "pre",
              exclude: /node_modules/
            },
        ]
    },
    devServer: {
        contentBase: './docs'
    }
};
