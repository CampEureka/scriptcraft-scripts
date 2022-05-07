exports.helloWorld = function()
{
    echo("Hello World.");
};

exports.hello2 = function()
{
    helloWorld();
    echo("Look we called helloWorld()");
};
