const apiUrl = "https://api.example.com/data";

fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));