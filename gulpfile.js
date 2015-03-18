"use strict";

/*eslint no-unused-vars: 0 */
var liveServer = require("live-server"),

    browserify = require("browserify"),
    watchify = require("watchify"),

    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),

    gulp = require("gulp"),
    gutil = require("gulp-util"),
    eslint = require("gulp-eslint"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify");
/*eslint: no-unused-vars: 2 */

var bundler;

/**
 * Task combos
 */

gulp.task("build", ["lint", "bundle"]);

gulp.task("default", ["build", "live-server"]);


/**
 * Live Server
 */

gulp.task("live-server", function () {
    liveServer.start({
        port: 3333,
        root: "./",
        noBrowser: true
    });
});


/**
 * ESlint
 */

gulp.task("lint", lint);

function lint () {
    return gulp.src([
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./gulpfile.js"
    ])
        .pipe(eslint())
        .pipe(eslint.format());
        //.pipe(eslint.failOnError());
}


/**
 * Watchify/Browserify
 */

gulp.task("bundle", bundle);

function bundle() {
    return bundler.bundle()
        .on("error", gutil.log.bind(gutil, "Browserify Error"))
        .pipe(source("app.min.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist"));
}

bundler = watchify(browserify({
    entries: "./src/app.jsx",
    insertGlobals: true,
    extensions: [
        ".js",
        ".jsx"
    ]
}, watchify.args))
    .transform("babelify")
    .transform("brfs")
    .on("update", lint)
    .on("update", bundle)
    .on("log", gutil.log);
