const StyleDictionaryPackage = require('style-dictionary').extend('config.json');

StyleDictionaryPackage.buildAllPlatforms();

StyleDictionaryPackage.registerTransform({
    type: `value`,
    transitive: true,
    name: `aliases`,
    matcher: (token) => {},
    transformer: (token) => {
      // token.value will be resolved and transformed at this point
    }
  })