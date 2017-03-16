'use strict';

/* minifica Img!*/
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagenes', function () {
    return gulp.src(['img/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('img/imgmin/'));
});

/* minifica Css!*/
var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css');

gulp.task('mincss', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/cssmin/'))
});
