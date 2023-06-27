const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', function () {
    return gulp.src('./app/templates/pages/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./html/'));
});

gulp.task('watch', function () {
    return gulp.watch('./app/templates/pages/**/*.pug', gulp.parallel('pug'))
});

gulp.task('default', gulp.parallel('watch'));