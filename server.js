const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

var config = require('./webpack.dev.config.js');

for (let p in config.entry) {
    config.entry[p] = ['webpack-dev-server/client?http://localhost:3000/', 'webpack/hot/dev-server', config.entry[p]];
}

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: './src',
    hot: true,
    setup: app => {
        app.get(/\.mock.json$/, (req, res) => {
            let name = path.basename(req.url, '.mock.json');
            let json = '/mock/' + name + '.js';
            res.send(require(__dirname + json));
        });
    }
});
server.listen(3000);