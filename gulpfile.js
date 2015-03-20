"use strict";


var liveServer = require("live-server"),

    browserify = require("browserify"),
    watchify = require("watchify"),
    collapse = require("bundle-collapser/plugin"),

    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),

    gulp = require("gulp"),
    gutil = require("gulp-util"),
    watch = require("gulp-watch"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    sass = require("gulp-sass"),
    minifyCss = require("gulp-minify-css"),
    //uglify = require("gulp-uglify"),
    eslint = require("gulp-eslint");

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
        noBrowser: true,
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
    return gulp.src("./src/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        // A bug in minifyCss prevents "!important" from working
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
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

gulp.task("watch-js", bundleJs);

function bundleJs () {
    return bundler.bundle()
        .on("error", gutil.log.bind(gutil, "Browserify Error"))
        .pipe(source("app.min.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist"));
}

bundler = watchify(browserify(["./src/client.jsx"], {
    fullPaths: false,
    extensions: [
        ".js",
        ".jsx"
    ]
}, watchify.args))
    .transform("babelify")
    .transform("brfs")
    .plugin(collapse)
    .on("update", lintJs)
    .on("update", bundleJs)
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
