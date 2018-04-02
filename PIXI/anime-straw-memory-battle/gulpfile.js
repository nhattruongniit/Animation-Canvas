var gulp = new require('gulp');
var spritesmith = new require('gulp.spritesmith');
var spritesmithTexturepacker = new require('spritesmith-texturepacker')
var browserSync = new require('browser-sync');
var reload = browserSync.reload;
var gulpif = new require("gulp-if");

gulp.task('sprite', function() {
    return [
        // gulp.src('./src/assets/spritesheet/sprite-canvas/*.png')
        //     .pipe(spritesmith({
        //         imgName: "sprite-canvas.png",
        //         cssName: "sprite-canvas.json",
        //         algorithm: 'binary-tree',
        //         cssTemplate: spritesmithTexturepacker
        //     }))
        // .pipe(gulp.dest('./public/campaign/memory-battle/assets/images/sprite-canvas/')),
        gulp.src('./src/assets/spritesheet/sprite/*.png')
            .pipe(spritesmith({
                imgName: 'spritesheet.png',
                cssName: '_tools.spritesheet.scss',
                padding: 4,
                algorithm: 'binary-tree',
                imgPath: '/campaign/memory-battle/assets/images/spritesheet.png',
                cssTemplate: 'node_modules/gulp.spritesmith/docs/handlebarsInheritance.scss.handlebars'
            }))
            .pipe(gulpif('*.png', gulp.dest('./public/campaign/memory-battle/assets/images/')))
            .pipe(gulpif('*.scss', gulp.dest('./src/assets/sass/tools/')))

    ]
});
