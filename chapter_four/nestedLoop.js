var j,i,result2='',result3=''
for( i=1;i<6;i++)
{
    var result=''
    for( j=1;j<=i;j++)
    {
        result+=j+' '
       
    }
   result2+='\n'+result
}
console.log(result2)
for( i=5;i>0;i--)
{
    var result='            '
    for( j=i;j>=1;j--)
    {
     
       
        result+=j+" "
    }
    
   result3+=result+'\n'
}
console.log(result3)

//BREAK

//continue
for(var i=0;i<10;i++)
{
    if(i==3 || i==7)continue
    console.log(i+" ")
}