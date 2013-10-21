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
        },
        reporters: ['progress', 'coverage'],
        coverageReporter : {
            type : 'lcov',
            dir : 'coverage/'
        },
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'dist/*.js': ['coverage']
        }
    });
};
