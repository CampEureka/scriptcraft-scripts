 var roof = function(d,floors) {
    d.move('home');
    d.up(6+(4*(floors)));
    d.prism0(blocks.oak,20,20);
    d.fwd(12);
    d.turn();
    d.box(blocks.glass,6,6,1);
    d.fwd(19);
    d.turn(2);
    d.left(5);
    d.box(blocks.glass,6,6,1);
 }

exports.house = function(numFloors) {
    numFloors = numFloors || 5;
    var curFloor;
    var d = new Drone();
    d.chkpt('home');
    d.box(blocks.diamond,20,1,20);
    d.up();
    d.box0(blocks.stone,20,5,20);
    d.right();
    d.fwd();
    d.up(4);
    d.box0(blocks.torch,18,1,18);
    d.move('home');
    d.fwd(10);
    d.up();
    d.turn();
    d.door2();
    d.move('home');
    for(curFloor = 0; curFloor < numFloors; curFloor++)
    {
        d.up(6+(curFloor*4));
        d.box0(blocks.stone,20,4,20);
        d.fwd();
        d.right();
        d.box(blocks.oak,18,1,18);
        d.move('home');
    }
    roof(d,numFloors);
};

