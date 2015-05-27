'use strict';
// generated on 2014-10-10 using generator-gulp-webapp 0.1.0

var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var gulp       = require('gulp');
var del        = require('del');
var exec       = require('child_process').exec;
var pkg         = require('./package.json');

// load plugins
var $ = require('gulp-load-plugins')();

var path = {
	main      : './ui/js/PolioScape.js',
	components: './ui/js/**/*.{js,jsx,html,css,sass,scss}',
	js        : './ui/js/**/*.{js,jsx}',
	libs      : Object.keys(pkg.dependencies),
	sass      : ['./ui/styles/**/{screen,print,ie,non-ie-print}.scss', './ui/js/**/*.{sass,scss}', './bower_components/**/*.min.css'],
	images    : './ui/img/**/*',
	test      : './ui/test/**/*.js',
	output    : './static',
	clean     : ['dist', 'build', 'static/**/*.js', 'static/{css,fonts}'],
	dist      : 'dist',
	zipfile   : 'uf04-frontend.zip'
};

function say(msg) {
	exec('say -v Fred "' + msg + '"');
}

function err(e) {
	$.util.log(e.message);
	say('Build failed');
	this.emit('end');
}

gulp.task('styles', function () {
	var filter = $.filter(['**/*', '!non-ie-print.css', '!ie.css', '!print.css', '!font-awesome.min.css']);

	return gulp.src(path.sass)
		.pipe($.rubySass({
			compass: true,
			style: 'expanded',
			precision: 10
		}))
		.on('error', err)
		.pipe($.flatten())
		.pipe(filter)
		.pipe($.concat('screen.css'))
		.pipe(filter.restore())
		.pipe($.autoprefixer('last 1 version'))
		.pipe(gulp.dest(path.output + '/css'))
		.on('end', function () {
			exec('say -v Fred "CSS compiled"');
		});
});

gulp.task('scripts', function () {
	return gulp.src(path.js)
		.pipe($.jshint())
		.pipe($.jshint.reporter(require('jshint-stylish')));
});

gulp.task('lib', function () {
	var bundle = browserify({
			debug     : true,
			fullPaths : true,
		})
		.require(path.libs)
		.plugin('minifyify', {
			map    : 'lib.map.json',
			output : path.output + '/lib.map.json'
		})
		.bundle()
		.on('error', err);

	return bundle
		.pipe(source('lib.js'))
		.pipe(gulp.dest(path.output))
		.on('end', function () {
			say('Library built');
		});
});

gulp.task('browserify', function () {
	var bundleStream = browserify(path.main, {
			debug: true,
			standalone: 'Polio',
			paths: ['./ui/js']
		})
		.external(path.libs)
		.bundle()
		.on('error', err)
		.on('end', function () {
			exec('say -v Fred "App compiled"');
		});;

	return bundleStream
		.pipe(source(path.main))
		.pipe($.rename('main.js'))
		.pipe(gulp.dest(path.output));
ß});

gulp.task('fonts', function () {
	var fonts = $.filter('**/*.{eot,svg,ttf,woff}');

	return $.bowerFiles()
		.pipe($.filter(['**/*.{eot,svg,ttf,woff}']))
		.pipe($.flatten())
		.pipe(gulp.dest(path.output + '/fonts'))
		.pipe($.size());
});

gulp.task('clean', function (cb) {
	del(path.clean, cb);
});

gulp.task('build', ['fonts', 'lib', 'browserify', 'styles']);

gulp.task('default', ['clean'], function () {
	return gulp.start('build');
});

gulp.task('livereload', function () {
	var server = $.livereload();

	// watch for changes

	gulp.watch(path.output + '/**/*').on('change', function (file) {
		server.changed(file.path);
	});
});

gulp.task('watch', ['browserify', 'styles', 'livereload'], function () {
	gulp.watch('**/*.{scss,sass}', ['styles']);
	gulp.watch(path.components, ['browserify']);
	gulp.watch('./package.json', ['lib']);
});

gulp.task('test', ['scripts'], function () {
	return gulp.src(path.test).pipe($.mocha());
});

gulp.task('collectstatic', ['build'], function (cb) {
	exec('python manage.py collectstatic --noinput -v 0', function (err) {
		if (err) {
			return cb(err);
		}

		cb();
	});
});

gulp.task('dist-py', function () {
	return gulp.src([
			'{bin,polio,datapoints,source_data,entity,templates}/**/*.{py,sql,html,sh}',
			'manage.py',
			'requirements.txt',
		])
		.pipe($.zip('uf04-backend.zip'))
		.pipe($.size({ title: 'Backend'}))
		.pipe(gulp.dest(path.dist))
});

gulp.task('dist-ui', ['collectstatic'], function () {
	var jsFilter  = $.filter('**/main.js');
	var cssFilter = $.filter('**/{print,screen,ie}.css');

	return gulp.src('build/**/*')
		.pipe(jsFilter)
		.pipe($.size({ title: 'JavaScript' }))
		.pipe(jsFilter.restore())
		.pipe(cssFilter)
		.pipe($.csso())
		.pipe($.size({ title: 'CSS' }))
		.pipe(cssFilter.restore())
		.pipe($.zip(path.zipfile))
		.pipe($.filter('*.zip'))
		.pipe($.size({ title: 'Zip' }))
		.pipe(gulp.dest(path.dist));
});

gulp.task('dist', ['dist-py', 'dist-ui']);
