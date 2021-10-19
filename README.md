# Kuki Bakery - Project documentation

## REACT JS Project for bakery website

**I understand time is valuable so here is the link to the live version if you have no time for reading all of the bellow**
[Kuki-live](https://spevak21.github.io/kuki-bakery/)

Instructions on how to run it on your computer:

You need to install following:
npm - node package manager

You need to clone following git repository:

https://github.com/Spevak21/kuki-bakery.git (git clone https://github.com/Spevak21/kuki-bakery.git)

In your terminal, go to the root directory, and run command:
### `npm install`

Next command is (in the same directory):
### `npm start`

## Description 

This is a website for imaginary bakery 'Kuki'. Main focus of the bakery is on baking and selling different flavored cookies (Chocolate, Blueberry, and Raisin at the moment).
Home page: 
- the user can see brief history about the bakery, information about ingredients the bakery uses in their production as well as some ecological aspect of bakeries business model.
Packaging page:
- cookies can come in 3 different types of packaging (paper, glass jar, aluminum box)
Contacts page:
- phone, address, email and socials are provided on this page
- the user can send a message to the bakery (a guest will need to provide a name and an email for sending a message, if a user is logged in credentials are already passed through the website)

On this project, my main focus was on interactive animations and immersiveness of the content in order to keep the user on the website exploring it and possibly ordering cookies.

## Functionalities

When logged in the user will get the option to pick a certain amount of cookies of a certain type. When order is checked on the puchase card it will go to users cart.
In the cart user can:
- change packaging for that particular order (default is paper packaging which is free. Glass packaging is additional $2 and aluminum packaging is additional $5)
- increase or decrease quantity of particular order
- delete order
All calculations are changing live so user can see exactly where he/she is spending certain amount of money

## TO DO

- Add checkout form
- Add user profile page
- Making the website responsive.

## Used technologies
JavaScript
ReactJS
Styled Components
React Router
Git
Heroku
VS Code