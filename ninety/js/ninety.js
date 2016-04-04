(function() {
  angular.module("ninety", [])

  .controller("bandInfo", ['$http', '$scope', 'soundservice', function($http, $scope, soundservice) {

    var ninetystuff = this;
    ninetystuff.data = [];
    soundservice.getInfo().then(function(data) {
      ninetystuff.data = data;
    });
  }])
  .controller("music", ['$scope', 'soundservice', '$sce', function($scope, soundservice, $sce) {

      var ninetyshit = this;
      ninetyshit.data = [];

      SC.initialize({
        client_id: "b4809581f93dc4d3308994300923b660"
      });

 soundservice.getTracks().then(function(tracks) {
        ninetyshit.data = tracks;
      });

      $scope.playTrack = function(track) {
        SC.oEmbed(track, {
          auto_play: true,
          maxheight: 200
        }).then(function(embed) {
$('#player').empty().append(embed.html);
        });
      };

    }])
    .factory('soundservice', function($q, $http) {
      SC.initialize({
        client_id: "b4809581f93dc4d3308994300923b660"
      });

      var info = {
        'getInfo': function() {
          var d = $q.defer();
          SC.get('/users/23749941').then(function(data) {
            d.resolve(data);
          })
          return d.promise;
        },
        'getTracks': function() {
          var d = $q.defer();
          SC.get('/users/23749941/tracks').then(function(tracks) {
            d.resolve(tracks);
          })
          return d.promise;
        }
      }
      return info;
    })

  .directive('scrollToPlayer', function() {
    return {
      restrict: 'A',
      link: function(scope, $elm, attr) {
        $elm.on('click', function() {
          $('html, body').animate({
            scrollTop: 400
          }, 1000);
        });
      }
    }
  });
})();
