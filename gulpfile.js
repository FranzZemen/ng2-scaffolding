var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');
var open = require('gulp-open');
var sass = require('gulp-sass');
var debug = require('gulp-debug');

var config = {
  server : {
    port: 8080,
    host: 'localhost',
    proxyHost: 'localhost',
    proxyPort: '9000'
  },
  browser: 'chrome',
  sass: {
    includePaths : [
      'node_modules/foundation-sites/scss'
    ]
  }
};

gulp.task('clean', function() {
    del([
      './www'
    ])
});

gulp.task('scripts', function () {
  return gulp.src([
    'typings/**/*.ts',
    'app/**/*.ts'])
//    .pipe(debug({title: 'scripts src'}))
    .pipe(sourcemaps.init())
    .pipe(ts({
      'target': 'es5',
      'module': 'commonjs',
      'moduleResolution': 'node',
      'sourceMap': true,
      'emitDecoratorMetadata': true,
      'experimentalDecorators': true,
      'removeComments': false,
      'noImplicitAny': false,
      'rootDir' : './',
      'outDir' : './www'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www'))
});

/**
 * Remember, by sass rules sass to be imported need to lead with a _ in the file name.  These will not be compiled.
 * This allows to compile all of the app scss, whether an angular component's scss or the global app.scss.  Each of these
 * can import any _...
 */
gulp.task('sass', function () {
  return gulp.src(['./app/**/*.scss'])
    .pipe(debug({title: 'sass'}))
    .pipe(sass({includePaths:config.sass.includePaths}).on('error', sass.logError))
    .pipe(gulp.dest('./www/app'))
//    .pipe(debug({title: 'sass'}))
});



gulp.task('copy', function () {
  return gulp.src(
    [
      './index.html',
      './systemjs.config.js',
      'app/**/*.html',
      'assets/**/*.*',
      'node_modules/@angular/**/*.*',
      'node_modules/angular2-in-memory-web-api/**/*.*',
      'node_modules/rxjs/**/*.*',
      'node_modules/core-js/**/*.*',
      'node_modules/zone.js/**/*.*',
      'node_modules/reflect-metadata/**/*.*',
      'node_modules/systemjs/**/*.*',
      'node_modules/jquery/**/*.*',
      'node_modules/what-input/**/*.*',
      'node_modules/foundation-sites/**/*.*',
      'node_modules/moment/**/*.*',
      'node_modules/lodash/**/*.*',
      'node_modules/ng2-datepicker/**/*.*',
      'node_modules/timepicker/**/*.*',
      'node_modules/ng2-translate/**/*.*',
      'node_modules/lodash/**/*.*',
      'node_modules/moment/**/*.*',
      'node_modules/font-awesome/**/*.*'
    ])
    //    .pipe(debug({title:'Copy'}))
    .pipe(copy('./www'));
});


gulp.task('reload-copy',['copy'], function() {
  return gulp.src('./www/index.html').pipe(connect.reload());
});

gulp.task('reload-css',['sass'], function() {
  return gulp.src('./www/**/*.css').pipe(connect.reload());
});

gulp.task('reload-scripts',['scripts'], function() {
  return gulp.src('./www/**/*.js').pipe(connect.reload());
});

gulp.task('watchSource', ['scripts','copy','sass'], function () {
  gulp.watch('app/**/*.ts',['reload-scripts']);
  gulp.watch('app/**/*.html',['reload-copy']);
  gulp.watch('app/**/*.scss',['reload-css']);
});

gulp.task('serve', ['watchSource'], function (){
  connect.server({
    root: ['./www'],
    port: config.server.port,
    host: config.server.host,
    livereload: true,
    fallback: 'index.html',
    middleware: function(connect, o) {
      return [(function () {
        var url = require('url');
        var proxy = require('proxy-middleware');
        var options = url.parse('http://' + config.server.proxyHost + ':' + config.server.proxyPort + '/api');
        options.route = '/api';
        return proxy(options);
      })()];
    }
  })
});

gulp.task('browser', ['serve'], function(){
  var options = {
    uri: 'http://' + config.server.host + ':' + config.server.port,
    app: config.browser
  };
  gulp.src(__filename)
    .pipe(open(options))
    .pipe(debug({title: 'browser'}));
});


gulp.task('default', [
  'scripts',
  'copy',
  'sass',
  'watchSource',
  'serve',
  'browser'
]);
