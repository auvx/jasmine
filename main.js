

function isLeapYear(n){
    if (n%400===0){
    return true
    }
    else if( (n%100!=0) && (n%4===0))
    {
    return true
    }
    else {
    return false
    }
    
}
console.log("2000:"+isLeapYear(2000))
console.log("1000:"+isLeapYear(1000))
console.log("2012:"+isLeapYear(2012))
console.log("2018:"+isLeapYear(2018))

//反模式
const fibonacci = require('./lib/fibonacci')

for(i=1; i<10;i++)
{
    console.log(fibonacci(i));
}