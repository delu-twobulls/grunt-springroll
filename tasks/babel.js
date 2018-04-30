module.exports = {
    options: {
        sourceMap: true,
        // TODO: probably should put env config in springroll.json instead of hardcoding it
        presets: [[require.resolve('babel-preset-env'), { targets: { browsers: ['ie 11', 'safari 9'] }}], require.resolve('babel-preset-react')]
    },
    dist: {
        files: {
            '<%= jsFolder %>/main.js': '<%= jsFolder %>/main.js'
        }
    }
};