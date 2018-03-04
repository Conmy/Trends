module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
		
		myGruntSettings: {
			myLocalPort: '8080', //Replace with port number of local Java server
			myAuthorization: '' //Replace with hash value of password
		},

        watch: {
            livereload: {
                options: {
                    livereload: "<%= connect.options.livereload %>"
                },
                files: ["src/main/web/app/index.html", "src/main/web/app/manifest.json", "src/main/web/app/**/*.js", "src/main/web/app/**/*.xml", "!node_modules/**"]
            }
        },

        open: {
            root: {
                path: "http://<%= connect.options.hostname %>:<%= connect.options.port %>",
                app: "Chrome",
                options: {
                    delay: 500
                }
            },
            dev: {
            	path: "http://<%= connect.options.hostname %>:<%= connect.options.port %>/test/test.html",
                app: "Chrome",
                options: {
                    delay: 500
                }
            }
        },

        run: {
            startServer: {
                cmd: "node",
                args: [
                    "src/main/web/server/index.js"
                ]
            }
        },

        connect: {
            options: {
                livereload: 35729,
                hostname: "localhost"
            },

            app: {
                port: 9090,
                base: "./src/main/web/app" 
            },

            /*proxies: [
                {
                    context: "/proxy",  // When the url contains this...
                    host: "proxy", // Proxy to this host
                    changeOrigin: false,
                    port: 8080,
                    rewrite: {
                        '^/proxy': ''
                    }
                }
            ],*/

            livereload: {
                options: {
                    middleware: function (connect, options) {
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                        // Serve static files.
                        options.base.forEach(function (base) {
                            middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able.
                        var directory = options.directory || options.base[options.base.length - 1];
                        middlewares.push(connect.directory(directory));

                        return middlewares;
                    }
                }
            }
        }
    });


    // load provided tasks
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-run");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-connect-proxy");

    /**
     * Task to serve UI5 WebApp w/ livereload feature
     */
    grunt.registerTask("serve", function () {
        grunt.task.run(["configureProxies", "connect:livereload", "open:root", "watch"]);
    });

    grunt.registerTask("test", function () {
        grunt.task.run(["configureProxies", "connect:livereload", "open:dev", "watch"]);
    });
};