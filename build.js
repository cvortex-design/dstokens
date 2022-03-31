// build.js
const StyleDictionary = require('style-dictionary');

const myStyleDictionary = StyleDictionary.extend({
  // configuration
});

myStyleDictionary.buildAllPlatforms();

// You can also extend Style Dictionary multiple times:
const myOtherStyleDictionary = myStyleDictionary.extend({
  // new configuration
});

myOtherStyleDictionary.buildAllPlatforms();