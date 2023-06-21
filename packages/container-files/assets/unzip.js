console.log('unzipping')

const targz = require('./tar.gz.js')

const unzip = () => {
  return Promise.all([
    targz.x({ file: 'playground.tgz', C: '.', preservePaths: true })
  ])
}
unzip().then(() => {
  console.log('unzip done!');
})
.catch(function(err){
  console.log('unzip failed ', err);
});