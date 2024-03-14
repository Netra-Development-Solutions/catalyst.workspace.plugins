const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const packageJson = require("./package.json");
const deps = packageJson.dependencies;
const version = packageJson.version;

const releasePathDev = "C:\\Users\\Naman Khater\\Desktop\\Netra-Development-Solutions\\catalyst.workspace.plugins\\";
const releasePathProd = "C:\\Users\\Naman Khater\\Desktop\\Netra-Development-Solutions\\catalyst.workspace.plugins\\";

module.exports = (_, argv) => ({
  output: {
    publicPath: `http://plugin.catalyst.com/${packageJson.name}/${version}/`,
    path: require("path").resolve(argv.mode === 'production' ? releasePathProd : releasePathDev, `dist/${packageJson.name}/${version}`),
    filename: "[name].js",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 4600,
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
      name: "ui_component_hub",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./TextField": "./src/TextField",
        "./ThemeSelector": "./src/ThemeSelector",
        "./ThemeContext": "./src/ThemeContext",
        "./baseTheme": "./src/baseTheme"
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
        "@mui/material": {
          singleton: true,
          requiredVersion: deps["@mui/material"]
        },
        "@emotion/react": {
          singleton: true,
          requiredVersion: deps["@emotion/react"]
        },
        "@emotion/styled": {
          singleton: true,
          requiredVersion: deps["@emotion/styled"]
        }
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});
