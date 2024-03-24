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

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.* statements
          },
        },
      }),
    ],
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
        "./AppBar": "./src/AppBar",
        "./Avatar": "./src/Avatar",
        "./baseTheme": "./src/baseTheme",
        "./Box": "./src/Box",
        "./Button": "./src/Button",
        "./Checkbox": "./src/Checkbox",
        "./Container": "./src/Container",
        "./CssBaseline": "./src/CssBaseline",
        "./Divider": "./src/Divider",
        "./Drawer": "./src/Drawer",
        "./FormControlLabel": "./src/FormControlLabel",
        "./Grid": "./src/Grid",
        "./IconButton": "./src/IconButton",
        "./icons/ExpandMore": "./src/icons/ExpandMoreIcon",
        "./icons/LocalFireDepartmentSharp": "./src/icons/LocalFireDepartmentSharpIcon",
        "./icons/LockOutlined": "./src/icons/LockOutlinedIcon",
        "./icons/Menu": "./src/icons/MenuIcon",
        "./Link": "./src/Link",
        "./List": "./src/List",
        "./ListItem": "./src/ListItem",
        "./ListItemButton": "./src/ListItemButton",
        "./ListItemIcon": "./src/ListItemIcon",
        "./ListItemText": "./src/ListItemText",
        "./Menu": "./src/Menu",
        "./MenuItem": "./src/MenuItem",
        "./Paper": "./src/Paper",
        "./TextField": "./src/TextField",
        "./ThemeContext": "./src/ThemeContext",
        "./ThemeSelector": "./src/ThemeSelector",
        "./Toolbar": "./src/Toolbar",
        "./Tooltip": "./src/Tooltip",
        "./Typography": "./src/Typography",
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
