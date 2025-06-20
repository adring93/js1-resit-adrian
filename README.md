# js1-resit-adrian

## 📚 Project Overview  
This is my resit submission for the JavaScript 1 course at Noroff. The task was to build an interactive online store using the GameHub API. The site dynamically fetches game data and allows users to browse, filter, view details, add products to the cart, and complete a checkout flow.

## 🚀 Features  
- Homepage: Lists all products fetched from the GameHub API.  
- Filtering: Users can filter games by genre/category (e.g. RPG, Action).  
- Product Page: Displays full details of a selected product based on its ID.  
- Cart: Users can add/remove items. Cart is stored in localStorage.  
- Checkout Page: Shows cart summary with total price and allows removal.  
- Confirmation Page: Simple thank-you message after checkout.  
- Error Handling & Loading States: Alerts and loading indicators are shown where needed.  
- Responsive Design: Fully mobile-friendly using media queries.  

## 🔌 API  
This project uses the Noroff GameHub API.

## 🗂 Folder Structure  
project/  
├── index.html  
├── /product/index.html  
├── /checkout/index.html  
├── /checkout/confirmation/index.html  
├── /css/style.css  
└── /js/  
  ├── api.js  
  ├── cart.js  
  ├── cartPage.js  
  ├── main.js  
  └── product.js  

## 🧠 Development Process  
All content is fetched dynamically from the API using async/await. No hard-coded product data is used. The site handles API errors with alerts and uses loading states for better UX. Cart functionality is handled entirely with localStorage. Code is modular, formatted, and well-structured. 

## 📝 Reflection  
A full written reflection PDF is included in the submission, covering planning, design, development, problems solved, and what I learned.

## 📄 License  
This project was made for educational purposes only as part of a resit exam at Noroff.
