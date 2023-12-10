asyncLoop(
{
  limit: 5,
  asyncLoopFunction: function(done, i, prevResult) 
{
    setTimeout(function() 
{
      console.log("Starting Iteration: ", i);
      console.log("Previous Result: ", prevResult);
      var result = i * 100;
      done(result);
}, 1000);
},
  initialArgs: 'Hello',
  callback: function(result) {
    console.log('All Done. Final result: ', result);
}
}
);

function asyncLoop(obj) 
{
  var limit = obj.limit,
    asyncLoopFunction = obj.asyncLoopFunction,
    initialArgs = obj.initialArgs || {},
    callback = obj.callback,
    i = 0;

  function done(result) 
{
    i++;
    if (i < limit) 
{
      triggerAsync(result);
}
else 
{
      callback(result);
}
}

  function triggerAsync(prevResult) {
    asyncLoopFunction(done, i, prevResult);
}

  triggerAsync(initialArgs); // init
}