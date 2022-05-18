const facebookProfile = {
    name: 'Mindaugas',
    friends: 0,
    messages: [],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1)
    },
    addFriends: function () {
        facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend: function () {
        facebookProfile.friends--;
    }
};




console.log(facebookProfile.messages);
facebookProfile.postMessage("My first message");
console.log(facebookProfile.messages);
facebookProfile.postMessage("Sveiki visi");
console.log(facebookProfile.messages);
facebookProfile.postMessage("Sveiki visi2");
console.log(facebookProfile.messages);
//
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);

console.log('Friends:', facebookProfile.friends);
facebookProfile.addFriends();
facebookProfile.addFriends();
console.log('Friends:', facebookProfile.friends);
facebookProfile.removeFriend();
console.log('Friends:', facebookProfile.friends);
