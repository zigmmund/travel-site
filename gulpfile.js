var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import');

gulp.task('default', function() {
  console.log('Success!')
});

gulp.task('html', function() {
  console.log('HTML is here!');
});

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

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html')
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
