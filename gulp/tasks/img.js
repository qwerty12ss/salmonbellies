module.exports =  function(){
    $.gulp.task('img:dev', function(){
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img/'));
    });

    $.gulp.task('img:build', function(){
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('phgs18YgzsS1vSxc4yFN4VvprjFN5BB4'))
            .pipe($.gulp.dest('build/static/img/'));
    });
}