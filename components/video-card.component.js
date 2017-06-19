require('./video-card.less');

angular.module('video-item')
.component('videoCard', {
  template: require('./video-card.html'),
  bindings: {
    cardTitle: '<',
    views: '<',
    video: '<'
  },
  controller: function () {

  }
});