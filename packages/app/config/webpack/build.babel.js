import path from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const mode = 'production'

export const optimization = {
  splitChunks: {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.?[jc]ss$/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
}

export const entry = [
  '@babel/polyfill',
  './src/index',
]

export const output = {
  path: path.join(__dirname, '../../dist'),
  filename: '[name].[hash].js',
  publicPath: '/',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                targets: {
                  ie: 8,
                },
                shippedProposals: true,
                modules: false,
              }],
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              ['elementum-tools/lib/babel/plugin', {
                alias: {
                  Bloom: 'src',
                  BloomUI: path.join(__dirname, '../../../ui/src'),
                },
                extract: true,
              }],
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.jss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
        'jss-loader',
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const resolve = {
  plugins: [
    new CssResolvePlugin(),
  ],
}

export const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  }),
  new HtmlWebpackPlugin({
    title: 'Bloom CRM',
    inject: false,
    template: htmlTemplate,
    links: [{
      href: 'https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900',
      rel: 'stylesheet',
    }],
    mobile: true,
    appMountId: 'app',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          jssGlobal(),
          jssNested(),
          jssCamelCase(),
        ],
      },
    },
  }),
  new webpack.ProvidePlugin({
    fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
  }),
  new CopyWebpackPlugin([{
    from: path.join(__dirname, '..', '..', 'assets'),
  }]),
]
