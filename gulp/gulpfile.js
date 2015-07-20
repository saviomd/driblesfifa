var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
//var csscomb = require('gulp-csscomb');
var csslint = require('gulp-csslint');
var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var stylestats = require('gulp-stylestats');
var uglify = require('gulp-uglify');

/*
configs
==================================================
-autoprefixer: https://github.com/postcss/autoprefixer#browsers
-csscomb: https://github.com/csscomb/csscomb.js/blob/master/doc/options.md
-csslint: https://github.com/CSSLint/csslint/wiki/Rules
-jade: http://jade-lang.com/api/
-jscs: http://jscs.info/rules.html
-jshint: https://github.com/jshint/jshint/blob/master/examples/.jshintrc
-stylestats: https://github.com/t32k/stylestats/blob/master/assets/default.json
*/
var autoprefixerConfig = { browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'Android >= 2'] };
var csslintConfig = require('./csslintrc.json');
var jadeConfig = { pretty: true };
var jscsConfig = { configPath: './jscs.json', fix: true };
var jshintConfig = require('./jshintrc.json');
var stylestatsConfig = require('./stylestats.json');

/*
tasks
==================================================
*/
gulp.task('clean', function(cb) {
	return del([
			'../+(css|js)',
			'../+(index.html|manifest.*)'
		], { force: true }, cb)
});

gulp.task('html', function() {
	return gulp.src('../_pages/*.jade')
		.pipe(jade(jadeConfig))
		.pipe(minifyHtml())
		.pipe(gulp.dest('../'))
		.pipe(notify({ onLast: true, message: 'Finished html' }))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('manifests', function() {
	var version = Date.now()

	return gulp.src('../_manifests/manifest.*')
		.pipe(replace('{{version}}', version))
		.pipe(gulp.dest('../'))
		.pipe(notify({ onLast: true, message: 'Finished manifests' }))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('css', function() {
	return gulp.src('../_css/driblesfifa.less')
		//.pipe(csscomb())
		//.pipe(gulp.dest('../_css'))
		.pipe(less())
		.pipe(autoprefixer(autoprefixerConfig))
		.pipe(csslint(csslintConfig))
		.pipe(csslint.reporter())
		.pipe(replace('../fonts/glyphicons', '/lib/bootstrap/dist/fonts/glyphicons'))
		.pipe(gulp.dest('../css'))
		.pipe(minifyCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('../css'))
		.pipe(stylestats({ config: stylestatsConfig }))
		.pipe(notify({ onLast: true, message: 'Finished css' }))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function() {
	gulp.src('../_js/*.js')
		.pipe(jshint(jshintConfig))
		.pipe(jshint.reporter('default'))
		.pipe(notify(function (file) {
			if (!file.jshint.success) {
				return file.relative + ' (' + file.jshint.results.length + ' errors)';
			}
		}))
		.pipe(jscs(jscsConfig))
		.pipe(gulp.dest('../_js'))

	return gulp.src([
			'../../lib/bootstrap/js/transition.js',
			//'../../lib/bootstrap/js/alert.js',
			//'../../lib/bootstrap/js/button.js',
			//'../../lib/bootstrap/js/carousel.js',
			'../../lib/bootstrap/js/collapse.js',
			'../../lib/bootstrap/js/dropdown.js',
			//'../../lib/bootstrap/js/modal.js',
			//'../../lib/bootstrap/js/tooltip.js',
			//'../../lib/bootstrap/js/popover.js',
			//'../../lib/bootstrap/js/scrollspy.js',
			//'../../lib/bootstrap/js/tab.js',
			//'../../lib/bootstrap/js/affix.js',
			'../../lib/js/cookie.min.js',
			'../../lib/js/list.min.js',
			'../_js/driblesfifa.js'
		])
		.pipe(concat('driblesfifa.js'))
		.pipe(gulp.dest('../js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('../js'))
		.pipe(notify({ onLast: true, message: 'Finished js' }))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('imagemin', function() {
	return gulp.src('img/**/*.+(gif|jpg|png)')
		.pipe(imagemin({ optimizationLevel: 7, pngquant: false, progressive: true }))
		.pipe(gulp.dest('imgmin'))
		.pipe(notify({ onLast: true, message: 'Finished imagemin' }))
});

gulp.task('browser-sync', function() {
	browserSync({
		ghostMode: {
			clicks: true,
			forms: true,
			location: true,
			scroll: true
		},
		server: {
			baseDir: '../../',
		},
		startPath: 'driblesfifa/?a=0',
		watchTask: true
	});
});

/*
build and dev tasks
==================================================
*/
gulp.task('default', ['clean'], function(){
	gulp.start('html', 'manifests', 'css', 'js');
});

gulp.task('dev', ['browser-sync'], function() {
	gulp.watch('../_+(data|includes|pages|templates)/**/*.jade', ['html'])
	gulp.watch('../_manifests/manifest.*', ['manifests'])
	gulp.watch('../_css/*.less', ['css'])
	gulp.watch('../_js/*.js', ['js'])
	gulp.watch('img/**/*.+(gif|jpg|png)', ['imagemin'])
});
