exports.toggleFlight = function(player) {
    if(player.allowFlight)
    {
        player.allowFlight = false;
        player.sendMessage("Turning OFF Flight for " + player.name);
    }
    else
    {
        player.allowFlight = true;
        player.sendMessage("Turning ON Flight for " + player.name);
    }
};


