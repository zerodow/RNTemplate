module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
          "assets": "./assets",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    ],
  ],
}
