const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");

const entry = "./src/service/**/*.js";

function build() {
    return gulp.src(entry)
        .pipe(babel({
            presets: ["@babel/preset-react"],
            plugins: [
                "@babel/plugin-transform-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('dist'));
}
gulp.task('default', build);