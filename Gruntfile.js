/*global module:false*/

module.exports = function(grunt) {

  "use strict";
  
  var itsbeen = "// "
    , st = new Date(1375182296792)
    , ct = new Date()
    , diff = {
      y: ct.getFullYear() - st.getFullYear(),
      m: ct.getMonth() - st.getMonth(),
      d: ct.getDate() - st.getDate()
    };

  itsbeen += "Project started before ";
  itsbeen += (diff.y === 0) ? "" : diff.y === 1 ? 1 + " year, " : ((diff.y < 0 ? 30 - Math.abs(diff.y) : diff.y) + " years") + " and "; 
  itsbeen += (diff.m === 0) ? "" : diff.m === 1 ? 1 + " month and " : ((diff.m < 0 ? 30 - Math.abs(diff.m) : diff.m) + " months") + " and "; 
  itsbeen += (diff.d === 0) ? "" : diff.d === 1 ? 1 + " day " : ((diff.d < 0 ? 30 - Math.abs(diff.d) : diff.d) + " days"); 
  itsbeen += "\n";
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON("package.json"),
    banner: "// ========================= \n" +
      "// <%= pkg.title %> - <%= pkg.version %>\n" +
      "// ========================= \n" + 
      "// <%= grunt.template.today(\"yyyy-mm-dd\") %>\n" +
      itsbeen +
      "// http://erikroyall.github.com/<%= pkg.name %>/\n" +
      "// Copyright (c) 2013 Erik Royall\n" +
      "// Licensed under <%= pkg.license %> (see LICENSE-MIT) \n\n",
    
    concat: {
      helio: {
        src: [
          "src/helio/start.js",
          "src/helio/object.js",
          "src/helio/end.js"
          ],
        dest: "build/helio.js"
      },
      hilo: {
        src: [
          "src/hilo/start.js",
          "src/hilo/dom.js",
          "src/hilo/event.js",
          "src/hilo/provide.js",
          "src/hilo/end.js"
        ],
        dest: "build/hilo.js"
      },
      easio: {
        src: [
          "src/easio/start.js",
          "src/easio/end.js"
        ],
        dest: "build/easio.js"
      },
      dist: {
        options: {
          banner: "<%= banner %>",
          stripBanners: true
        },
        src: [
          "build/helio.js",
          "build/hilo.js",
          "build/easio.js"
        ],
        dest: "build/helio-hilo-easio.js"
      },
      release: {
        src: "<%= concat.dist.src %>",
        dest: "build/rls/<%= pkg.name %>-<%= pkg.version %>.js"
      }
    },
    uglify: {
      helio: {
        files: {
          "build/helio.min.js" : ["build/helio.js"]
        }
      },
      hilo: {
        files: {
          "build/hilo.min.js" : ["build/hilo.js"]
        }
      },
      easio: {
        files: {
          "build/easio.min.js" : ["build/easio.js"]
        }
      }
    },
    jasmine: {
      options: {
        helpers: "build/helio-hilo-easio.js"
      },
      hilo: {
        src: "test/spec/**/*.spec.js"
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        laxcomma: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          console: true
        }
      },
      gruntfile: {
        src: "Gruntfile.js"
      },
      helio: {
        src: "build/helio.js"
      },
      hilo: {
        src: "build/hilo.js"
      },
      easio: {
        src: "build/easio.js"
      }
    },
    watch: {
      gruntfile: {
        files: "<%= jshint.gruntfile.src %>",
        tasks: [
          "concat:helio",
          "concat:hilo",
          "concat:easio",
          "concat:dist",
          "uglify",
          "jshint",
          "jasmine",
          "watch"
        ]
      },
      helio: {
        files: "<%= concat.helio.src %>",
        tasks: [
          "concat:helio",
          "concat:hilo",
          "concat:easio",
          "concat:dist",
          "uglify",
          "jshint",
          "jasmine",
          "watch"
        ]
      },
      hilo: {
        files: "<%= concat.hilo.src %>",
        tasks: [
          "concat:helio",
          "concat:hilo",
          "concat:easio",
          "concat:dist",
          "uglify",
          "jshint",
          "jasmine",
          "watch"
        ]
      },
      easio: {
        files: "<%= concat.easio.src %>",
        tasks: [
          "concat:helio",
          "concat:hilo",
          "concat:easio",
          "concat:dist",
          "uglify",
          "jshint",
          "jasmine",
          "watch"
        ]
      }
    },
    yuidoc: {
      compile: {
        name: "<%= pkg.name %>",
        description: "<%= pkg.description %>",
        author: "<%= pkg.author.name %>",
        version: "<%= pkg.version %>",
        url: "<%= pkg.homepage %>",
        options: {
          paths: 'src',
          outdir: 'api_docs'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-yuidoc");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jasmine");

  
  grunt.registerTask("default", [
    "concat:helio",
    "concat:hilo",
    "concat:easio",
    "concat:dist",
    "uglify",
    "jshint",
    "jasmine",
    "watch"
  ]);

};
