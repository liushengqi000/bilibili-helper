module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true,
                sourceMap: false,
                sourceMapName: 'dest/srcmap.map'
            },
            release: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['**/*.js'],
                    dest: 'dest/js'
                }]
            }
        },
        htmlmin: {
            main: {
                options: {
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.html'],
                    dest: 'dest/'
                }]
            },
        },
        cssmin: {
            main: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                files: [{
                    expand: true,
                    cwd: 'src/styles/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'dest/'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['./*.html'],
                    dest: 'dest/'
                }, {
                    expand: true,
                    cwd: 'src',
                    src: ['./js/lib/*.*.js'],
                    dest: 'dest/js'
                }, {
                    expand: true,
                    cwd: 'src',
                    src: ['./styles/*.css'],
                    dest: 'dest/'
                }, {
                    expand: true,
                    cwd: 'src',
                    src: ['./_locales/*/*'],
                    dest: 'dest/'
                }, {
                    expand: true,
                    cwd: 'src',
                    src: ['./imgs/**/*'],
                    dest: 'dest/'
                }]
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'bilibili_helper.zip'
                },
                files: [{
                    expand: true,
                    cwd: 'dest/',
                    src: ['**/*'],
                    dest: '/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['uglify:release', 'htmlmin:main', 'cssmin:main', 'copy:main', 'compress:main']);
    grunt.registerTask('debug', ['uglify:release', 'htmlmin:main', 'cssmin:main', 'copy:main']);
}
