var gulp = require ('gulp');
var sass = require ('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var config ={
  source: './src/',
  dist:'./public/'
};

var paths ={
  html:"**/*.html",
  assets:"/assets/",
  img:"/assets/iconos/*.png",
  sass:"scss/**/*.scss",
  mainSass :"scss/main.scss",
  js:"js/**/*.js",
  mainJs:"js/app.js"

};

var sources ={
  html: config.source + paths.html,
  assets : config.source + paths.assets,
  img : config.source + paths.img,
  sass : paths.assets + paths.sass,
  rootSass : config.source + paths.assets + paths.mainSass,
  js: config.source + paths.js,
  rootJs : config.source + paths.assets + paths.mainJs
};

gulp.task('html', ()=>{
  gulp.src("./src/*.html")
    .pipe(gulp.dest('./public/'));
});

gulp.task('img', ()=>{
  gulp.src(sources.img)
    .pipe(gulp.dest(config.dist+ paths.assets+"iconos"));
});



gulp.task("sass", function (){
  gulp.src(sources.rootSass)
    .pipe(sass({outputStyle:"compressed"}).on("error" , sass.logError))
    .pipe(gulp.dest(config.dist + paths.assets+"css"));
})


gulp.task("js", ()=>{
  gulp.src("./src/assets/js/*.js")
    .pipe( gulp.dest( "./public/assets/js" ) );
});

gulp.task("sass-watch",["sass"],(done)=>{
  browserSync.reload();
  done();
});

gulp.task("js-watch",["js"],(done)=>{
  browserSync.reload();
  done();
});

gulp.task("html-watch",["html"],(done)=>{
  browserSync.reload();
  done();
});

gulp.task("default", ()=>{
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("./src/assets/js/*.js",["js-watch"]);
  gulp.watch("./src/assets/scss/**/*.scss", ["sass-watch"] );
  gulp.watch("./src/*.html",["html-watch"]);
});


