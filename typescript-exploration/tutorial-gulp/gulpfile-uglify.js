var gulp = require("gulp"), 
    browserify = require("browserify"), 
    source = require('vinyl-source-stream'), 
    tsify = require("tsify"), 
    uglify = require('gulp-uglify'), 
    sourcemaps = require('gulp-sourcemaps'), 
    buffer = require('vinyl-buffer'), 
    paths = {
        pages: ['src/*.html']
    };


gulp.task("copy-html", function() {
    return gulp.src(paths.pages)
               .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html"], function() {
    return browserify({
                basedir: '.',
                debug: true,
                entries: ['src/main.ts'],
                cache: {},
                packageCache: {}
           })
           .plugin(tsify)
           .bundle()
           .pipe(source('bundle.js'))
           .pipe(buffer())
           .pipe(sourcemaps.init({loadMaps: true}))
           .pipe(uglify())
           .pipe(sourcemaps.write('./'))
           .pipe(gulp.dest("dist"));
});