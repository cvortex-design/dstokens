const StyleDictionaryPackage = require('style-dictionary').extend('config.json');


StyleDictionaryPackage.registerTransform({
    name: 'shadow/scss',
    type: 'value',
    matcher: function(prop) {
      return prop.attributes.category === 'shadow';
    },
    transformer: function(prop) {
      // destructure shadow values from original token value
      const {
        x,
        y,
        blur,
        spread,
        color,
        alpha
      } = prop.original.value
      
      // convert hex code to rgba string
      const shadowColor = tinycolor(color)
      shadowColor.setAlpha(alpha)
      shadowColor.toRgbString()
      
      return `${x}px ${y}px ${blur}px ${spread}px ${shadowColor}`
    }
  });