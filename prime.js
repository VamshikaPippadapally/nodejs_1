function Prime(arr){
   var n= Number(arr[0]);
   var flag=0;
   for(var i=2;i<n;i++){
       if(n%i==0) {
           flag=1;
           break;
       }
   }
   if(flag==0){
       console.log('prime number');
   }
   else 
   console.log('not a prime number');
 }
 Prime(process.argv.slice(2));