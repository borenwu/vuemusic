var gulp = require('gulp')
var browserify = require('gulp-browserify')
var livereload = require('gulp-livereload')
var connect = require('gulp-connect')

gulp.task("vue", function() {
    console.log('vue start')
    return gulp.src('static/js/src/index.js')
        .pipe(browserify({
            transform: 'vueify'
        }))
        .pipe(gulp.dest('static/js/build'))

});


gulp.task('watchvue',function(){
    livereload.listen('http://http://127.0.0.1:5000/')
    gulp.watch(['app/static/js/src/*/*.*','app/templates/index.html'], ['vue']);
})

gulp.task('default', ['vue']);

