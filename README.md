# js1-resit-adrian

## Project Overview
This project is a resit submission for the JavaScript 1 course at Noroff. The goal is to build an interactive online store using the GameHub API. The site dynamically fetches game data and lets users browse, view details, add to cart, and complete a checkout flow.

## Features
- Homepage: Lists all products retrieved from the GameHub API.
- Product Page: Shows full details of a selected product using its ID.
- Checkout Page: Displays all cart items with option to remove.
- Confirmation Page: Displays a thank you message after checkout.
- Cart functionality: Items added to the cart are stored in localStorage.

## API
This project uses the GameHub API provided by Noroff.

Authorization headers used in all API requests:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRyaW5nOTMiLCJlbWFpbCI6ImFkcmluZzAzNDcyQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzQ5ODI1NDgyfQ.WD6fHl9drwhyGLLftcHlSZUboexTDRZfVubjP0OoHms  
X-Noroff-API-Key: 3da5c886-3530-4ebe-82f2-29b07af7606e

## Folder Structure
The project is structured like this:

project/  
- index.html  
- /product/index.html  
- /checkout/index.html  
- /checkout/confirmation/index.html  
- /css/style.css  
- /js/api.js  
- /js/cart.js  
- /js/product.js  
- /js/utils.js  

## Development Process
JavaScript uses async/await for all API calls.  
No hard-coded product data is used; all content is fetched from the API.  
Errors are handled with alerts and a loading state is shown where needed.  
All console.log statements are removed before delivery.  
Code is modular, formatted, and organized.

## Reflection
A written reflection PDF will be included in the submission, describing planning, implementation, challenges, and what I learned during the process.

## License
This project was created only for educational use as part of a resit assignment at Noroff.
