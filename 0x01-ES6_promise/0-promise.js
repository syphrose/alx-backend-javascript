const apiUrl = 'https://api.example.com/data';
getResponseFromAPI(apiUrl)
  .then(data => {
    console.log('API response:', data);
  })
  .catch(error => {
    console.error('Error fetching data from API:', error);
  });
