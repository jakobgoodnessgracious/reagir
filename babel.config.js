module.exports = {
  presets: ['@babel/preset-env'], //"@babel/preset-react" /react
  //   presets: ['@babel/env'], //"@babel/preset-react" /react
  plugins: [
    // '@babel/plugin-proposal-class-properties',
    // '@babel/plugin-syntax-jsx',
    [
      '@babel/plugin-transform-react-jsx',
      { pragma: 'Reagir.createElement', pragmaFrag: 'Reagir.createFragment' }, // , pragmaFrag: createFragment },
    ],
  ],
};
