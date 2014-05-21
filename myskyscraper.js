exports.myskyscraper = function(floors) {
    var i;
    var d = new Drone();
    if(typeof floors == 'undefined')
    {
        floors = 10;
    }
    d.chkpt('myskyscraper'); //saves the drone position so it can return here later
    for(i=0; i < floors; i++)
    {
        d.box(blocks.iron, 20, 1, 20)
            .up()
            .box0(blocks.glass_pane, 20, 3, 20)
            .up(3);
    }
    return d.move('myskyscraper');
};


