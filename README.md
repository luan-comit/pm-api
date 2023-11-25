# NodeJS Final Project

This is Luan Le 's final project at the end of his ComIT NodeJS course, April 7 - July 7, 2021. It was last updated on Nov. 2023.

API functions to date is online at https://pm-api.luanle.online

1. Login & Register & Logout:
  + Click on Login/Register menu
  + Login or click Register new user
  + Logged-in user-email will be shown on upper left corner of the page
  + While logged-in, click logout menu to logout of the system

  Note that only logged-in user will be able to perform further tasks. So please create a new one for yourself.

2. Fetch items:
  + Choose one category and number of items you want to fetch (categories will be updated more when available)
  + Click on the link of the fetched items to see more information
  + Click to save items you want ( one by one ). User must register account to be able to save and manage saved items.
  + If the item logged User want to save is already existed in the database (someone saved it), their account will be updated with existing record information and they may get all information about the item in the past. If it is brand new, system will fetch all necessary information and save new record to their account. It may take 20s-30s or so.

3. Manage saved items:
  + User must login to be able to manage their saved items
  + User can delete items, view graph of each item, update latest of price/date of each items. After performing update, click the display to see latest price by graph (it may take 15s to fetch updates)
  + Add items to the shop for selling

4. Manage shop & billing: https://pm-api.luanle.online/manageshop
  + Edit price and description for selling items
  + Remove, add item to the shop
  + Update and view payment transactions
  + All items are prepared for shopping at https://store.luanle.online
  + All transactions clients make through PayPal and Stripe are saved at https://pm-api.luanle.online/managebilling

5. Payment gateways:
  + API with STRIPE and PAYPAL for online user payments
  + Gather payment transaction and update to mongoDB for billing

# Getting Started

Clone this repo into your local computer then run the following commands:

1. Run `npm install` to install dependencies
2. Run `npm start` to start it locally

Server will be running at http://localhost

