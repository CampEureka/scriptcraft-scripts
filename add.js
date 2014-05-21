exports.add = function(num1, num2 ) {
    num1 = num1 || 1;
    num2 = num2 || num1 || 6;
    var myNum = 15;
    var myName = "deathfudge";
    var result = num1 + num2 + myNum;
    echo("The result for " + myName + " is: " + result);
};
