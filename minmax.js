
function MinMax(arr)
{
    var minimum=Number(arr[0]);
    var maximum=Number(arr[0]);
    for(var i=1;i<arr.length;i++)
    {
        var temp=Number(arr[i]);
        if(temp<minimum)
        minimum=temp;
        if(temp>maximum)
        maximum=temp;
    }
    console.log("Max:"+maximum+", Min:"+minimum);
}
MinMax(process.argv.slice(2));