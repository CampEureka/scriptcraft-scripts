exports.noFlyAllOP = function () {
    if(self.op)
    {
        var players = server.onlinePlayers;
        var player, i;
        for ( i = 0; i < players.length; i++) {
            player = players[i];
            player.allowFlight = false;
        }
    }
    else
    {
        self.sayMessage("Must be operator to use this function");
    }
};
