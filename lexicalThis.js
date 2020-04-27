const lex5 ={
    aFunc: function(){
        console.log(this);
        return function(){
            console.log(this);
        }
    }
}

console.log(lex5);