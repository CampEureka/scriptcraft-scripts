// Builds a tunnel with train tracks and torches.
exports.traintunnel = function()
{
  var d=new Drone();
  d.chkpt('begin');
  d.box(blocks.stone,1,4,100);
  d.right(4);
  d.box(blocks.stone,1,4,100);
  d.move('begin'); 
  d.up(4);
  d.box(blocks.stone,5,1,100);
  d.move('begin'); 
  d.right(2);
  d.box(blocks.powered_rail,1,1,100);
  d.right(1);
  d.box(blocks.torch_redstone,1,1,100);
  d.move('begin');
  d.right(1);
  d.box(blocks.torch,1,1,100);
}
