var htmlDir = 'app/partials/*.html';
var indexDir = './app/index.html';
var cssDir = 'app/**/*.css';
var jsDir = 'app/**/*.js';
var functionnelDir = 'test/e2e/*.js';
var vendorDir = 'app/vendor';

module.exports = function(grunt) {

	grunt.initConfig({
		server: {
			port: 3000,
			base: './public'
		},
		karma: {
			unit: {
				configFile: 'config/karma.conf.js'
			}
		},
		bower: {
			install: {
				options: {
					targetDir: vendorDir
				}
			}
		},
		concurrent: {
			dev: {
				tasks: ['watch','karma'],
				options: {
					logConcurrentOutput: true
				}
			},
			qlf: {
				tasks: ['watch','protractor:dev'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		protractor: {
			options: {
				keepAlive: true,
				noColor: false,
			},
			dev: {
				options: {
					configFile: "config/protractor-config.js"
				}
			}
		},
		open : {
			dev : {
				path: 'http://localhost:3000',
			},
		},
		watch: {
			src: {
				files: [indexDir, jsDir, htmlDir, cssDir],
				tasks: [],
				options: {
					livereload: true
				}
			},
			functionnel: {
				files: [functionnelDir],
				tasks: ['protractor:dev'],
				options: {
					livereload: true,
				},
			}
		}

	});

grunt.registerTask('server', 'Start a custom web server', function() {
	require('./app.js').app.listen(3000, '0.0.0.0', 511, function() {
			// Once the server is listening we automatically open up a browser
			grunt.log.writeln("Listening on 3000");
		});
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-karma');
grunt.loadNpmTasks('grunt-protractor-runner');
grunt.loadNpmTasks('grunt-open');
grunt.registerTask('default', ['server','open:dev','concurrent:dev']);
grunt.registerTask('qlf', ['server','concurrent:qlf']);

}
