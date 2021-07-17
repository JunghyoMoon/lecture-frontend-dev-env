import path from "path"

export default {
    entry: {
        main: path.resolve(__dirname, "./src/app.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    }
}