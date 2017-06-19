require('./video-card.less');

angular.module('content-items')
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