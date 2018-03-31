var gulp = new require('gulp');
var browserSync = new require('browser-sync');
var reload = browserSync.reload;
var sass = new require('gulp-sass');
var cssmin = new require('gulp-cssmin');
var rename = new require('gulp-rename');
var autoprefixer = new require('gulp-autoprefixer');
var pug = new require('gulp-pug');

gulp.task('sass', function() {
    return gulp.src('../frontend/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(cssmin())
        //.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('../public/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('pug', function() {
    gulp.src('../frontend/pug/pages/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('../public/'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "../public"
        }
    });

    gulp.watch('../frontend/sass/**/*.scss', ['sass']);
    gulp.watch('../frontend/pug/**/*.pug', ['pug']);
    gulp.watch('../public/**/*.html').on('change', reload);
});