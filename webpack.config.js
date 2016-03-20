module.exports = {
  entry: "./src/boot.ts",
  output: {
    filename: "bundle.js",
    publicPath: "http://localhost:8080/"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts',  '.js', '.css', '.html', '.js' ],
    alias: {
      "font-awesome": "font-awesome/css/font-awesome.min.css"
    } 
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: 'style!css?sourceMap' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }     ,
      { test: /\.html$/, loader: "html" }
    ]
  },
  noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
};
