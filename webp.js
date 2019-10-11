const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const imageminGiflossy = require("imagemin-giflossy");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminWebp = require("imagemin-webp");

(async () => {
  const files = await imagemin(["img/in/*.{jpg,png,gif}"], {
    destination: "img/out",
    plugins: [
      imageminJpegtran(),
      imageminGifsicle(),
      imageminWebp({ quality: 100 }),
      imageminPngquant({
        quality: [1, 1]
      })
    ]
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();
