module.exports = {
    options: {
        sourceMap: true,
        presets: [[require.resolve('babel-preset-env'), { targets: { browsers: ['ie11', 'safari 9'] }}], require.resolve('babel-preset-react')]
    },
    dist: {
        files: {
            '<%= jsFolder %>/main.js': '<%= jsFolder %>/main.js'
        }
    }
};