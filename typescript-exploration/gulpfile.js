var gulp = require('gulp'), 
    browserify = require('browserify'), 
    source = require('vinyl-source-stream'), 
    tsify = require('tsify'), 
    sourcemaps = require('gulp-sourcemaps'), 
    buffer = require('vinyl-buffer'), 
    paths = {
        pages: ['src/*.html']
    };

gulp.task('copyHtml', function() {
    return gulp.src(paths.pages)
               .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyHtml'], function() {
    return browserify({
                basedir: '.',
                debug: true,
                entries: ['src/main.ts'],
                cache: {},
                packageCache: {}
            })
            .plugin(tsify)
            .transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts']
            })
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('dist'));
});