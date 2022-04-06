module.exports = {
  source: ["tokens.json"],

  platforms: {

    //SCSS

    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "shadow/css",
      ],
      buildPath: "tokens/scss/",
      files: [
        //Sizes
        {
          destination: "_sizes.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          },
        },
        //Colors
        {
          destination: "_colors.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `color`;
          },
        },
        //Spacings
        {
          destination: "_spacings.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `spacing`;
          },
        },
        //Shadows
        {
          destination: "_shadows.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `boxShadow`;
          },
        },
        //Opacity
        {
          destination: "_opacity.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `opacity`;
          },
        },
        //Radii
        {
          destination: "_radii.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `borderRadius`;
          },
        },
        //Typography
        {
          destination: "_typography.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `typo`;
          },
        },
      ],
    },

    //CSS

    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "shadow/css",
      ],
      buildPath: "tokens/css/",
      files: [
        //Sizes
        {
          destination: "sizes.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          },
        },
        //Colors
        {
          destination: "colors.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `color`;
          },
        },
        //Spacings
        {
          destination: "spacings.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `spacing`;
          },
        },
        //Shadows
        {
          destination: "shadows.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `boxShadow`;
          },
        },
        //Opacity
        {
          destination: "opacity.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `opacity`;
          },
        },
        //Radii
        {
          destination: "radii.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `borderRadius`;
          },
        },
        //Typography
        {
          destination: "typography.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `typo`;
          },
        },
      ],
    },

    //JS

    ts: {
      transformGroup: "js",
  
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "shadow/css",
      ],
      buildPath: "tokens/ts/",
      files: [
        //Sizes
        {
          destination: "sizes.js",
          format: "javascript/es6",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          },
        },
  
        {
          destination: "sizes.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `size`;
          },
        },
  
        //Colors
        {
          destination: "colors.js",
          format: "javascript/es6",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `color`;
          },
        },
  
        {
          destination: "colors.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `color`;
          },
        },
  
        //Spacings
        {
          destination: "spacings.js",
          format: "javascript/es6",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `spacing`;
          },
        },
  
        {
          destination: "spacings.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `spacing`;
          },
        },
  
        //Shadows
        {
          destination: "shadows.js",
          format: "javascript/es6",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `boxShadow`;
          },
        },
  
        {
          destination: "shadow.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `boxShadow`;
          },
        },
  
        //Opacity
        {
          destination: "opacity.js",
          format: "javascript/es6",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `opacity`;
          },
        },
  
        {
          destination: "opacity.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `opacity`;
          },
        },
  
        //Radii
        {
          destination: "radii.js",
          format: "javascript/es6",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `borderRadius`;
          },
        },
  
        {
          destination: "radii.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.type === `borderRadius`;
          },
        },
  
        //Typography
        {
          destination: "typography.js",
          format: "javascript/es6",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `typo`;
          },
        },
  
        {
          destination: "typography.d.ts",
          format: "typescript/es6-declarations",
          options: {
            outputReferences: true,
          },
          filter: function (token) {
            return token.attributes.category === `typo`;
          },
        },
  
  
      ],
    },

  },
};
