var gulp = require('gulp');
var bs   = require('browser-sync').create();
var sass = require('gulp-sass');

// Starting Browser-Sync server
gulp.task('browser-sync', function(){
  var files = [
    '*.html'
  ];

  bs.init(files, {
    server: {
      baseDir: "./"
    }
  })
});


// Compiling SASS sources into CSS
gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
              .pipe(sass())
              .pipe(gulp.dest('css'))
              .pipe(bs.reload({stream: true})) // prompts a reload after compilation

});

// Watching changes in the source files
gulp.task('watch', ['browser-sync'], function(){
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', bs.reload);
});