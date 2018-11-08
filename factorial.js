function Factorial(arr){
    var num= Number(arr[0]);
    var count=1;
    var fact = 1;
    while(count<= num)
    {
        fact = fact * count;
        count++;
    }
    console.log(fact);

    }
 Factorial(process.argv.slice(2));