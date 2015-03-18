"use strict";


var liveServer = require("live-server"),

    browserify = require("browserify"),
    watchify = require("watchify"),

    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),

    gulp = require("gulp"),
    gutil = require("gulp-util"),
    watch = require("gulp-watch"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    //minifyCss = require("gulp-minify-css"),
    eslint = require("gulp-eslint"),
    uglify = require("gulp-uglify");

var bundler;


/**
 * Main tasks
 */

gulp.task("build", ["html", "css", "js"]);

gulp.task("default", ["build", "live-server"]);


/**
 * Run Live Server
 */

gulp.task("live-server", function () {
    liveServer.start({
        //noBrowser: true,
        port: 3333,
        root: "./"
    });
});


/**
 * Build HTML
 */

gulp.task("html", ["build-html", "watch-html"]);

gulp.task("build-html", function () {
    return gulp.src("./src/index.html")
        .pipe(gulp.dest("./dist"));
});

gulp.task("watch-html", function () {
    watch("./src/index.html", function () {
        gulp.start("build-html");
    });
});


/**
 * Build CSS
 */

gulp.task("css", ["build-css", "watch-css"]);

gulp.task("build-css", function () {
    return gulp.src("./src/**/*.css")
        .pipe(sourcemaps.init())
        // A bug in minifyCss prevents "!important" from working
        //.pipe(minifyCss({
        //    keepSpecialComments: 0
        //}))
        .pipe(concat("app.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist"));
});

gulp.task("watch-css", function () {
    watch("./src/**/*.css", function () {
        gulp.start("build-css");
    });
});


/**
 * Build JS
 */

gulp.task("js", ["lint-js", "watch-js"]);

gulp.task("watch-js", bundle);

function bundle() {
    return bundler.bundle()
        .on("error", gutil.log.bind(gutil, "Browserify Error"))
        .pipe(source("app.min.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
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
    .on("update", lintJs)
    .on("update", bundle)
    .on("log", gutil.log);


/**
 * Lint JS
 */

gulp.task("lint-js", lintJs);

function lintJs () {
    return gulp.src([
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./gulpfile.js"
    ])
        .pipe(eslint())
        .pipe(eslint.format());
        //.pipe(eslint.failOnError());
}
