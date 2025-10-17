angular.module('friendZone', [])
.directive('friendMain', function() {
  return {
    restrict: 'E',
    template: '<div style="border: 2px solid blue; padding: 15px;"><h3>Friend Directive</h3><div ng-repeat="user in friendZone.users"><p>{{user.name}} - {{user.age}}</p><button ng-click="friendZone.selectShowMore(user.name)">Show Photos</button><div ng-if="user.showMore"><div ng-repeat="url in user.fbImgUrls track by $index"><img ng-src="{{url}}" style="width:100px; height:100px; margin:5px; border-radius:8px;"></div><button ng-click="friendZone.closeShowMore(user.name)">Close</button></div></div></div>',
    controller: 'FriendController',
    controllerAs: 'friendZone'
  };
})
.directive('friendSide', function() {
  return {
    restrict: 'E',
    template: '<div style="border: 2px solid green; padding: 15px;"><h4>Friends List</h4><ul style="list-style: none; padding: 0;"><li ng-repeat="user in friendZone.users track by user.name" ng-click="friendZone.chooseFriend(user.name)" style="padding: 10px; margin: 5px; background: #f0f0f0; cursor: pointer;" ng-class="{selected: friendZone.isSelected(user)}">{{user.name}}</li></ul><div ng-if="friendZone.chosenFriend"><img ng-src="{{friendZone.chosenFriend.fbImgUrls[0]}}" style="width: 80px; height: 80px; border-radius: 8px;"></div></div>',
    controller: 'FriendController',
    controllerAs: 'friendZone'
  };
})
.controller('FriendController', function() {
  var friendZone = this;
  friendZone.users = [
    {
      name: 'Nathan', 
      age: 41, 
      messages: [], 
      friends: [], 
      messageToSelected: false,
      matches: [],
      profileSelected: false,
      showMore: false,
      fbImgUrls: [
        "https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/492909373_10109671167764336_7439346610286481458_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YmOP06Sdv0gQ7kNvwEAi_Od&_nc_oc=AdnzOqW7zwMUBQeydt5uWUcbDId_ttRcRegZ7bPtl9oGEliTfRvT8_6Ab6iv6vaoBi8&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=HtR2JB-EiPSgWq_D3T7VFw&oh=00_Aff3dBSdO_gUm63iWL1cKqdU3-ANPVLjO-rniFR_mBJWEQ&oe=68F79DD2"
      ]
    },
    {
      name: 'Shry', 
      age: 30, 
      messages: [], 
      friends: [], 
      messageToSelected: false,
      profileSelected: false,
      showMore: false,
      matches: [],
      fbImgUrls: [
        "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/526112805_10163889654693385_541027183675307286_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3H39-xxsrdoQ7kNvwGRnQxl&_nc_oc=AdmjqfYUQiN_tcF9K_Mw_94hPhsaSQkngSHc-C9x94W-I-POGdHnAZcBq97Dx2bZNrA&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=SEhfdfWnFnzGdA9Mbp8NJg&oh=00_AfdLVtWZfH6_gFAl6D-cwofGLwhVSE97Dr364BVZgP6jLQ&oe=68F7933D"
      ]
    }
  ];
  
  friendZone.message = "";
  friendZone.chosenFriend = friendZone.users[0];

  friendZone.isSelected = function(friend) {
    return friendZone.chosenFriend && friendZone.chosenFriend.name === friend.name;
  };

  friendZone.closeShowMore = function(name) {
    var selectedFriend = friendZone.users.find(function(user) { return user.name === name; });
    if (selectedFriend) {
      selectedFriend.showMore = false;
    }
  };

  friendZone.selectShowMore = function(name) {
    for (var i = 0; i < friendZone.users.length; i++) {
      friendZone.users[i].showMore = false;
    }
    var selectedFriend = friendZone.users.find(function(user) { return user.name === name; });
    if (selectedFriend) {
      selectedFriend.showMore = true;
    }
  };

  friendZone.chooseFriend = function(name) {
    for (var i = 0; i < friendZone.users.length; i++) {
      friendZone.users[i].messageToSelected = false;
      friendZone.users[i].profileSelected = false;
    }
    friendZone.chosenFriend = friendZone.users.find(function(user) { return user.name === name; });
  };

  friendZone.addMessage = function() {
    if(friendZone.chosenFriend && friendZone.message) {
      friendZone.chosenFriend.messages.push({
        recipients: [], 
        from: friendZone.chosenFriend.name, 
        text: friendZone.message
      });
      friendZone.message = "";
    }
  };

  console.log('FriendController loaded with', friendZone.users.length, 'users');
});