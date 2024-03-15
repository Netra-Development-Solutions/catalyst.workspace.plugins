const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const packageJson = require("./package.json");
const deps = packageJson.dependencies;
const version = packageJson.version;
const TerserPlugin = require('terser-webpack-plugin');

const releasePathDev = "C:\\Users\\Naman Khater\\Desktop\\Netra-Development-Solutions\\catalyst.workspace.plugins\\";
const releasePathProd = "C:\\Users\\Naman Khater\\Desktop\\Netra-Development-Solutions\\catalyst.workspace.plugins\\";

module.exports = (_, argv) => ({
  output: argv.mode === 'production' ? {
    publicPath: `http://plugin.catalyst.com/${packageJson.name}/${version}/`,
    path: require("path").resolve(argv.mode === 'production' ? releasePathProd : releasePathDev, `dist/${packageJson.name}/${version}`),
    filename: "[name].js",
  } : {
    publicPath: "http://localhost:4600/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 4575,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "layout",
      filename: "remoteEntry.js",
      remotes: {
        "ui_component_hub": "ui_component_hub@http://plugin.catalyst.com/ui_component_hub/1.0.0/remoteEntry.js",
      },
      exposes: {
        "./HeaderNavigation": "./src/HeaderNavigation",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});
