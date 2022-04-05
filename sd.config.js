const StyleDictionary= require('style-dictionary');
const tinycolor = require("tinycolor2");


const toPx = (value) =>
  styleDictionary.transform["size/remToPx"].transformer({ value });

const shadowMatcher = (prop) => prop.type === "boxShadow";

const webShadowTransformer = (prop) => {
  const {
    blurRadius,
    color,
    offsetX,
    offsetY,
    spreadRadius,
  } = prop.original.value;

  return `${toPx(offsetX)} ${toPx(offsetY)} ${toPx(blurRadius)} ${toPx(
    spreadRadius
  )} ${tinycolor(color).toRgbString()}`;
};

module.exports.shadowCSSTransform = {
  matcher: shadowMatcher,
  name: "shadow/css",
  transformer: webShadowTransformer,
  type: "value",
};

module.exports.shadowjsTransform = {
  matcher: shadowMatcher,
  name: "shadow/js",
  transformer: webShadowTransformer,
  type: "value",
};

module.exports = {
 
  source: ["tokens.json"],

  platforms: {
    js: {
      transformGroup: `js`,
      buildPath: `build/js/`,
      files: [
        {
          destination: `_colors.js`,
          format: `javascript/es6`,
          options: { 
            outputReferences: true
          },
          transforms: ["name/cti/kebab"],
          filter: function (token) {
            return token.type === `color`;
          }
        },
        {
          destination: `_sizes.js`,
          format: `javascript/es6`,
          options: { 
            outputReferences: true
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          }
        },
          {
            destination: `_spacings.js`,
            format: `javascript/es6`,
            options: { 
              outputReferences: true
            },
            filter: function (token) {
              return token.type === `spacing`;
            }
        },
        {
          destination: `_shadows.js`,
          format: `javascript/es6`,
          options: { 
            outputReferences: true
          },
          transforms: [`attribute/cti`, `name/cti/kebab`, `shadow/css`, `shadow/js`],
          filter: function (token) {
            return token.type === `boxShadow`;
            
          }
      },

      ]
    }
  }
};

