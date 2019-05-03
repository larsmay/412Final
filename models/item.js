'use strict';

var admin = require('firebase-admin');

//firestore setup
admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

var db = admin.firestore();
//customize db connections
const settings = {
    timestampsInSnapshots: true
};
//load settings
db.settings(settings);

exports.addToList = async (userName, item, quantity, type, store) => {
    var colRef = db.collection(userName).doc(store);
    colRef.set(
        {[item] : {
            item: item,
            quantity: quantity,
            type: type
        }},{merge:true}
    )
};

exports.shoppingList = async (userName, store) => {
    var shoppingData = await db.collection(userName).doc(store).get();
    return shoppingData;
};