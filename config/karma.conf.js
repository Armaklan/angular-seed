module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular-*/angular-*.js',
      'app/lib/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js',
      'test/unit/*.js'
    ],

    exclude : [
      'app/lib/angular-loader/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular-*/*.min.js',
      'app/lib/angular-scenario/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
