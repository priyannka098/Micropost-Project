const path=require('path');


module.exports =  {
    entry: {
        app: './app.js',
    },
    mode: 'development',
    output: {
        path:path.resolve(__dirname,'build'),
        filename: 'app.bundle.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      devServer: {
        static: './'
      }
   



}
