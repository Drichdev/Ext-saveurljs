// Capture the URL of the current page
let currentUrl = window.location.href;

// Log the URL to ensure it is captured
console.log("Current URL captured: " + currentUrl);

// Send the URL to the server
fetch('http://localhost:3000/receive', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({url: currentUrl})
})
    .then(response => response.text())
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
