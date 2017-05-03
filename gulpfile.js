// ------------------------------------------------
// Plugins
// ------------------------------------------------

var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync').create(),
	autoprefixer 	= require('gulp-autoprefixer'),
	concat  		= require('gulp-concat'),
	minify_css    	= require('gulp-minify-css'),
	plumber 		= require('gulp-plumber'),
	uglify 			= require('gulp-uglify'),
	watch 			= require('gulp-watch');
	sourcemaps    	= require('gulp-sourcemaps'),
	notify 			= require('gulp-notify'),
	imagemin 		= require('gulp-imagemin'),
	pngquant 		= require('imagemin-pngquant');


// ------------------------------------------------
// Settings
// ------------------------------------------------


var dest_js 		= "dist/js";
var dest_css 		= "dist/css";
var src_sass 		= "src/scss/**/*.scss";
var src_js 			= "src/js/**/*.js";







// ------------------------------------------------


// SASS to CSS

gulp.task('styles', function(){
		
		return gulp.src(src_sass)
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(concat('app.min.css'))
		.pipe(minify_css())
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(dest_css));
		// .pipe(notify({ message: 'Hello world we are done' }));
});



// ------------------------------------------------


// Compile JS

gulp.task('js', function(){

		return gulp(src_js)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(concat('app.min.js'))
		.pipe(gulp(dest_js));
});











