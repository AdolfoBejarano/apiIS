fetch('https://magravis.free.beeceptor.com')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
	console.log('text:',data.text);
	console.log('id:',data.id);
	console.log('categ:',data.category);
	console.log('author:',data.author);
	
	
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });