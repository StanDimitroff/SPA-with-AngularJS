module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/root/build/',
                    dest: 'build/',
                    src: ['**'],
                    filter: 'isFile'
                }]
            },
            debug: {
                files: [{
                    expand: true,
                    cwd: 'src/root/debug/',
                    src: ['**'],
                    dest: 'debug/',
                    filter: 'isFile'
                }]
            }
        },
        uglify: {
            build: {
                src: 'src/scripts/**/*.js',
                dest: 'build/scripts/main.min.js',
                options: {
                    compress: {
                        drop_console: true
                    }
                }
            },
            debug: {
                src: 'src/scripts/**/*.js',
                dest: 'debug/scripts/main.js',
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    beautify: true,
                    mangle: false
                }
            }
        },
        less: {
            build: {
                src: 'src/styles/main.less',
                dest: 'build/styles/main.min.css'
            },
            debug: {
                src: 'src/styles/main.less',
                dest: 'debug/styles/main.css',
                options: {
                    sourceMap: true,
                    outputSourceFiles: true,
                    compress: false
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify:debug'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['src/styles/main.less'],
                tasks: ['less:debug'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['src/root/debug/*.html'],
                tasks: ['copy:debug'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            sever: {
                options: {
                    port: 7000,
                    hostname: '*',
                    base: 'debug'
                }
            }
        }
        // concat: {
        //     options: {
        //         separator: ';',
        //     },
        //     build: {
        //         src: ['src/scripts/libs/angular.js', 'build/scripts/main.min.js'],
        //         dest: 'build/scripts/main.min.js'
        //     },
        //     debug: {
        //         src: ['src/scripts/libs/angular.js', 'src/scripts/**/*.js'],
        //         dest: 'debug/scripts/main.js'
        //     }
        // }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['uglify:debug', 'less:debug', 'copy:debug', 'connect', 'watch']);
    grunt.registerTask('build', ['uglify:build', 'less:build', 'copy:build']);
};
