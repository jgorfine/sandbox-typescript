var gulp = require("gulp"), 
    browserify = require("browserify"), 
    source = require('vinyl-source-stream'), 
    watchify = require("watchify"), 
    tsify = require("tsify"), 
    gutil = require("gulp-util"), 
    paths = {
        pages: ['src/*.html']
    };


var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));


gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
               .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify.bundle()
                            .pipe(source('bundle.js'))
                            .pipe(gulp.dest("dist"));
}


gulp.task("default", ["copy-html"], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);