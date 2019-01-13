var gulp = require('gulp');
var concat = require('gulp-concat-sourcemap'); 
var rename = require('gulp-rename'); 
var uglify = require('gulp-uglify');
var git = require('gulp-git');

var jsFiles = [
	"./plugins-and-libraries/uuid.js",
	"./plugins-and-libraries/jquery.fullscreen.min.js",
	"./plugins-and-libraries/jquery.transit.min.js",
	"./plugins-and-libraries/tooltipster/tooltipster.bundle.min.js",
	"./plugins-and-libraries/mini-meteor.min.js",
	"./plugins-and-libraries/jquery-deparam.js",
	"./plugins-and-libraries/jquery.scrollTo.min.js",
	"./plugins-and-libraries/morphdom-umd.js",
	"./general-custom-js/query-string-router.js",
	"./general-custom-js/reactiveLocalStorage.js",
	"./general-custom-js/WebflowCustomCode.js",
	"./general-custom-js/transitions-functions-wrapper.js",
	"./general-custom-js/supersimple-extensible-function.js",
	"./general-custom-js/ensureAlignmentOfTableWithInnerScroll.js",
	"./main-code/v1/general/routes.js", 
	"./general-framework/tooltipster-for-webflow.js",
	"./general-framework/modals.js",
	"./general-framework/select-dropdowns-with-state.js",
	"./general-framework/input-fields-binded-to-reactive-local-storage.js",
	"./general-framework/checkboxes-binded-to-reactive-local-storage.js",
	"./general-framework/data-binding-and-data-lists.js",
	"./general-framework/initial-preloading.js", //preloading needs to be after other framework files
	"./main-code/v1/features/setting-tempo-and-colors.js",
	"./main-code/v1/features/starting-and-stopping.js",
	"./main-code/v1/features/auto-hiding-menu.js",
	"./main-code/v1/features/blending-colors.js",
	"./main-code/v1/features/key-shortcuts.js",
	"./main-code/v1/features/presets-playing-and-saving.js",
	"./main-code/v1/features/tapping-tempo.js",
	"./main-code/v1/features/choosing-colors-from-palette.js",
	"./main-code/v1/features/entering-fullscreen.js",
	"./main-code/v1/features/quick-buttons.js",
	"./main-code/v1/features/preventing-device-sleep.js",
	"./main-code/v1/features/showing-more-color-rows.js"
]; 

var jsDestination = '.';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'), {sourceRoot: '/'})
        .pipe(gulp.dest(jsDestination));
        // .pipe(rename('scripts.min.js'))
        // .pipe(uglify())
        // .pipe(gulp.dest(jsDestination));
});

gulp.task('buildScriptsThenAddAndCommit', ['scripts'], function() {  
    return gulp.src('.')
  		.pipe(git.add())
  		.pipe(git.commit('auto commit'));
});

gulp.task('push', function() {  
	git.push('origin', 'master', function (err) {
	  if (err) throw err;
	});
});

gulp.task('buildScriptsThenAddAndCommitThenPush', ['buildScriptsThenAddAndCommit'], function() {  
	git.push('origin', 'master', function (err) {
	  if (err) throw err;
	});
});

var filesToWatch = [
	"**/*.js",
	"**/*.css"
];

//

gulp.task('watch', function() {
  gulp.watch(filesToWatch, ['buildScriptsThenAddAndCommitThenPush']);
});