const { parallel, src, dest } = require(`gulp`);
const concat = require(`gulp-concat`);
const uglify = require(`gulp-uglify`);
const htmlmin = require("gulp-htmlmin");
const cssnano = require(`gulp-cssnano`);

function copyHtml() {
  return src(`./src/index.html`).pipe(dest(`./dist/`));
}
function copyHtmlMin() {
  return src(`./src/index.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(`./dist/`));
}

function copyJs() {
  return src(`./src/js/**/*.js`).pipe(concat(`app.js`)).pipe(dest(`./dist/js`));
}

function copyJsMin() {
  return src(`./src/js/**/*.js`)
    .pipe(concat(`app.js`))
    .pipe(uglify())
    .pipe(dest(`./dist/js`));
}
function copyCss() {
  return src(`./src/css/**/*.css`)
    .pipe(concat(`main.css`))
    .pipe(dest(`./dist/css`));
}
function copyVendorCss() {
  return src([
    `./src/vendorCss/materialize.css`,
    `./src/vendorCss/all.css`,
    `./src/vendorCss/bootstrap.css`,
  ])
    .pipe(concat(`vendor.css`))
    .pipe(dest(`./dist/css`));
}
function copyVendorCssMin() {
  return src([
    `./src/vendorCss/materialize.css`,
    `./src/vendorCss/all.css`,
    `./src/vendorCss/bootstrap.css`,
  ])
    .pipe(concat(`vendor.css`))
    .pipe(cssnano())
    .pipe(dest(`./dist/css`));
}
function copyCssMin() {
  return src(`./src/css/**/*.css`)
    .pipe(concat(`main.css`))
    .pipe(cssnano())
    .pipe(dest(`./dist/css`));
}
function copyFonts() {
  return src(`./src/webFonts/**/*.woff2`).pipe(dest(`./dist/webfonts`));
}

module.exports = {
  build: parallel(copyHtml, copyJs, copyCss, copyVendorCss, copyFonts),
  minify: parallel(
    copyHtmlMin,
    copyJsMin,
    copyCssMin,
    copyVendorCssMin,
    copyFonts
  ),
};
