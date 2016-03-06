var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    env = require('gulp-env');

gulp.task('default', function() {
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: 9002
        },
        ignore: ['./node_module/**']
    })
        .on('restart', function() {
            console.log('Restarting')
        })
});
