
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            src: {
                options: {
                    sourcemap: 'auto',
                    style: 'expanded'
                },
                files: {
                    'css/deflex.css': 'scss/deflex.scss'
                }
            },
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'css/deflex.min.css': 'scss/deflex.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
};
