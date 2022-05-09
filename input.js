//get input from the user
process.stdout.write("Hello, User");
//data is the listener + a callback function 
process.stdin.on('data', function(answer)
{
  console.log(answer.toString());
  process.exit();
})



