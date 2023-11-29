# Hype House Utah (Personal BounceHouse Business Web Application)

## This web application I developed is specifically designed to help my wife and I's small bounce house rental business meant for weddings, baby showers etc. We needed a way to have people create a booking with a selected day they wanted to rent the bounce house for either 3 or 6 hours. I created this project with React + Vite, Express on the backend using a PostgreSQL database and the sequelize ORM.


## Installation

npm i to install the dependencies 
npm run dev to start the server
npm run seed to seed the DB
npm initdb to create and initialize the database


## Credits

it was just me who developed this bad boy
GitHub link: https://github.com/coltenyorgason/hype-house-utah

## Features

Landing Page with a BootStrap NAVBAR that can re-direct you to a product page, Follow us on Instagram Link that takes you directly to instagram, and a contact us form that will eventually send an email to our business email with a message that we can read about a booking or a request with more information. 

the product page contains a card with a button where the user can click to be re-directed to a form and be able to create a booking using a built in calendar and within the form it requires them to input their information and use a dropdown button to select either a 3 or 6 hour time frame to be able to book the bounce house with a price attached to it. 

I created a specific endpoint /admin to be able to destroy(delete) and update bookings. 

this project contains full CRUD and I am excited to add to it as I get better at developing web applications. 




