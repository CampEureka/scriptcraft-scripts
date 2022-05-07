exports.guessNum = function(num) {
    var myNum = 15;
    if(num == myNum)
    {
        self.sendMessage("Correct! You guessed the Number!");
    }
    else
    {
        self.sendMessage("Wrong Number! Please try agin!");
    }
};
