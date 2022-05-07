exports.greetAll = function () {
    var players = server.onlinePlayers;
    var player, i;
    for ( i = 0; i < players.length; i++) {
        player = players[i];
        player.sendMessage('Hello, ' + player.name);
    }
};
