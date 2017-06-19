angular.module('feedApp', [
  'video-item'
]).controller('feedController', function () {
  this.data = {
    cardTitle: 'title',
    views: 300,
    video: 'src'
  };
});