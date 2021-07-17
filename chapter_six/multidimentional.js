
var arr =
    [
        [76,56,456,45],
        [565,345,3245,364],
        [243,64,235,54],
        [765,23,621,543,24]
    ]

    console.log(arr[1])

    for(var i=0;i<arr.length;i++)
    {
       for (var j=0;j<arr[i].length;j++)
        {
            console.log('element '+i+' :'+arr[i][j])
        }
        console.log('\n')
    }
