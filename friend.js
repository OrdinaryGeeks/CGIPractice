


angular.module('friendZone', ['ngMaterial']).directive('friendContent', function(){
  return {
    controller: 'FriendController',
    controllerAs: 'friendZone',
    restrict: 'E',
    templateUrl: 'my-friend-directive.html',
  }}).controller('FriendController', function() {
      var friendZone = this;
      friendZone.users = [
        {name: 'Nathan', age: 41, messages: [], friends: [], messageToSelected: false, toggleMessageSelected: function() {
            this.messageToSelected = !this.messageToSelected;

    }, 
    matches : [],
    profileSelected: false,
    showMore: false,
   fbImgUrls: [
          "https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/492909373_10109671167764336_7439346610286481458_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YmOP06Sdv0gQ7kNvwEAi_Od&_nc_oc=AdnzOqW7zwMUBQeydt5uWUcbDId_ttRcRegZ7bPtl9oGEliTfRvT8_6Ab6iv6vaoBi8&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=HtR2JB-EiPSgWq_D3T7VFw&oh=00_Aff3dBSdO_gUm63iWL1cKqdU3-ANPVLjO-rniFR_mBJWEQ&oe=68F79DD2",
          "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/480964099_10109466356482786_1442497873950766045_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4qL2g2zUT0MQ7kNvwH2EwKb&_nc_oc=AdkDDe09gGwGWk-35uLF89tDDbBNB64hoBkieGKy9VJ7-IC7nXLuLfdpNv77FPSobWk&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=c0P_wxtTrbHrq2YXJIEidg&oh=00_AfeNoON2mYAZNHIO1IMD44Mhz9FcGbMUv56shm61xnpmXA&oe=68F77EBA",
          "https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/486681231_10109557250310826_5020835080124513701_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vZkFlkHGz2gQ7kNvwFHu0w1&_nc_oc=Adnr7gJI7Wicq9QKedRRpw8sw-DQOYqd7rviYrI-R4Jbazx_XCUO0ELeQsu8nDmaqXU&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=a5roB1U6fbJGwAfD5mkXew&oh=00_AfeOwxd5UH9Gqq2peEHSCMmDlw1OwBN6nWLE4qBIex1dLA&oe=68F78BFB"
        ]},
        {name: 'Lashondra', age: 28, messages: [], friends: [], messageToSelected: false, toggleMessageSelected: function() {
            this.messageToSelected = !this.messageToSelected;
    },
    profileSelected:false,
    showMore:false,
    matches:[],
    fbImgUrls:[
        "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/506624110_24346825594935179_3763995262635441162_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=MUCWVAZDi5AQ7kNvwEmE0LM&_nc_oc=AdlBlaOfmdGMw6CcqOwc_3X2ZBdP3yOgidLGA2rt8Xoza47fXkXXCJW-dLcga6VDq04&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=mk6BA4SDq6MuQWDoTgCS3A&oh=00_Affu15aRJdurZ9ROtTdT-5hpYXXnlrFDhbQd0csTsRnEIA&oe=68F8067F",
        "https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/475746932_9664076623636652_4985007692258853728_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=c_Rgye_ig1MQ7kNvwEte9ui&_nc_oc=AdlN5UsTdoDJLLfwIgnq08mLFF__GSJhvru-fMfx_W-lVuRY9H3Cs1-AHs5PdOkseX8&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=BwakVYed3haqqYxgXHgrlw&oh=00_Affy9Tup0aifQl2CeXBcVT87_40T5-v7SXatEBdYhNDQuQ&oe=68F7F811",
        "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/554573925_25182694458014951_8047609596986063900_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s3RysthNk74Q7kNvwG60bP2&_nc_oc=AdmBm8XZtbBYINbpkiD1edMuV0jQuyz5Bv_Hgb69_ORaqk57FD65BmJPLVu3hV5xzCc&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=Rh1TKbKxMNbMYNHNSKVNcQ&oh=00_AffulEKipXwGs3jP7QlcDlhkD-Y0kDOwF9iUJHiFvSkmdw&oe=68F80E29",
        "https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/554199543_25182694554681608_5201334363514838079_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W5dqOl8VUXsQ7kNvwH3R0tX&_nc_oc=Adn4ZtX9Px56YCYRJ_Q5zMl4djmb1OSlJ81_OvNv7b5bLdLm1hzmUO8YI219jqHEVIE&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=bk4J5GUaZ41OOnMsMRjymQ&oh=00_AfdYl5Pt-OeuTKVKf4UOzQ79s5kP7uAFJbr58eoC7x23jQ&oe=68F8146E"
    ]},
    {name: 'Shry', age: 30, messages: [], friends: [], messageToSelected: false, toggleMessageSelected: function() {
        this.messageToSelected = !this.messageToSelected;
    },
    profileSelected:false,
    showMore:false,
    matches:[],
fbImgUrls:[
    "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/526112805_10163889654693385_541027183675307286_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3H39-xxsrdoQ7kNvwGRnQxl&_nc_oc=AdmjqfYUQiN_tcF9K_Mw_94hPhsaSQkngSHc-C9x94W-I-POGdHnAZcBq97Dx2bZNrA&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=SEhfdfWnFnzGdA9Mbp8NJg&oh=00_AfdLVtWZfH6_gFAl6D-cwofGLwhVSE97Dr364BVZgP6jLQ&oe=68F7933D",
    "https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/518270107_10163718267168385_330686571862116302_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3vSBEsJotI4Q7kNvwF_qEr1&_nc_oc=AdmJPUfDJOkaqjAqjVkBdoGRg38gYEbZl32bhFxvjHTteJQyUWeJ5Gfi03mgIT3AoA0&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=tWB2XNkXZNjo7G7Mwjv4Gw&oh=00_AffQEI9lnulEEK4s0tfPU_7fru-jwQuF1nXaY6XDWpe3HA&oe=68F79409"
]}
  ];
  
  friendZone.message = "";
  friendZone.chosenFriend = null;
  friendZone.matchedFriendSelected = null;


  friendZone.getMessagesForChosenMatch= function(){



    if(friendZone.matchedFriendSelected)
    {
        var recipients = [friendZone.matchedFriendSelected.name, friendZone.chosenFriend.name];

    }

    return friendZone.chosenFriend.messages.filter(function(message){

      return (message.recipients.includes(friendZone.matchedFriendSelected.name) && message.from === friendZone.chosenFriend.name) ||
             (message.recipients.includes(friendZone.chosenFriend.name) && message.from === friendZone.matchedFriendSelected.name);
    })
  }
  friendZone.setMatchedSelectedFriend = function(name){
    alert("Looking for name for matched selected " + name);

    friendZone.matchedFriendSelected = friendZone.users.find(function(user) { return user.name === name; });
  }
  friendZone.isSelected = function(friend) {
    return friendZone.chosenFriend && friendZone.chosenFriend.name === friend.name;
  };

  friendZone.closeShowMore = function(name) {
    var selectedFriend = friendZone.users.find(function(user) { return user.name === name; });
    if (selectedFriend) {
      selectedFriend.showMore = false;
    }
  };
  friendZone.setMatch = function(name) {
    var matchedFriend = friendZone.users.find(function(user) { return user.name === name; });
    if (matchedFriend && friendZone.chosenFriend.matches.indexOf(matchedFriend) === -1) {
      friendZone.chosenFriend.matches.push(matchedFriend);
      console.log(matchedFriend.fbImgUrls);
      alert("You have matched with " + name + "! You can now message them.");
    }
  };

  friendZone.getMatchedFriends = function() {

    var filteredFriends = friendZone.users.filter(function(user) {
      return friendZone.chosenFriend && friendZone.chosenFriend.matches.includes(user.name);
    });

    return filteredFriends;
  }
  friendZone.resetAll= function() {

    for (var i = 0; i < friendZone.users.length; i++) 
      {
        friendZone.users[i].messageToSelected = false;
        friendZone.users[i].profileSelected = false;
        friendZone.users[i].showMore = false;
          friendZone.matchedFriendSelected = null;
      }
  }
  friendZone.selectShowMore = function(name) {
    for (var i = 0; i < friendZone.users.length; i++) {
      friendZone.users[i].showMore = false;
    }
    var selectedFriend = friendZone.users.find(function(user) { return user.name === name; });
    if (selectedFriend) {
      selectedFriend.showMore = true;
    //  friendZone.chosenFriend = selectedFriend;
    }
  };

  friendZone.selectProfile = function(name) {
    for (var i = 0; i < friendZone.users.length; i++) {
      friendZone.users[i].profileSelected = false;
    }
    var selectedFriend = friendZone.users.find(function(user) { return user.name === name; });
    if (selectedFriend) {
      selectedFriend.profileSelected = true;
      friendZone.chosenFriend = selectedFriend;
    }
  };
  friendZone.addFriend = function() {
    if (friendZone.friendName && friendZone.friendName.trim()) {
      friendZone.users.push({
        name: friendZone.friendName.trim(), 
        age: 0, 
        messages: [], 
        friends: [], 
        matches: [],
        messageToSelected: false,
        profileSelected: false,
        fbImgUrls: [], // Empty array for new friends - they can add URLs later
        toggleMessageSelected: function() {
          this.messageToSelected = !this.messageToSelected;
        }
      });
      friendZone.friendName = '';
    }
  };
  
  friendZone.chooseFriend = function(name) {
   // alert("Choosing friend: " + name);

   friendZone.resetAll();
  
    friendZone.chosenFriend = friendZone.users.find(function(user) { return user.name === name; });
  };

  friendZone.addMessage = function() {
    console.log("Adding message");
    if(friendZone.chosenFriend)
    {
        var sendToList = friendZone.users.filter(function(user) { return user.messageToSelected; }).map(function(user) { return user.name; });
      //  sendToList.push(friendZone.chosenFriend.name);
        console.log(sendToList);
        var text = friendZone.message;
        console.log(text);
        var allRecipients = [];

        if(sendToList && sendToList.length > 0 && text && text.length > 0)
        {
            for (var j = 0; j < sendToList.length; j++) {
                var name = sendToList[j];
                var user = friendZone.users.find(function(u) { return u.name === name; });
                if(user)
                {
                    var allRecipients = sendToList.slice();
           //         allRecipients.push(friendZone.chosenFriend.name);
                    user.messages.push({recipients: allRecipients, from: friendZone.chosenFriend.name, text: text});
                }
            }
        }
       
        var allRecipients = sendToList.slice();
       // allRecipients.push(friendZone.chosenFriend.name);

        friendZone.chosenFriend.messages.push({recipients: allRecipients, from: friendZone.chosenFriend.name, text: text});
        console.log(friendZone.chosenFriend.messages, "Messages");
        friendZone.message = "";
        friendZone.sendToList = [];
        console.log("done with addMessage");
    }
  };


  
  friendZone.getMessageGroupParticipants = function(name){
    user = friendZone.users.find(function(user) { return user.name === name; });
    return groupChatName = user.messages.map(function(message) { return message.sendToList; }).reduce(function(acc, curr) {
         for (var k = 0; k < curr.length; k++) {
             var name = curr[k];
             if (acc.indexOf(name) === -1) {
                 acc.push(name);
             }
         }
         console.log(acc);
         return acc;
     }, []);
  };

  friendZone.getMessagesForUser = function(name, recipients){
    var user = friendZone.users.find(function(user) { return user.name === name; });
    if(user)
    {
        return user.messages.filter(function(message) {
            return message.sendToList.every(function(name) { return recipients.indexOf(name) !== -1; });
        }
    );
        }
    return [];
  };

  // Helper function to get recipients excluding the chosen friend
  friendZone.getRecipientNames = function(message) {
    console.log("getRecipientNames called with message:", message);
    console.log("message.recipients:", message.recipients);
    console.log("friendZone.chosenFriend:", friendZone.chosenFriend);
    
    if (!message || !message.recipients || !friendZone.chosenFriend) {
      console.log("Missing data - returning empty string");
      return '';
    }
    var filteredRecipients = [];
    for (var i = 0; i < message.recipients.length; i++) {
        filteredRecipients.push(message.recipients[i]);
    }
    console.log("filteredRecipients:", filteredRecipients);
    return filteredRecipients.join(', ');
  };
});