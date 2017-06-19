module.exports = function() {
  return {
    basePath: '../',
    reporters: [null, null, 'spec'],
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false,
      showSpecTiming: true
    },
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      `app/**/*.spec.js`
      `components/**/*.spec.js`
    ],
    exclude: []
  };
};