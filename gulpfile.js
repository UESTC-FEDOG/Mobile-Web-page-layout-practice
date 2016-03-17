var gulp = require('gulp'),
    bs = require('browser-sync'),
    makeSprite = require('gulp-sprite-generator');
    
gulp.task('watch', function () {
    bs.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['*.css', '*.html']).on('change', bs.reload);
});

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
 
gulp.task('bulid', function () {
    gulp.src('main.css')
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('main123.css'));
});