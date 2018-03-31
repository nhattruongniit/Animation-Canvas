const glob = require('glob');
const spritesmithTexturepacker = require('spritesmith-texturepacker');

module.exports = [
  {
    src: glob.sync('./sprites-canvas/play/parts/*.png'),
    destImage: '../public/static/build/sprites-canvas/play/parts.png',
    destCSS: '../public/static/build/sprites-canvas/play/parts.json',
    cssTemplate: spritesmithTexturepacker,
    padding: 2,
  },
];

// stages
const stagePath = 'sprites-canvas/play/stages';
const stages = [
  '2X3aJhew',
  'aJ2CDBqV',
  'eT7p6uF9',
  'W7wUbGj9',
  'X9yWwtYK',
];
stages.forEach(function(stage) {
  module.exports.push({
    src: glob.sync('./' + stagePath + '/' + stage + '/*.png'),
    destImage: '../public/static/build/' + stagePath + '/' + stage + '.png',
    destCSS: '../public/static/build/' + stagePath  +'/' + stage + '.json',
    cssTemplate: spritesmithTexturepacker,
    padding: 2,
  });
});

// skills
const skillPath = 'sprites-canvas/play/skills';
const skills = [
  'aang2',
  'aegh6',
  'aem7u',
  'ait3o',
  'choo1',
  'co4ao',
  'dah8f',
  'eedo9',
  'eesh7',
  'ei5pa',
  'eik9e',
  'eiw9a',
  'equ7e',
  'hae1n',
  'hai3y',
  'heem0',
  'ied5e',
  'ied5g',
  'ieko3',
  'iep9i',
  'iequ4',
  'in3oh',
  'iyu7u',
  'jae6g',
  'kori0',
  'ohl4l',
  'ooj6a',
  'ootu9',
  'pei6f',
  'phif0',
  'pohs6',
  'qua2i',
  'quah7',
  'raa8k',
  'sei4d',
  'shae2',
  'shu4f',
  'thai6',
  'ug3ok',
  'yiej8',
];
skills.forEach(function(skill) {
  module.exports.push({
    src: glob.sync('./' + skillPath + '/' + skill + '/*.png'),
    destImage: '../public/static/build/' + skillPath + '/' + skill + '.png',
    destCSS: '../public/static/build/' + skillPath  +'/' + skill + '.json',
    cssTemplate: spritesmithTexturepacker,
    padding: 2,
  });
});
