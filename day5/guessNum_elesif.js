exports.guessNum_elseIf = function(num) {
    var myNum = 15;
    if(num == myNum)
    {
        self.sendMessage("Correct! You guessed the Number!");
    }
    else if (num < myNum)
    {
        self.sendMessage(num + " is too LOW! Please try agin!");
    }
    else if (num > myNum)
    {
        self.sendMessage(num + " is too HIGH! Please try agin!");
    }
    else
    {
        self.sendMessage("Wrong Number! Please try agin!");
    }
};
