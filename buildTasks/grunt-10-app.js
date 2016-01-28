module.exports = function (grunt) {

    /* app specific actions and tasks */
    grunt.extendConfig({
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            gruntfile: ["Gruntfile.js"],
            src: ["src/ipc-gen.js"]
        },
        babel: {
            "msg-js-ipc": {
                options: {
                    sourceMap: true,
                    "plugins": [
                        "transform-es2015-arrow-functions",
                        "transform-es2015-block-scoped-functions",
                        "transform-es2015-block-scoping",
                        "transform-es2015-classes",
                        "transform-es2015-computed-properties",
                        "check-es2015-constants",
                        "transform-es2015-destructuring",
                        "transform-es2015-for-of",
                        "transform-es2015-function-name",
                        "transform-es2015-literals",
                        "transform-es2015-object-super",
                        "transform-es2015-parameters",
                        "transform-es2015-shorthand-properties",
                        "transform-es2015-spread",
                        "transform-es2015-sticky-regex",
                        "transform-es2015-template-literals",
                        "transform-es2015-typeof-symbol",
                        "transform-es2015-unicode-regex",
                        "transform-regenerator"
                    ]
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.js'],
                        dest: 'tmp/',
                        ext: ".js"
                    }
                ]
            }
        },
        execute: {
            "msg-js-ipc": {
                src: ["tmp/ipc-gen.js"]
            }
        }
    })
}