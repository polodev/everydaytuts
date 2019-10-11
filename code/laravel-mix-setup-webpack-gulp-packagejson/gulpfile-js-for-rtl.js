const rtlcss          = require('gulp-rtlcss');
const  rename = require("gulp-rename");
const { src, dest, parallel } = require('gulp');


function rtl() {
  return src([
		'**/*.css',
		'!**/owl.carousel.css',
		'!**/owl.carousel.min.css',
		'!**/owl.theme.default.css',
		'!**/owl.theme.default.min.css',
		'!**/optimax-rtl.css',
		'!**/font-awesome.css',
		'!**/rtl.css',
		'!**/admin.css'
		], {cwd: 'assets/css'})
		.pipe(rtlcss())
    .pipe(dest('assets/rtl-generated-css/'))
}

function  rtl_editor () {

	return src('./style-editor.css')
		.pipe(rtlcss())
	  .pipe(rename("style-editor-rtl.css"))
    .pipe(dest('./'))
}


exports.rtl_editor = rtl_editor;
exports.default = parallel(rtl, rtl_editor);

