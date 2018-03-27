# _Can I Eat That?_

## Product Demo

[Video Link](https://youtu.be/BxrDNAAtXcA)

## Project Description

* _Can I Eat That?_ is a mobile app that allows users to quickly create a custom list of food items and then easily avoid purchasing those items when shopping. Users can add items to their "Foods to Avoid" list based on dietary restrictions such as paleo, vegan, vegetarian, and autoimmune diet. Alternatively, users can customize a list of foods to avoid based on specific allergies or food sensitivities.
* Users are then able to scan barcodes at the grocery store to see if the product contains any of ingredients on their "Foods to Avoid" list. Item nutrition information is also displayed so users can monitor and track their health goals.

## Problem Statement

* With continually emerging science in agriculture and health, people are realizing the extent to which food allergies and food sensitivities affect them. In the United States alone, researchers estimate that up to 15 million Americans have food allergies<sup>1</sup>.
* Currently, these people do not have access to a tool that can easily tell them if allergens are contained in food while shopping.
* _Can I Eat That?_ categorizes and references food items according to common dietary restrictions, food allergies, and food intolerances. The app allows users to quickly create their own "Foods to Avoid" list and then cross-reference that list by scanning barcodes on products they are interested in purchasing while shopping.
* The app utilizes the [Food Facts API](https://api.foodfacts.com/) which includes a database of commercially available food items, their ingredients, and their barcodes.

## User Experience

* User opens _Can I Eat That?_ and chooses "New Profile" or “Existing Profile”.
* User selects foods to avoid from a prepopulated list (Vegetarian, Paleo, Vegan, AIP). Alternatively, users choose custom foods to avoid based on allergies or intolerances.
* When the user is shopping, they scan the barcode of any item to be able to tell if item contains ingredients on the "Foods to Avoid" list.
* Users is alerted if the food product contains any items from their "Foods to Avoid" list
* Additionally, product nutrition information is displayed for the selected product.

## Technologies

* HTML, CSS, JavaScript
* PostgreSQL, Knex.js, Psql
* Node.js
* Express
* React Native
* Expo Barcode Scanner
* [Food Facts API](https://api.foodfacts.com/)

## Prioritized Feature list

1.  Seeded database of commonly restricted food from diets, allergies, and intolerances.
2.  Frontend allows user to add foods to avoid
3.  Users scan a barcode Barcode to see if that food matches any items on their "Foods to Avoid" list
4.  Database returns nutritional information for food product

## Future Implementations

* Digital Pantry - scan your receipts to save and view purchased items in a digital pantry
* Digital Cookbook - save your favorite recipes and see what ingredients you need to purchase to make recipes based off your digital pantry

## Resources

<sup>1</sup> National Institute of Allergy and Infectious Diseases, National Institutes of Health. Report of the NIH Expert Panel on Food Allergy Research. 2006.

## Author

BryanLong: https://github.com/bryanlong14

# License

MIT
