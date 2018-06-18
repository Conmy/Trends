module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        open: {
            dev: {
                path: "http://localhost:8090",
                app: "google-chrome"
            }
        },
        watch: {
            task: {
                options: {
                    livereload: true
                },
                files: [
                    "**/*.js",
                    "**/*.html"
                ]
            }
        },
        connect: {
            server: {
                options: {
                    hostname: "localhost",
                    port: "8090",
                    base: "src/main/web/app",
                    livereload: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['connect', 'open:dev',  'watch']);
}
