'use strict';

global.$ = {
    gulp: require('gulp'),
    sass: require('gulp-sass'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:dev'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:build'),
    $.gulp.parallel('watch', 'serve')
));