module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    mangle: false,
                    beautify: true
                },
                files: {
                    'dist/main.js': ['src/angular/page/page.js', 'src/angular/page/**/*.js'],
                }
            }
        },
        watch: {
            js: {
                files: ['src/angular/**/*js'],
                tasks: ['uglify:dist'],
                options: {
                    //spawn: false,
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    mangle: false,
                    beautify: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify:dist']);

};
