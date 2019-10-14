const gulp = require('gulp');
const requireDir = require('require-dir');
const browserSync = require('browser-sync');
const tasks = require('gulp-task-listing');

// Include tasks from .js files in the tasks folder
requireDir('./tasks');

gulp.task('serve', ['watch'], function () {
  browserSync({
    port: 1313,
    server: {
      baseDir: "./public/"
    },
    files: [
      'public/**/*',
    ],
    open: false,
    logLevel: 'silent',
    notify: false
  });
});

gulp.task('watch', ['build'], function () {
  gulp.watch(['assets/js/**/*.js'], ['js']);
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch(['layouts/**/*', 'content/**/*', 'archetypes/**/*', 'static/**/*', 'data/**/*'], ['hugo:dev']);
});

gulp.task('env:production', function () {
  process.env.NODE_ENV = 'production';
  process.env.HUGO_ENV = 'production';
});

gulp.task('build', ['js', 'sass']);
gulp.task('build:prod', ['env:production', 'sass', 'js']);

gulp.task('default', function () {
  return tasks.withFilters(null, 'default')();
});