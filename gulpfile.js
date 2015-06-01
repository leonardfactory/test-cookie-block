var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('serve', function () {
    connect.server({ port: 80, host: 'test-host1.local' });
});
