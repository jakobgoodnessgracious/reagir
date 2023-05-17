require('./TReact');
module.exports = {
  presets: ['@babel/preset-env'], //"@babel/preset-react" /react
  //   presets: ['@babel/env'], //"@babel/preset-react" /react
  plugins: [
    // '@babel/plugin-proposal-class-properties',
    // '@babel/plugin-syntax-jsx',
    [
      '@babel/plugin-transform-react-jsx',
      { pragma: 'TReact.createElement', pragmaFrag: 'TReact.createFragment' }, // , pragmaFrag: createFragment },
    ],
  ],
};
