const { override, fixBabelImports } = require('customize-cra');
console.log('sss');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
);
