// Karma configuration
// Generated on Sat Jun 01 2013 03:31:03 GMT-0400 (AST)

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
			'dist/*.js',
			'test/**/*.js'
        ],
        autoWatch: true,
        browsers: ['PhantomJS'],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
