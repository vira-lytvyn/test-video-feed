console.log('test from component spec');

require('./components/video-card.component.js');

describe('Video card', function () {
  var videoCardCtrl;

  beforeEach(angular.mock.module('video-item'));

  beforeEach(angular.mock.inject(function ($componentController) {
    videoCardCtrl = $componentController('videoCard');
  }));
});