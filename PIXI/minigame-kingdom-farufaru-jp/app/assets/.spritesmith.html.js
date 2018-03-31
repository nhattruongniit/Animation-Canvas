const glob = require('glob');

module.exports = [];

const sprites = ['index', 'play', 'stage', 'loading', 'result', 'numbers', 'ad', 'term', 'pc'];
sprites.forEach(function(name) {
  module.exports.push({
    src: glob.sync('./sprites-html/' + name + '/*.png'),
    destImage: '../public/static/build/sprites-html/' + name + '.png',
    destCSS: './sprites-html/' + name + '/_sprite.scss',
    imgPath: '/static/build/sprites-html/' + name + '.png',
    padding: 2,
  });
});
