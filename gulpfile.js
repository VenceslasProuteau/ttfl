const gulp = require('gulp');
const {
  clean,
  serve,
  build,
  tests,
  mergeLocales
} = require('require-dir')('./tasks');

gulp.task('clean', clean)
gulp.task('merge-locales', mergeLocales)
gulp.task('serve', gulp.series(mergeLocales, serve))
gulp.task('test', gulp.series(mergeLocales, tests))
gulp.task('build', gulp.series(clean, mergeLocales, build))