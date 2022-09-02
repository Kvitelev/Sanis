const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const del = require("del");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclud = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const webpHtml = require("gulp-webp-html");
const webpCss = require("gulp-webp-css");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const svgstore = require("gulp-svgstore");

// Обработка HTML
const html = () => {
  return src("src/*.html")
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
      }))
    }))
    .pipe(fileInclud())
    .pipe(webpHtml())
    .pipe(size({title: "До сжатия: HTML"}))
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(size({title: "После сжатия: HTML"}))
    .pipe(dest("build"))
    .pipe(browserSync.stream());
}

// Обработка стилей
const style = () => {
  return src("src/sass/main.scss")
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SCSS",
        message: error.message
      }))
    }))
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({title: "style.css"}))
    .pipe(dest("build/css"))
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(size({title: "style.min.css"}))
    .pipe(dest("build/css"))
    .pipe(browserSync.stream())
}

const vendor = () => {
  return src("src/sass/vendor.scss")
    .pipe(sass())
    .pipe(size({title: "vendor.css"}))
    .pipe(dest("build/css"))
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(size({title: "vendor.min.css"}))
    .pipe(dest("build/css"))
}

// Обработка JavaScript
const script = () => {
  return src("src/js/**/*.js")
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "JavaScript",
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(size({title: "javascript"}))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(size({title: "javascript.min"}))
    .pipe(dest("build/js"))
    .pipe(browserSync.stream())
}

// Обработка Image
const optimizeImages = () => {
  return src("src/img/**/*.{jpg,png,svg}")
    .pipe(newer("build/img"))
    .pipe(imagemin({verbose: true}))
    .pipe(newer("build/img"))
    .pipe(dest("build/img"))
}

// Webp
const createWebp = () => {
  return src("src/img/**/*.{jpg,png}")
  .pipe(webp())
  .pipe(newer("build/img"))
  .pipe(dest("build/img"))
}

// copyImages
const copyImages = () => {
  return src("src/img/**/*.{jpg,png,svg}")
  .pipe(dest("build/img"))
}

// Обработка Fonts
const fonts = () => {
  return src("src/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}")
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Font",
        message: error.message
      }))
    }))
    .pipe(newer("public/fonts"))
    .pipe(fonter({
      formats: ["woff", "svg"]
    }))
    .pipe(dest("build/fonts"))
    .pipe(ttf2woff2())
    .pipe(dest("build/fonts"))
}

// Sprite
const sprite = () => {
  return src("src/img/sprite/*.svg")
  .pipe(svgstore({inlineSvg: true}))
  .pipe(rename("sprite.svg"))
  .pipe(dest("build/img"))
}

// Удаление дериктории
const clear = () => {
  return del("build")
}

// Сервер
const server = () => {
  browserSync.init({
    server: {
        baseDir: "build"
    }
  })
}

// Наблюдение
const watcher = () => {
  watch("src/**/*.html", html);
  watch("src/sass/**/*.scss", style);
  watch("src/js/**/*.js", script);
  watch("src/img/**/*.{jpg,png,svg}", optimizeImages);
  watch("src/img/**/*.{jpg,png,svg}", copyImages);
  watch("src/img/**/*.{jpg,png}", createWebp);
  watch("src/img/**/*.svg", sprite);
  watch("src/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}", fonts);
}

// Задачи
exports.html = html;
exports.style = style;
exports.vendor = vendor;
exports.script = script;
exports.images = optimizeImages;
exports.images = copyImages;
exports.createWebp = createWebp;
exports.fonts = fonts;
exports.sprite = sprite;

// Сборка
exports.build = series(
  clear,
  optimizeImages,
  parallel (html, style, vendor, script, createWebp, fonts, sprite)
);

exports.dev = series(
  clear,
  copyImages,
  parallel (html, style, vendor, script, createWebp, fonts, sprite),
  parallel (server, watcher)
);
