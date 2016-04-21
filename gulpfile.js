var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	babelify = require('babelify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	bundle = require('gulp-bundle-assets'),
  	connect = require('gulp-connect');
 
gulp.task('server', function() {  
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
});

gulp.task('stylus', function() {  
  gulp.src('./src/styles/style.styl')
    .pipe(stylus({
      use: nib(),
      'include css': true,
    }))
    .pipe(minify())
    .pipe(gulp.dest('./build/css/'))
})

gulp.task('build', function() {  
  browserify({
    entries: './src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/js'))
})
 
gulp.task('default', ['server']);