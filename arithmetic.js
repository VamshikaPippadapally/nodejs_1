function Arithmetic(arr){
    var number1= Number(arr[0]);
    var number2= Number(arr[1]);
    add = number1+number2;
    sub = number1-number2;
    mul = number1*number2;
    div = number1/number2;
    console.log('additon of',number1,'and',number2,'is',add) ;
    console.log('subtraction of',number1,'and',number2,'is',sub) ;
    console.log('multiplication of',number1,'and',number2,'is',mul) ;
    console.log('division of',number1,'and',number2,'is',div) ;
    
  }
 Arithmetic(process.argv.slice(2));
 