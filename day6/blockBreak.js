events.on( 'block.BlockBreakEvent', function( evt ) { 
    evt.player.sendMessage( evt.player.name + ' broke a ' + evt.block.getType() + ' block!');
} );
