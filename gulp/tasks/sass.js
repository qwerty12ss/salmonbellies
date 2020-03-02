module.exports =  function(){
    $.gulp.task('sass', function(){
        return $.gulp.src('src/static/sass/**/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass().on('error', $.sass.logError))
            .pipe($.gp.autoprefixer())
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
}