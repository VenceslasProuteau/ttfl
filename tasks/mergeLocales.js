const gulp = require('gulp');
const mergeJson = require('gulp-merge-json');
const flatten = require('gulp-flatten-json');
const {langs, src} = require('./build-config');

module.exports = done => {
  langs.forEach(lang => {
    gulp.src(`${src.locales}${lang}.json`)
      .pipe(flatten())
      .pipe(mergeJson({
        fileName: `locales-${lang}.json`
      }))
      .pipe(gulp.dest('./dist'));
    done();
  })
}