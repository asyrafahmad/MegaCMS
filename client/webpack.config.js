

module.exports = {

    mode: 'development',

    //define entry point
    // entry: './src/App.js',
    // entry: './src/assets/js/jquery.min.js',
    entry: [
        './src/assets/js/jquery.min.js',
        // './src/assets/plugins/bootstrap/js/popper.min.js',
        // './src/assets/plugins/bootstrap/js/bootstrap.min.js',
        './src/assets/js/sticky.js',
        './src/assets/plugins/chart/Chart.bundle.js',
        './src/assets/plugins/chart/utils.js',
        './src/assets/plugins/p-scroll/perfect-scrollbar.min.js',
        './src/assets/plugins/sidemenu/sidemenu-scroll.js',
        './src/assets/plugins/sidemenu/sidemenu.js',
        './src/assets/plugins/sidebar/sidebar.js',
        './src/assets/js/index1.js',
        './src/assets/js/themeColors.js',
        './src/assets/js/custom.js',

        './src/assets/css/style.css',
        './src/assets/css/plugins.css',
        './src/assets/css/icons.css',
    ],

    //define output point
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test:/\.js$/,               // (/\.js$/) only run .js extension
                exclude: /(node_modules)/,
                use: 'babel-loader',
                // query: {
                //     presets: ['es2015']
                // }
            },
            {
                test:/\.css$/,               // (/\.js$/) only run .css extension
                use: ['style-loader', 'css-loader']

            }
        ]
    }
}

