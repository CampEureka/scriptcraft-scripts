exports.twoCubes = function(size1, size2 ) {
    size1 = size1 || 4;
    size2 = size2 || size1 || 6;
    var d = new Drone;
                    
    d.up(1); // this makes it so we don’t have to make a block beforehand
    d.box(blocks.stone, size1, size1, size1);
    d.right(size1 + 5); // move the drone 5 blocks to the right of the 1st cube
    d.box(blocks.oak, size2, size2, size2);
};
