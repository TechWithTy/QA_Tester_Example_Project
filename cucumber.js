module.exports = {
    default: {
      require: ['tests/src/*.js'],
      format: ['progress', 'json:reports/cucumber_report.json']
    }
  };
  