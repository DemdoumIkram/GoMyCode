var sum=0;
process.argv.slice(2).forEach(element => 
sum=sum+Number(element)
);
console.log(sum);
