'use strict';
const {dialogflow} = require('actions-on-google');
const admin = require('firebase-admin');
const functions = require('firebase-functions');

const app = dialogflow({debug:true});

admin.initializeApp();

const db = admin.firestore();
const user_id = result.credential.accessToken;
const collectionRef = db.collection(user_id);

app.intent("createNewItemForList", (conv) => {

});

app.intent("createItem", (conv) => {

});

app.intent("displayAllItems", (conv) => {

});

app.intent("displayItems", (conv) => {

});

app.intent("displayAllStores", (conv) => {

});

app.intent("displayStoreShoppingList", (conv) => {

});

app.intent("removeItemsFromList", (conv) => {

});

app.intent("removeItems", (conv) => {

});


exports.ShoppingList = functions.https.onRequest(app);