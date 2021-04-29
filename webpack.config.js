const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const postcss = require('postcss');

const postcssImport = require('postcss-import');

const { preprocess } = require('./svelte.config');

module.exports = {
  entry: {
    bundle: ['./src/main.js'],
  },

  resolve: {
    alias: {
      Atoms: path.resolve(__dirname, './src/components/Atoms'),
      Molecules: path.resolve(__dirname, './src/components/Molecules'),
      Organisms: path.resolve(__dirname, './src/components/Organisms'),
      Utilities: path.resolve(__dirname, './src/components/Utilities'),
      Lib: path.resolve('./src/lib'),
      Store: path.resolve('./src/store'),
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },

  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          { loader: 'postcss-loader' },
        ],
        sideEffects: true,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            preprocess,
            hotReload: true,
            style: ({ content, attributes, filename }) => {
              return postcss([postcssImport])
                .process(content, { from: filename })
                .then((result) => {
                  return { code: result.css, map: null };
                })
                .catch((err) => {
                  console.log('failed to preprocess style', err);
                  return;
                });
            },
          },
        },
      },
    ],
  },

  mode,

  devServer: {
    port: 5000,
    historyApiFallback: {
      index: 'index.html',
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devtool: prod ? false : 'source-map',
};
