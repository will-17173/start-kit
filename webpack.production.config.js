var path = require('path');

module.exports = {
    entry: './src/js/app.entry.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },


}