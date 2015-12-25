exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['duke_spec.js'],
  rootElement: '.container'
};
