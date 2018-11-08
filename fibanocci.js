function Fibanocci(arr){
    var num= Number(arr[0]);
    var a = 0;
    var b = 1;
    var c;
    while(a<num)
    {
        console.log(a);
        c = a + b;
        a=b;
        b=c;
    }
    }
 Fibanocci(process.argv.slice(2));