import gulp       from 'gulp'
import babel      from 'gulp-babel'
import sass       from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import fs         from 'fs'

const parsed = JSON.parse(fs.readFileSync('./package.json'))

// file paths for assets
const paths = {
  sass: 'src/sass/**/*.scss',
  script: 'src/js/**/*.js'
}

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('transpile', () => {
  return gulp.src(paths.script)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
})

// watch for changes.
gulp.task('watch', () => {
  gulp.watch(paths.script, ['transpile'])
  gulp.watch(paths.sass, ['sass'])
})

gulp.task('default', ['watch', 'transpile', 'sass'])
