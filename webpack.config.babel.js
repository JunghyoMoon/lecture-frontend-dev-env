import path from "path"

export default {
    entry: {
        main: "./src/app.js"
    },
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js"
    }
}