var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import');

gulp.task('styles', function() {
  var plugins = [
    cssimport,
    cssvars,
    nested,
    autoprefixer({browsers: ['> 1%'], cascade: false})
  ];
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./app/temp/styles'));
});
