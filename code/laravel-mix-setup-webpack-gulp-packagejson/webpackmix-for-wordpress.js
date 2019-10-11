const mix = require('laravel-mix');
const fsExtra = require("fs-extra");

const archiver = require('archiver');

const path = require("path");
const cliColor = require("cli-color");
const emojic = require("emojic");
const wpPot = require('wp-pot');
const min = Mix.inProduction() ? '.min' : '';
const gulprtl = require( "./gulpfile.js" );
const callingConvertPx2Rem = require('./remconverter.js')




if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  mix.less('./src/less/style.less', './assets/css/')
  .less('./src/less/style-editor.less', './')
  .less('./src/less/main-admin.less', './assets/css/')
  .webpackConfig({
    devtool: 'source-map'
  })
  .sourceMaps()
  .options({
    processCssUrls: false,
  });

  mix.then(function () {
    gulprtl.default();
    callingConvertPx2Rem();
  })

  mix.disableNotifications();



}

if (process.env.NODE_ENV === 'developmentNoSourcemap') {

  mix.less('./src/less/style.less', './assets/css/')

  .options({
    processCssUrls: false,
  }).then(function () {
    callingConvertPx2Rem();
    const sourceMapPath = './assets/css/style.css.map'
      try {
        fsExtra.unlinkSync(sourceMapPath)
        console.log('source-maps remove')
      } catch(err) {
        // console.error(err)
      }
     const sourceMapPathEditorStyle = './style-editor.css.map'
      try {
        fsExtra.unlinkSync(sourceMapPathEditorStyle)
        console.log('source-maps editor style remove')
      } catch(err) {
        // console.error(err)
      }
  })

  mix.less('./src/less/style-editor.less', './');
  mix.less('./src/less/main-admin.less', './assets/css/');

  mix.then(function () {
    gulprtl.default();
  })

}


if (process.env.NODE_ENV === 'pot') {

        let languages = path.resolve('languages');
        fsExtra.ensureDir(languages, function (err) {
            if (err) return console.error(err); // if file or folder does not exist
            wpPot({
                package: 'Optimax',
                bugReport: '',
                src: '**/*.php',
                domain: 'optimax',
                destFile: `languages/optimax.pot`
            });
        });

}


if (process.env.NODE_ENV === 'package') {

  mix.then(function () {

      let bundledir = path.basename(path.resolve(__dirname));
      let copyfrom = path.resolve(__dirname);
      let copyto = path.resolve(`${bundledir}`);
      // Select All file then paste on list
      let includes = [
                  'assets',
                  'inc',
                  'languages',
                  'template-parts',
                  'templates',
                  'woocommerce',
                  '404.php',
                  'comments.php',
                  'footer.php',
                  'functions.php',
                  'header.php',
                  'index.php',
                  'page.php',
                  'rtl.css',
                  'screenshot.jpg',
                  'search.php',
                  'sidebar.php',
                  'single.php',
                  'style.css',
                  'style-editor.css',
                  'style-editor-rtl.css',
                  'under-construction.php',
                  'wpml-config.xml',

                  ];
      fsExtra.ensureDir(copyto, function (err) {
          if (err) return console.error(err); // if file or folder does not exist
          includes.map(include => {
              fsExtra.copy(`${copyfrom}/${include}`, `${copyto}/${include}`, function (err) {
                  if (err) return console.error(err)
                  console.log(cliColor.white(`=> ${emojic.smiley}  ${include} copied...`));
              })
          });
          console.log(cliColor.white(`=> ${emojic.whiteCheckMark}  Build directory created`));
      });
  });

}

if (process.env.NODE_ENV === 'zip') {
  var bundledir = path.basename(path.resolve(__dirname)); // just for getting name
  let copyto = path.resolve(`${bundledir}`);


  var output = fsExtra.createWriteStream(__dirname + '/optimax.zip'); // output location

  var archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

    output.on('close', function() {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');

      // following function for deleting bundle
      fsExtra.remove(copyto, function () {
        console.log('deleted');
      });

    });

    output.on('end', function() {
      console.log('Data has been drained');
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function(err) {
      if (err.code === 'ENOENT') {
        // log warning
        console.log('warning')
      } else {
        console.log('error')
        throw err;
      }
    });

    // good practice to catch this error explicitly
    archive.on('error', function(err) {
      throw err;
    });

    // pipe archive data to the file
    archive.pipe(output);


    // append files from a glob pattern
    archive.directory(bundledir);  // just foldername + /*

    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize();

}
