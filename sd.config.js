const StyleDictionary= require('style-dictionary');
const tinycolor = require("tinycolor2");


function isShadow(token) {
  return token.type === 'boxShadow';
}

StyleDictionary.registerTransform({
  name: 'shadow/spreadShadow',
  type: 'value',
  matcher: isShadow,
  transformer: (token) => {
    const shadow = Object.values(token.value);
    const [x, y, blur, spread, color] = shadow.map((s) => s.toString());
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }
});

module.exports = {
 
  source: ["tokens.json"],

  platforms: {
    css: {
      transformGroup: `css`,
      buildPath: `build/css/`,
      files: [
        {
          destination: `_colors.css`,
          format: `css/variables`,
          options: { 
            outputReferences: true
          },
          transforms: ["name/cti/kebab"],
          filter: function (token) {
            return token.type === `color`;
          }
        },
        {
          destination: `_sizes.css`,
          format: `css/variables`,
          options: { 
            outputReferences: true
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          }
        },
          {
            destination: `_spacings.css`,
            format: `css/variables`,
            options: { 
              outputReferences: true
            },
            filter: function (token) {
              return token.type === `spacing`;
            }
        },
        {
          destination: `_shadows.css`,
          format: `css/variables`,
          options: { 
            outputReferences: true
          },
          transforms: [`attribute/cti`, `name/cti/kebab`, `shadow/spreadShadow`],
          filter: function (token) {
            return token.type === `boxShadow`;
            
          }
      },

      ]
    }
  }
};

