let myNumber=0.0989;
console.log(typeof myNumber);

if (myNumber%3==0)
{console.log('Gen');}

if(myNumber%5==0)
{console.log('Buzz');}

if(myNumber%3*5==0)
{console.log('GenBuzz');}

else {
    console.log(myNumber);
}


let storeItem = 'shoes';
 
if (storeItem === 'shoes') {
  console.log('Shoes are $50');
} else if (storeItem === 'Jeans'){
  console.log('Jeans are $25');
} else if (storeItem === 'Hat'){
    console.log('Hat is $15');
  } 
  else if (storeItem === 'Socks'){
    console.log('Socks are $2');
  } 
else {
  console.log('Invalid item');
}

Math.floor(Math.random()*50);