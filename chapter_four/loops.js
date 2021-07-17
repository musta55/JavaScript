
for(var iterator=1;iterator<10;iterator++)
{
    console.log(`kire mama ${iterator} bar biri khaba naki`)
}

//while

var i=0
while(i<10)
{
    console.log("musta "+ i)
    i++
}
var isRunning=true;
while(isRunning)
{
    var rand=Math.floor(Math.random()*10 +1)
    if(rand==9)
    {
        console.log('Kire mama ,prize paya geso')
        isRunning =false
    }
    else{
        console.log('tui ahsolei kufa ' +rand)
       
    }
}

//Do while
