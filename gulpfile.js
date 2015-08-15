var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var csscomb = require('gulp-csscomb');
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
- autoprefixer: https://github.com/postcss/autoprefixer#browsers
- csscomb: https://github.com/csscomb/csscomb.js/blob/master/doc/options.md
- csslint: https://github.com/CSSLint/csslint/wiki/Rules
- jade: http://jade-lang.com/api/
- jscs: http://jscs.info/rules.html
- jshint: https://github.com/jshint/jshint/blob/master/examples/.jshintrc
- stylestats: https://github.com/t32k/stylestats/blob/master/assets/default.json
*/
var autoprefixerConfig = { browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'Android >= 2'] };
var csscombConfig = '.csscomb.json';
var csslintConfig = '.csslintrc';
var jadeConfig = { pretty: true };
var jscsConfig = { configPath: '.jscsrc', fix: true };
var jshintConfig = '.jshintrc';
var stylestatsConfig = { config: '.stylestatsrc' };

/*
tasks
==================================================
*/
gulp.task('clean', function(cb) {
	return del([
			'+(css|fonts|js)',
			'+(index.html|manifest.*)'
		], { force: true }, cb)
});

gulp.task('html', function() {
	return gulp.src('_pages/*.jade')
		.pipe(jade(jadeConfig))
		.pipe(minifyHtml())
		.pipe(gulp.dest('./'))
		.pipe(notify({ onLast: true, message: 'Finished html' }))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('manifests', function() {
	var version = Date.now()

	return gulp.src('_manifests/manifest.*')
		.pipe(replace('{{version}}', version))
		.pipe(gulp.dest('./'))
		.pipe(notify({ onLast: true, message: 'Finished manifests' }))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('cssVendor', function() {
	return gulp.src('_css/vendor.less')
		.pipe(less())
		.pipe(autoprefixer(autoprefixerConfig))
		.pipe(gulp.dest('css'))
		.pipe(minifyCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
		.pipe(notify({ onLast: true, message: 'Finished cssVendor' }))
});

gulp.task('cssSite', function() {
	return gulp.src('_css/driblesfifa.less')
		.pipe(csscomb())
		.pipe(gulp.dest('_css'))
		.pipe(less())
		.pipe(autoprefixer(autoprefixerConfig))
		.pipe(csslint(csslintConfig))
		.pipe(csslint.reporter())
		.pipe(gulp.dest('css'))
		.pipe(minifyCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
		.pipe(notify({ onLast: true, message: 'Finished cssSite' }))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('fonts', function() {
	return gulp.src('node_modules/bootstrap/dist/fonts/*')
		.pipe(gulp.dest('fonts'))
		.pipe(notify({ onLast: true, message: 'Finished fonts' }))
});

gulp.task('jsVendor', function() {
	return gulp.src([
			'node_modules/jquery/dist/jquery.js',
			'node_modules/bootstrap/js/transition.js',
			//'node_modules/bootstrap/js/alert.js',
			//'node_modules/bootstrap/js/button.js',
			//'node_modules/bootstrap/js/carousel.js',
			'node_modules/bootstrap/js/collapse.js',
			'node_modules/bootstrap/js/dropdown.js',
			//'node_modules/bootstrap/js/modal.js',
			//'node_modules/bootstrap/js/tooltip.js',
			//'node_modules/bootstrap/js/popover.js',
			//'node_modules/bootstrap/js/scrollspy.js',
			//'node_modules/bootstrap/js/tab.js',
			//'node_modules/bootstrap/js/affix.js',
			'node_modules/js-cookie/src/js.cookie.js',
			'node_modules/list.js/dist/list.js',
		])
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
		.pipe(notify({ onLast: true, message: 'Finished jsVendor' }))
});

gulp.task('jsSite', function() {
	return gulp.src('_js/driblesfifa.js')
		.pipe(jshint(jshintConfig))
		.pipe(jshint.reporter('default'))
		.pipe(notify(function (file) {
			if (!file.jshint.success) {
				return file.relative + ' (' + file.jshint.results.length + ' errors)';
			}
		}))
		.pipe(jscs(jscsConfig))
		.pipe(gulp.dest('_js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
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
			baseDir: './',
		},
		startPath: '?a=0',
		watchTask: true
	});
});

/*
build and dev tasks
==================================================
*/
gulp.task('default', ['clean'], function(){
	gulp.start('html', 'fonts', 'manifests', 'css', 'js');
});

gulp.task('css', function(){
	gulp.start('cssVendor', 'cssSite');
});

gulp.task('js', function(){
	gulp.start('jsVendor', 'jsSite');
});

gulp.task('dev', ['browser-sync'], function() {
	gulp.watch('_+(data|includes|pages|templates)/**/*.jade', ['html'])
	gulp.watch('_manifests/manifest.*', ['manifests'])
	gulp.watch('_css/*.less', ['css'])
	gulp.watch('_js/*.js', ['js'])
	gulp.watch('img/**/*.+(gif|jpg|png)', ['imagemin'])
});
