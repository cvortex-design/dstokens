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

module.exports.shadowSCSSTransform = {
  matcher: shadowMatcher,
  name: "shadow/scss",
  transformer: webShadowTransformer,
  type: "value",
};

module.exports = {
 
  source: ["tokens.json"],

  platforms: {
    scss: {
      transformGroup: `scss`,
      buildPath: `build/scss/`,
      files: [
        {
          destination: `_colors.scss`,
          format: `scss/variables`,
          options: { 
            outputReferences: true
          },
          transforms: ["name/cti/kebab"],
          filter: function (token) {
            return token.type === `color`;
          }
        },
        {
          destination: `_sizes.scss`,
          format: `scss/variables`,
          options: { 
            outputReferences: true
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          }
        },
          {
            destination: `_spacings.scss`,
            format: `scss/variables`,
            options: { 
              outputReferences: true
            },
            filter: function (token) {
              return token.type === `spacing`;
            }
        },
        {
          destination: `_shadows.scss`,
          format: `scss/variables`,
          options: { 
            outputReferences: true
          },
          transforms: [`attribute/cti`, `name/cti/kebab`, `shadow/css`, `shadow/scss`],
          filter: function (token) {
            return token.type === `boxShadow`;
            
          }
      },

      ]
    }
  }
};

