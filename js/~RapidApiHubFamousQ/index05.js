self.addEventListener('fetch', event => {
  // Intercept form submission requests
  if (event.request.method === 'POST' && event.request.headers.get('Content-Type') === 'application/x-www-form-urlencoded') {
    event.respondWith(handleFormSubmission(event.request));
  }
});

async function handleFormSubmission(request) {
  // Parse the form data from the request body
  const formData = await request.formData();

  // Modify the form data
  formData.append('extra-field', 'extra-value');

  // Create a new request with the modified form data
  const newRequest = new Request(request.url, {
    method: request.method,
    headers: request.headers,
    body: new URLSearchParams(formData)
  });

  // Make the modified request to the server
  return fetch(newRequest);
}