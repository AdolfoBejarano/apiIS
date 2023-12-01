fetch('https://html.spec.whatwg.org').then(response => {
  const reader = response.body.getReader();
  
  reader.read().then(function process(result) {
    if (result.done) return;
    console.log(`Received a ${result.value.length} byte chunk of data`);
    return reader.read().then(process);
  }).then(() => {
    console.log('All done!');
  });
});