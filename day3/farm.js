exports.farm = function(length, width) {
  length = length || 10;
  width = width || length || 15;
  var d = new Drone;

  d.up(1);
  d.chkpt('base');
  d.box0(blocks.fence, length, 1, width);
  d.right(length/2);
  d.box(blocks.gate, 1, 1, 1);
  d.fwd(width);
  d.box(blocks.gate, 1, 1, 1);
  d.move('base');
  d.right(2);
  d.fwd(2);
  d.oak();
  d.move('base');
  d.right(length-3);
  d.fwd(1);
  d.garden(2,width-2);
}
