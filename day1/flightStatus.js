exports.flightStatus = function ( player ) {
    if ( player.flying ) { 
         player.sendMessage( 'Hey, You are flying!' );
    } else {
         player.sendMessage( 'You are not flying.' );
    }
}
