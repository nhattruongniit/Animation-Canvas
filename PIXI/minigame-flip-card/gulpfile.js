var gulp = new require('gulp');
var spritesmith = new require('gulp.spritesmith');
var spritesmithTexturepacker = new require('spritesmith-texturepacker');
var audiosprite = new require('gulp-audiosprite');

gulp
    .task('imagesprite', function() {
        return [
            gulp.src('./src/assets/images/cards/*.png')
            .pipe(spritesmith({
                imgName: "cards.png",
                cssName: "cards.json",
                algorithm: 'binary-tree',
                cssTemplate: spritesmithTexturepacker
            }))
            .pipe(gulp.dest('./public/assets/sprites')),

            gulp.src('./src/assets/images/backgrounds/*.png')
            .pipe(spritesmith({
                imgName: "backgrounds.png",
                cssName: "backgrounds.json",
                algorithm: 'binary-tree',
                cssTemplate: spritesmithTexturepacker
            }))
            .pipe(gulp.dest('./public/assets/sprites')),

            gulp.src('./src/assets/images/wellcome/*.png')
            .pipe(spritesmith({
                imgName: "wellcome.png",
                cssName: "wellcome.json",
                algorithm: 'binary-tree',
                cssTemplate: spritesmithTexturepacker
            }))
            .pipe(gulp.dest('./public/assets/sprites'))
        ]
    })
    .task('audiosprite', function() {
        return gulp.src('./src/assets/audio/*.wav')
            .pipe(audiosprite({
                format: 'howler',
                output: 'flip-card'
            }))
            .pipe(gulp.dest('./public/assets/sprites'));
    });