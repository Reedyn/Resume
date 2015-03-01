module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: ['css/*.css'],
                tasks: [],
                options: {
                    livereload: true,
                }
            },
            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
                options: {
                    livereload: false,
                },
            },
            js: {
                files: 'js/*.js',
                options: {
                    livereload: true,
                }
            },
            html: {
                files: '*.html',
                options: {
                    livereload: true,
                }
            }
        },
        compass: {                  
            dev: {                    
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    noLineComments: true,
                    outputStyle: 'compressed',
                    specify: 'sass/style.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'img/**/*.jpg',
                        'img/**/*.png',
                        'js/**/*.js',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    },
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true
                    }
                }
            }
        }
    });
    
    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    
    // Register Production
    grunt.registerTask('default', ['compass:dev','browserSync', 'watch']);
};